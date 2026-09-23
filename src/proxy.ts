import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CITY_SLUGS: Record<string, string> = {
  monterrey: "renta-contenedores-monterrey",
  queretaro: "renta-contenedores-queretaro",
  querétaro: "renta-contenedores-queretaro",
  guadalajara: "renta-contenedores-guadalajara",
  "san luis potosi": "renta-contenedores-san-luis-potosi",
  "san luis potosí": "renta-contenedores-san-luis-potosi",
  altamira: "renta-contenedores-altamira",
  tampico: "renta-contenedores-altamira",
  merida: "renta-contenedores-merida",
  mérida: "renta-contenedores-merida",
};

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  if (request.cookies.has("geo-city")) return NextResponse.next();

  const city = request.headers.get("x-vercel-ip-city");
  if (!city) return NextResponse.next();

  const slug = CITY_SLUGS[city.toLowerCase()];

  const response = slug
    ? NextResponse.redirect(new URL(`/${slug}`, request.url), 302)
    : NextResponse.next();

  response.cookies.set("geo-city", slug || "home", {
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: "/",
};
