import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLOWA — L'IA qui garantit votre trésorerie",
  description:
    "Flowa est l'assistant financier IA pour les PME africaines, accessible via WhatsApp vocal et SMS. Recouvrement automatisé, comptabilité vocale, prédiction de découvert et micro-crédit instantané.",
  keywords: [
    "Flowa",
    "IA",
    "PME",
    "Afrique",
    "trésorerie",
    "WhatsApp",
    "Orange Money",
    "recouvrement",
    "comptabilité vocale",
    "micro-crédit",
    "OSC 2026",
  ],
  authors: [{ name: "Flowa — OSC 2026" }],
  icons: {
    icon: "/logo-orange.svg",
  },
  openGraph: {
    title: "FLOWA — L'IA qui garantit votre trésorerie",
    description:
      "Assistant financier IA pour PME africaines. WhatsApp vocal + SMS. Recouvrement automatisé, prédiction de découvert, micro-crédit instantané.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
