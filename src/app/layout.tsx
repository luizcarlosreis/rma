import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RMA Solutions | Assessoria Contábil e Trabalhista a Condomínios",
  description:
    "Soluções modernas de gestão financeira, departamento pessoal, assessoria fiscal e controle de inadimplência para condomínios em Guarulhos-SP. Transparência e eficiência operacional.",
  keywords: [
    "administração de condomínios",
    "assessoria contábil para condomínio",
    "departamento pessoal condomínios",
    "gestão financeira Guarulhos",
    "RMA Solutions",
    "contabilidade Guarulhos"
  ],
  authors: [{ name: "RMA Solutions" }],
  openGraph: {
    title: "RMA Solutions | Assessoria Contábil e Trabalhista a Condomínios",
    description:
      "Modernidade, segurança e transparência financeira para a gestão do seu condomínio. Conheça nossos serviços especializados.",
    url: "https://rmasolutions.com.br",
    siteName: "RMA Solutions",
    locale: "pt_BR",
    type: "website",
    // images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased selection:bg-rose-500 selection:text-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

