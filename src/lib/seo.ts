export const SITE_NAME = "Бейгул та Партнери";
export const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const defaultTitle = SITE_NAME;
export const defaultDescription =
  "Адвокатське бюро «Бейгул та Партнери»: кримінальні справи, податкові та митні спори, сімейні й трудові питання.";

export function withSite(title?: string) {
  const t = (title ?? "").trim();
  return t ? `${t} — ${SITE_NAME}` : SITE_NAME;
}

export const seo = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(DOMAIN),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: DOMAIN,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};
