import type { Metadata } from "next";
import { withSite, defaultDescription } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: withSite("Про компанію"),
  description: defaultDescription,
};

export default function AboutPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-3">Про компанію</h1>
      <p className="opacity-80">
        Адвокатське бюро «Бейгул та Партнери» — фокус на кримінальних, податкових і митних спорах,
        а також сімейних і трудових питаннях. Пояснюємо простими словами, працюємо на результат.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        <li className="border rounded p-3"><b>Дисципліна процесу.</b> Стратегія й дедлайни.</li>
        <li className="border rounded p-3"><b>Прозорі умови.</b> Узгодження бюджету до старту.</li>
        <li className="border rounded p-3"><b>Конфіденційність.</b> Акуратна робота з матеріалами.</li>
        <li className="border rounded p-3"><b>Комунікація.</b> Регулярні апдейти клієнтам.</li>
      </ul>
      <div className="mt-5">
        <Link href="/contacts" className="border rounded px-4 py-2 font-semibold">Запис на консультацію</Link>
      </div>
    </main>
  );
}
