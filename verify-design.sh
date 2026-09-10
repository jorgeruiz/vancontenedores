#!/usr/bin/env bash
# verify-design.sh — VAN Contenedores design verification
# Checks tokens.css consistency, palette violations, contrast ratios, and motion budget.
set -euo pipefail
VIOLATIONS=0

TOKENS_FILE=""
for f in tokens.css src/tokens.css app/tokens.css src/app/tokens.css; do
  if [ -f "$f" ]; then TOKENS_FILE="$f"; break; fi
done

# --- 1. tokens.css exists ---
echo "=== Check: tokens.css exists ==="
if [ -z "$TOKENS_FILE" ]; then
  echo "FAIL: tokens.css not found."
  VIOLATIONS=$((VIOLATIONS + 1))
  echo ""
  echo "RESULT: $VIOLATIONS violation(s). Fix before committing."
  exit 1
fi
echo "OK: Found $TOKENS_FILE"

# --- 2. @theme has initial resets ---
echo ""
echo "=== Check: @theme initial resets ==="
RESET_OK=true
for TOKEN_NAME in 'color-\*: initial' 'radius-\*: initial' 'font-\*: initial' 'shadow-\*: initial'; do
  if ! grep -q -- "$TOKEN_NAME" "$TOKENS_FILE"; then
    echo "FAIL: Missing reset for --$TOKEN_NAME in @theme block."
    VIOLATIONS=$((VIOLATIONS + 1))
    RESET_OK=false
  fi
done
if [ "$RESET_OK" = true ]; then
  echo "OK: All initial resets present."
fi

# --- 3. Allowed hex colors ---
echo ""
echo "=== Check: Hex colors outside palette ==="

SRC_DIRS=""
for d in src app components; do
  if [ -d "$d" ]; then SRC_DIRS="$SRC_DIRS $d"; fi
done

if [ -n "$SRC_DIRS" ]; then
  # Palette: bg, surface, primary, on_primary, text, text_muted, border, error
  BAD_HEX=$(grep -rn --include='*.tsx' --include='*.ts' --include='*.css' -oE '#[0-9a-fA-F]{6}\b' $SRC_DIRS 2>/dev/null \
    | grep -v 'node_modules' \
    | grep -v 'tokens.css' \
    | grep -v '.test.' \
    | grep -vi '#0A0F14\|#0a0f14' \
    | grep -vi '#141B23\|#141b23' \
    | grep -vi '#247A4C\|#247a4c' \
    | grep -vi '#FFFFFF\|#ffffff' \
    | grep -vi '#E8ECF0\|#e8ecf0' \
    | grep -vi '#7A8A9A\|#7a8a9a' \
    | grep -vi '#1E2A36\|#1e2a36' \
    | grep -vi '#DC2626\|#dc2626' \
    | grep -vi '#F0F2F5\|#f0f2f5' \
    | grep -vi '#D4D9E0\|#d4d9e0' \
    | grep -vi '#4A5568\|#4a5568' \
    || true)
  if [ -n "$BAD_HEX" ]; then
    echo "FAIL: Hex colors outside the 7-token palette + error:"
    echo "$BAD_HEX"
    VIOLATIONS=$((VIOLATIONS + 1))
  else
    echo "OK: All hex colors within palette."
  fi
else
  echo "SKIP: No src/app/components directories yet."
fi

# --- 4. Tailwind default color classes ---
echo ""
echo "=== Check: Tailwind default color classes ==="
if [ -n "$SRC_DIRS" ]; then
  DEFAULTS=$(grep -rn --include='*.tsx' --include='*.ts' -E '(bg|text|border|ring|outline|shadow)-(red|blue|green|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-[0-9]' $SRC_DIRS 2>/dev/null \
    | grep -v 'node_modules' \
    | grep -v '.test.' \
    || true)
  if [ -n "$DEFAULTS" ]; then
    echo "FAIL: Tailwind default color classes found:"
    echo "$DEFAULTS"
    VIOLATIONS=$((VIOLATIONS + 1))
  else
    echo "OK: No Tailwind default color classes."
  fi
else
  echo "SKIP: No src/app/components directories yet."
fi

# --- 5. Tailwind default rounded-* classes ---
echo ""
echo "=== Check: Tailwind default rounded classes ==="
if [ -n "$SRC_DIRS" ]; then
  ROUNDED=$(grep -rn --include='*.tsx' --include='*.ts' -E '\brounded-(sm|md|lg|xl|2xl|3xl|none)\b' $SRC_DIRS 2>/dev/null \
    | grep -v 'node_modules' \
    | grep -v '.test.' \
    || true)
  if [ -n "$ROUNDED" ]; then
    echo "FAIL: Tailwind default rounded-* classes (use var(--radius) via rounded-[var(--radius)] or rounded-full for pills):"
    echo "$ROUNDED"
    VIOLATIONS=$((VIOLATIONS + 1))
  else
    echo "OK: No Tailwind default rounded classes."
  fi
else
  echo "SKIP: No src/app/components directories yet."
fi

# --- 6. Shadow classes (no shadows in this design) ---
echo ""
echo "=== Check: Shadow classes ==="
if [ -n "$SRC_DIRS" ]; then
  SHADOWS=$(grep -rn --include='*.tsx' --include='*.ts' -E '\bshadow-(sm|md|lg|xl|2xl|inner)\b' $SRC_DIRS 2>/dev/null \
    | grep -v 'node_modules' \
    | grep -v '.test.' \
    || true)
  if [ -n "$SHADOWS" ]; then
    echo "FAIL: Shadow classes found (this design uses no shadows):"
    echo "$SHADOWS"
    VIOLATIONS=$((VIOLATIONS + 1))
  else
    echo "OK: No shadow classes."
  fi
