import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Banner from "@/components/banner";
import BotonWhatsApp from "@/components/boton-whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garsocar sas",
  description:
    "Garsocar sas - Soluciones de importación confiables y eficientes para su negocio.",
  icons: {
    icon: "/favicon.ico", // o "/logo.svg" si prefieres
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BotonWhatsApp />
        <NextIntlClientProvider>
          <Banner />
          <Header />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow"> {children}</main>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
