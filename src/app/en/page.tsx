import Link from "next/link";

export default function Page() {
  return (
    <section className="py-8">
      <div className="card p-6">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Beyhul & Partners — Law Firm
        </h1>
        <p className="mt-3 text-lg opacity-80">
          Criminal defense, tax & customs disputes, family and labor law — for businesses and individuals.
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/contacts" className="btn btn-primary">Book a consultation</Link>
          <Link href="/services" className="btn">View services</Link>
        </div>
      </div>
    </section>
  );
}
