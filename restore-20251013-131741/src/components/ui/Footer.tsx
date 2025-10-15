import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="container py-10 text-sm text-brand-muted">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Бейгул та Партнери</p>
          <nav className="flex gap-6">
            <Link href="/uk/privacy">Політика конфіденційності</Link>
            <Link href="/uk/terms">Умови використання</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
