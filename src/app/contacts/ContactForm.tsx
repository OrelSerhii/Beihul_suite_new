"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      comment: (form.elements.namedItem("comment") as HTMLTextAreaElement).value,
      source: "contacts-page",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await res.json();
      if (j?.ok) { setMsg("Дякуємо! Заявку надіслано."); form.reset(); }
      else { setMsg("Сталася помилка. Спробуйте ще раз."); }
    } catch {
      setMsg("Сталася помилка мережі.");
    } finally { setLoading(false); }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-lg">
      <input name="name" placeholder="Імʼя" required className="border rounded p-2" />
      <input name="phone" placeholder="Телефон" required className="border rounded p-2" />
      <input name="email" type="email" placeholder="Email" className="border rounded p-2" />
      <textarea name="comment" placeholder="Коротко опишіть питання" rows={4} className="border rounded p-2" />
      <button disabled={loading} className="border rounded p-2 font-semibold">
        {loading ? "Надсилаємо…" : "Запис на консультацію"}
      </button>
      {msg && <p className="text-sm opacity-80">{msg}</p>}
    </form>
  );
}
