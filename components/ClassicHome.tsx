import LocaleSwitch from "./LocaleSwitch";

export default function ClassicHome() {
  return (
    <div className="min-h-screen bg-white text-[#013026]">
      {/* Top bar */}
      <div className="w-full bg-[#013026] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="opacity-90">Адвокатське бюро</div>
          <div className="flex gap-6 opacity-90">
            <span>Пн–Пт 9:00–18:00</span>
            <span>+380 (00) 000 00 00</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-transparent ring-1 ring-[#e9b05b]/40 flex items-center justify-center font-bold text-[#013026]"><img src="/brand/logo-bp-gold.png" alt="Бейгул та Партнери — емблема" className="w-10 h-10 rounded-full object-cover" /></div>
            <div className="leading-tight">
              <div className="text-xl font-semibold">Бейгул та Партнери</div>
              <div className="text-xs text-gray-500">Адвокатське бюро</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-[#e9b05b]" href="#services">Послуги</a>
            <a className="hover:text-[#e9b05b]" href="#cases">Кейси</a>
            <a className="hover:text-[#e9b05b]" href="#about">Про нас</a>
            <a className="hover:text-[#e9b05b]" href="#blog">Блог</a>
            <a className="hover:text-[#e9b05b]" href="#contacts">Контакти</a>
          </nav>
          <div className="flex items-center gap-3">
            {/* Перемикач локалі */}
            <LocaleSwitch />
            <a className="px-4 py-2 rounded-full bg-[#e9b05b] text-[#013026] hover:bg-[#fcb154] transition" href="#contacts">
              Запис на консультацію
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#013026] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Правові рішення для бізнесу та приватних клієнтів</h1>
            <p className="mt-5 text-lg text-white/90">Працюємо на результат: досудове врегулювання, представництво в суді, супровід угод, комплаенс.</p>
            <div className="mt-8 flex gap-3">
              <a className="px-5 py-3 rounded-full bg-[#e9b05b] text-[#013026] hover:bg-[#fcb154] transition" href="#contacts">Отримати консультацію</a>
              <a className="px-5 py-3 rounded-full border border-white/70 text-white hover:bg-white/10 transition" href="#services">Дізнатися про послуги</a>
            </div>
            <div className="mt-8 flex gap-8 text-sm text-white/80">
              <div><span className="text-2xl font-semibold text-white">20+</span><br/>років практики</div>
              <div><span className="text-2xl font-semibold text-white">300+</span><br/>успішних справ</div>
              <div><span className="text-2xl font-semibold text-white">24/7</span><br/>супровід</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-white/5 border border-white/10 shadow-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#e9b05b] rounded-full blur-2xl opacity-70"></div>
            <div className="absolute -top-6 -right-8 w-44 h-44 bg-[#fcb154] rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#e9b05b] via-[#fcb154] to-[#e9b05b]"></div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Ключові послуги</h2>
          <a href="#" className="text-sm text-[#013026] hover:text-[#e9b05b]">Всі послуги →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {title:"Супровід судових справ", desc:"Підготовка позиції, подання документів, представництво в судах усіх інстанцій."},
            {title:"Корпоративне право", desc:"Реєстрація, реструктуризація, корпоративні договори, M&A супровід."},
            {title:"Податкові спори", desc:"Оскарження рішень, супровід перевірок, оптимізація податкового навантаження."},
            {title:"Договори та угоди", desc:"Розробка, аудит, переговори, мінімізація ризиків."},
            {title:"Захист бізнесу", desc:"Кримінально-правовий супровід, обшуки, запити, стратегія безпеки."},
            {title:"Міжнародні справи", desc:"Правова допомога з іноземним елементом, взаємодія з юрисдикціями."}
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition bg-white">
              <div className="w-10 h-10 rounded-full bg-transparent ring-1 ring-[#e9b05b]/40/20 flex items-center justify-center font-semibold text-[#013026]">{i+1}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <button className="mt-4 text-sm text-[#013026] hover:text-[#e9b05b]">Детальніше →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold">Обрані кейси</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200">
                <div className="text-xs uppercase tracking-wide text-gray-500">Комерційний спір</div>
                <h3 className="mt-2 text-xl font-semibold">Стягнення заборгованості на користь клієнта</h3>
                <p className="mt-2 text-gray-600">Підготовлено позов, забезпечено арешт активів, отримано рішення на суму 5,2 млн ₴.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#013026]">
                  <span className="w-2 h-2 rounded-full bg-[#e9b05b]"></span> Результат: виграно
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl bg-[#013026] text-white p-10 relative overflow-hidden">
          <h2 className="text-3xl font-semibold">Про бюро</h2>
          <p className="mt-4 text-white/90">Ми поєднуємо глибоку експертизу із практичним досвідом у складних спорах та транзакціях. Працюємо прозоро, в інтересах клієнта, з акцентом на превенцію ризиків.</p>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#fcb154] rounded-full blur-2xl opacity-60"></div>
        </div>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl border border-gray-200">
            <div className="text-2xl font-semibold text-[#013026]">95%</div>
            <div className="text-gray-600">справ завершуються на користь клієнтів</div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200">
            <div className="text-2xl font-semibold text-[#013026]">48 год</div>
            <div className="text-gray-600">середній термін підготовки правової позиції</div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200">
            <div className="text-2xl font-semibold text-[#013026]">ISO-ready</div>
            <div className="text-gray-600">внутрішні процеси та комплаенс</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl bg-[#e9b05b] p-8 md:p-10 text-[#013026] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Потрібна допомога саме зараз?</h3>
              <p className="mt-1">Залишіть заявку — юрист звʼяжеться протягом 15 хвилин у робочий час.</p>
            </div>
            <a className="px-6 py-3 rounded-full bg-white text-[#013026] border border-[#013026]/10 hover:bg-[#fdf6ec] transition" href="#contacts">
              Записатися на консультацію
            </a>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section id="blog" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Останні публікації</h2>
          <a href="#" className="text-sm text-[#013026] hover:text-[#e9b05b]">Усі матеріали →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <article key={i} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-xs uppercase tracking-wide text-gray-500">Аналітика</div>
              <h3 className="mt-2 text-xl font-semibold">Як підготуватися до податкової перевірки</h3>
              <p className="mt-2 text-gray-600">Ключові кроки комплаенсу, які зменшують ризики та економлять час.</p>
              <button className="mt-4 text-sm text-[#013026] hover:text-[#e9b05b]">Читати →</button>
            </article>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Контакти</h2>
            <div className="mt-6 space-y-3 text-gray-700">
              <div>м. Одеса, вул. Прикладна, 10</div>
              <div>+380 (00) 000 00 00</div>
              <div>info@beihulandpartners.com</div>
            </div>
            <div className="mt-6">
              <form className="space-y-3">
                <input placeholder="Ваше імʼя" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#013026]" />
                <input placeholder="Телефон або Telegram" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#013026]" />
                <textarea placeholder="Коротко опишіть питання" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#013026] min-h-[120px]" />
                <button className="w-full md:w-auto px-6 py-3 rounded-full bg-[#013026] text-white hover:opacity-90">Надіслати запит</button>
              </form>
              <p className="mt-2 text-xs text-gray-500">Кнопка відправлятиме в Telegram-бота (підключимо на проді).</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-gray-200 h-80 flex items-center justify-center text-gray-400">Мапа / зображення офісу</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="text-lg font-semibold">Бейгул та Партнери</div>
            <p className="mt-2 text-gray-600">Правова підтримка бізнесу та приватних клієнтів.</p>
          </div>
          <div>
            <div className="font-semibold">Навігація</div>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#services" className="hover:text-[#013026]">Послуги</a></li>
              <li><a href="#cases" className="hover:text-[#013026]">Кейси</a></li>
              <li><a href="#blog" className="hover:text-[#013026]">Блог</a></li>
              <li><a href="#contacts" className="hover:text-[#013026]">Контакти</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Юридичне</div>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>Політика конфіденційності</li>
              <li>Умови використання</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Звʼязок</div>
            <div className="mt-2 text-gray-600">info@beihulandpartners.com</div>
            <div className="text-gray-600">+380 (00) 000 00 00</div>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Бейгул та Партнери</div>
      </footer>
    </div>
  );
}