else
  echo "SKIP: No src/app/components directories yet."
fi

# --- 7. framer-motion import ---
echo ""
echo "=== Check: framer-motion import ==="
if [ -n "$SRC_DIRS" ]; then
  FRAMER=$(grep -rn --include='*.tsx' --include='*.ts' "from ['\"]framer-motion['\"]" $SRC_DIRS 2>/dev/null \
    | grep -v 'node_modules' \
    || true)
  if [ -n "$FRAMER" ]; then
    echo "FAIL: framer-motion imported (use motion/react instead):"
    echo "$FRAMER"
    VIOLATIONS=$((VIOLATIONS + 1))
  else
    echo "OK: No framer-motion imports."
  fi
else
  echo "SKIP: No src/app/components directories yet."
fi

# --- 8. Undeclared font-family ---
echo ""
echo "=== Check: Undeclared font-family ==="
if [ -n "$SRC_DIRS" ]; then
  FONTS=$(grep -rn --include='*.tsx' --include='*.ts' --include='*.css' 'font-family' $SRC_DIRS 2>/dev/null \
    | grep -v 'var(--font-' \
    | grep -v 'node_modules' \
    | grep -v 'tokens.css' \
    | grep -v '.test.' \
    | grep -v 'system-ui' \
    || true)
  if [ -n "$FONTS" ]; then
    echo "FAIL: font-family outside token variables:"
    echo "$FONTS"
    VIOLATIONS=$((VIOLATIONS + 1))
  else
    echo "OK: All font-family declarations use token variables."
  fi
else
  echo "SKIP: No src/app/components directories yet."
fi

# --- 9. Em-dash check ---
echo ""
echo "=== Check: Em-dash usage ==="
if [ -n "$SRC_DIRS" ]; then
  # Check for em-dash (U+2014) and en-dash (U+2013)
  EMDASH=$(grep -rn --include='*.tsx' --include='*.ts' --include='*.css' -P '[\x{2014}\x{2013}]' $SRC_DIRS 2>/dev/null \
    | grep -v 'node_modules' \
    | grep -v '.test.' \
    || true)
  if [ -n "$EMDASH" ]; then
    echo "FAIL: Em-dash or en-dash characters found (use hyphen instead):"
    echo "$EMDASH"
    VIOLATIONS=$((VIOLATIONS + 1))
  else
    echo "OK: No em-dash or en-dash characters."
  fi
else
  echo "SKIP: No src/app/components directories yet."
fi

# --- 10. Contrast ratio checks (WCAG AA) ---
echo ""
echo "=== Check: Contrast ratios (WCAG AA) ==="

# sRGB relative luminance calculation using awk
calc_luminance() {
  local HEX=$1
  local R=$((16#${HEX:1:2}))
  local G=$((16#${HEX:3:2}))
  local B=$((16#${HEX:5:2}))
  echo "$R $G $B" | awk '{
    r = $1 / 255.0
    g = $2 / 255.0
    b = $3 / 255.0
    r = (r <= 0.03928) ? r / 12.92 : ((r + 0.055) / 1.055) ^ 2.4
    g = (g <= 0.03928) ? g / 12.92 : ((g + 0.055) / 1.055) ^ 2.4
    b = (b <= 0.03928) ? b / 12.92 : ((b + 0.055) / 1.055) ^ 2.4
    printf "%.6f", 0.2126 * r + 0.7152 * g + 0.0722 * b
  }'
}

check_contrast() {
  local NAME=$1
  local FG=$2
  local BG_COLOR=$3
  local MIN_RATIO=$4

  local L1=$(calc_luminance "$FG")
  local L2=$(calc_luminance "$BG_COLOR")

  local RATIO=$(echo "$L1 $L2" | awk '{
    l1 = ($1 > $2) ? $1 : $2
    l2 = ($1 > $2) ? $2 : $1
    ratio = (l1 + 0.05) / (l2 + 0.05)
    printf "%.2f", ratio
  }')

  local PASS=$(echo "$RATIO $MIN_RATIO" | awk '{ print ($1 >= $2) ? 1 : 0 }')

  if [ "$PASS" -eq 1 ]; then
    echo "  OK: $NAME -> ratio $RATIO:1 (min $MIN_RATIO:1)"
  else
    echo "  FAIL: $NAME -> ratio $RATIO:1 (requires $MIN_RATIO:1)"
    VIOLATIONS=$((VIOLATIONS + 1))
  fi
}

# text (#E8ECF0) vs bg (#0A0F14) — WCAG AA body text: 4.5:1
check_contrast "text vs bg" "#E8ECF0" "#0A0F14" 4.5

# text-muted (#7A8A9A) vs bg (#0A0F14) — WCAG AA large text / UI components: 3.0:1
check_contrast "text-muted vs bg" "#7A8A9A" "#0A0F14" 3.0

# text (#E8ECF0) vs surface (#141B23) — WCAG AA body text: 4.5:1
check_contrast "text vs surface" "#E8ECF0" "#141B23" 4.5

# on-primary (#FFFFFF) vs primary (#247A4C) — WCAG AA body text: 4.5:1
check_contrast "on-primary vs primary" "#FFFFFF" "#247A4C" 4.5

# --- Summary ---
echo ""
echo "========================================"
if [ "$VIOLATIONS" -gt 0 ]; then
  echo "RESULT: $VIOLATIONS violation(s) found. Fix before committing."
  exit 1
else
  echo "RESULT: All design checks passed."
  exit 0
fi
