import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бейгул та Партнери",
  description: "Адвокатське бюро",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
