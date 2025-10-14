import Image from "next/image";
import Button from "@/components/ui/Button";

export const dynamic = 'force-dynamic'; // залишаємо, щоб уникати таймаутів SSG
export const revalidate = 0;

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-green text-brand-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Адвокатське бюро «Бейгул та Партнери»
            </h1>
            <p className="mt-4 text-lg text-brand-white/90">
              Супровід бізнесу й приватних клієнтів. Кримінальні, податкові, митні, сімейні та трудові справи.
            </p>
            <div className="mt-8 flex gap-3">
              <Button>Запис на консультацію</Button>
              <Button variant="outline">Дивитись послуги</Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/brand/hero-viktoria-1.jpg"
              fill
              alt="Вікторія Бейгул"
              className="object-cover rounded-xl2 shadow-brand"
              priority
            />
          </div>
        </div>
        <div className="h-2 w-full bg-brand-gold" />
      </section>

      {/* тут знизу можна додавати наступні секції: послуги, кейси тощо */}
    </main>
  );
}
