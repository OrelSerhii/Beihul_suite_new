import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@components/NavBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://beihulandpartners.com"),
  title: { default: "Бейгул та Партнери", template: "%s – Бейгул та Партнери" },
  description: "Адвокатське бюро. Супровід бізнесу та фізичних осіб: кримінальні, податкові, митні, сімейні та трудові справи.",
  openGraph: {
    title: "Бейгул та Партнери",
    description: "Супровід бізнесу та фізичних осіб",
    images: ["/og-default.jpg"],
    siteName: "Beihul & Partners",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
  themeColor: "#013026",
};

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="uk">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
