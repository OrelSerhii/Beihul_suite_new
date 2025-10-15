type Props = { params: { slug: string } };

export default function CaseDetails({ params }: Props) {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-2">Кейс: {params.slug}</h1>
      <p>Тут буде повний опис: ситуація → стратегія → результат → відгук.</p>
    </main>
  );
}
