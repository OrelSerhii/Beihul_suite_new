import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({} as any));
  const { name, phone, email, comment, source } = body || {};

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  let sent = false;
  let error: string | null = null;

  if (token && chatId) {
    try {
      const text =
        `🆕 Заявка з сайту\n` +
        `Імʼя: ${name ?? "-"}` + "\n" +
        `Телефон: ${phone ?? "-"}` + "\n" +
        `Email: ${email ?? "-"}` + "\n" +
        `Коментар: ${comment ?? "-"}` + "\n" +
        `Джерело: ${source ?? "web"}`;

      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      sent = res.ok;
      if (!res.ok) error = await res.text();
    } catch (e: any) {
      error = e?.message ?? String(e);
    }
  }

  return NextResponse.json({
    ok: true,
    telegram: { configured: Boolean(token && chatId), sent, error },
  });
}
