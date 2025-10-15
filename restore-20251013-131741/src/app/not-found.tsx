import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Сторінку не знайдено</h1>
      <p className="opacity-80 mb-6">Можливо, адреса змінена або сторінка тимчасово недоступна.</p>
      <Link href="/uk" className="border rounded px-4 py-2 font-semibold">На головну</Link>
    </main>
  );
}
