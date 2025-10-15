import { headers } from 'next/headers';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бейгул та Партнери",
  description: "Адвокатське бюро",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const h = headers();
const path = h.get('x-invoke-path') || '/uk';
const firstSeg = path.split('/').filter(Boolean)[0] || 'uk';
const lang = (firstSeg === 'en') ? 'en' : 'uk';

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
