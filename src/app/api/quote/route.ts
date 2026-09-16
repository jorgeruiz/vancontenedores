import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, company, size, use, city, interest, message } = body;

    if (!name || !phone || !size || !use || !city || !interest) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const port = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlBody = `
      <h2 style="color:#247A4C;font-family:sans-serif;">Nueva cotización desde vancontenedores.com</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:500px;">
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px 12px;font-weight:bold;color:#555;">Me interesa</td>
          <td style="padding:8px 12px;">${interest}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px 12px;font-weight:bold;color:#555;">Nombre</td>
          <td style="padding:8px 12px;">${name}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px 12px;font-weight:bold;color:#555;">Teléfono</td>
          <td style="padding:8px 12px;">${phone}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px 12px;font-weight:bold;color:#555;">Empresa</td>
          <td style="padding:8px 12px;">${company || "N/A"}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px 12px;font-weight:bold;color:#555;">Tamaño</td>
          <td style="padding:8px 12px;">${size}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px 12px;font-weight:bold;color:#555;">Uso</td>
          <td style="padding:8px 12px;">${use}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:8px 12px;font-weight:bold;color:#555;">Ciudad</td>
          <td style="padding:8px 12px;">${city}</td>
        </tr>
        ${message ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Mensaje</td><td style="padding:8px 12px;">${message}</td></tr>` : ""}
      </table>
      <p style="font-family:sans-serif;font-size:12px;color:#999;margin-top:20px;">
        Enviado desde vancontenedores.com
      </p>
    `;

    await transporter.sendMail({
      from: `"VAN Contenedores Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `Cotización - ${interest} - ${name} - ${size} - ${city}`,
      html: htmlBody,
      replyTo: company ? undefined : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
