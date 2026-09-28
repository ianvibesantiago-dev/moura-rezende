import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Moura & Rezende Advogados — Advocacia empresarial em São Paulo",
  description:
    "Escritório boutique de advocacia empresarial, tributária, trabalhista e de família em São Paulo. Atendimento de sócio do primeiro ao último contato.",
  openGraph: { locale: "pt_BR", type: "website", title: "Moura & Rezende Advogados" },
};

export const viewport: Viewport = { themeColor: "#16302a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${caslon.variable} ${manrope.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
