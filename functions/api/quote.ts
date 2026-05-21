import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "Server configuration error" }, { status: 500 });

  let nombre = "", empresa = "", whatsapp = "", producto = "",
    tallas = "", color = "", cantidad = "", fecha = "", comentarios = "";

  try {
    const fd = await request.formData();
    nombre = fd.get("nombre") as string || "";
    empresa = fd.get("empresa") as string || "";
    whatsapp = fd.get("whatsapp") as string || "";
    producto = fd.get("producto") as string || "";
    tallas = fd.get("tallas") as string || "";
    color = fd.get("color") as string || "";
    cantidad = fd.get("cantidad") as string || "";
    fecha = fd.get("fecha") as string || "";
    comentarios = fd.get("comentarios") as string || "";
  } catch {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
  <body style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f8f9fa;color:#191c1d">
    <div style="background:#9e3c5a;padding:24px 28px;border-radius:12px;margin-bottom:24px">
      <h1 style="color:#fff;margin:0;font-size:20px">Nueva solicitud de cotización</h1>
      <p style="color:#ffd9e0;margin:6px 0 0;font-size:14px">Pop Ideas — Merchandising Premium</p>
    </div>
    <div style="background:#fff;border-radius:12px;border:1px solid #dac0c4;overflow:hidden;margin-bottom:24px">
      <table style="width:100%;border-collapse:collapse">
        ${row("Cliente", nombre)}
        ${row("Empresa", empresa)}
        ${row("WhatsApp", whatsapp)}
        ${row("Producto", producto)}
        ${row("Tallas", tallas)}
        ${row("Color de prenda", color)}
        ${row("Cantidad", cantidad)}
        ${row("Fecha requerida", fecha)}
        ${row("Comentarios", comentarios)}
      </table>
    </div>
    <p style="text-align:center;font-size:11px;color:#877275">
      Recibido el ${new Date().toLocaleString("es-GT", { timeZone: "America/Guatemala", dateStyle: "full", timeStyle: "short" })}
    </p>
  </body></html>`;

  const { error } = await resend.emails.send({
    from: "Pop Ideas <noreply@conectamierp.com>",
    to: "contact@popideasnc.com",
    subject: `Cotización: ${nombre} — ${empresa} (${new Date().toLocaleDateString("es-GT")})`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Email error" }, { status: 500 });
  }
  return Response.json({ success: true });
};

function row(label: string, value: string): string {
  if (!value?.trim()) return "";
  return `<tr>
    <td style="padding:10px 16px;color:#554246;font-size:13px;border-bottom:1px solid #f3f4f5;width:180px;font-weight:600">${label}</td>
    <td style="padding:10px 16px;font-size:13px;border-bottom:1px solid #f3f4f5;color:#191c1d">${value.replace(/\n/g, "<br>")}</td>
  </tr>`;
}
