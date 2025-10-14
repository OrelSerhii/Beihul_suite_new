import type { Metadata } from "next";
import { withSite, defaultDescription } from "@/lib/seo";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: withSite("Контакти"),
  description: defaultDescription,
};

export default function ContactsPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Контакти</h1>
      <p className="mb-4">Залиште заявку — ми звʼяжемося з вами.</p>
      <ContactForm />
    </main>
  );
}
