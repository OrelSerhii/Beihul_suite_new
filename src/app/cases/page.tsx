import type { Metadata } from "next";
import { withSite, defaultDescription } from "@/lib/seo";
import Link from "next/link";

type Case = { slug: string; title: string; result: string; summary: string };

const cases: Case[] = [
  { slug: "tax-dispute-2024", title: "Податковий спір для ТОВ «Приклад»", result: "Скасовано ППР на 3,2 млн грн", summary: "Оскарження ППР, апеляція, супровід перевірки." },
  { slug: "customs-fine-appeal", title: "Скасування штрафу митниці", result: "Штраф 0 грн", summary: "Довели відсутність складу правопорушення." },
  { slug: "criminal-defense", title: "Кримінальна справа щодо посадової особи", result: "Закриття провадження", summary: "Збір доказів, клопотання, адвокатські запити." },
];

export const metadata: Metadata = {
  title: withSite("Кейси"),
  description: defaultDescription,
};

export default function CasesPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Кейси</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {cases.map((c) => (
          <li key={c.slug} className="border rounded p-4">
            <h2 className="font-semibold">{c.title}</h2>
            <p className="text-sm opacity-80">{c.summary}</p>
            <p className="text-sm mt-1"><b>Результат:</b> {c.result}</p>
            <div className="mt-2">
              <Link className="underline" href={"/cases/" + c.slug}>Детальніше</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
