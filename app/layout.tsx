import type { Metadata } from "next";
import { Inter, Radley } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const radley = Radley({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-radley",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ipsa | The truth behind your ad spend",
  description:
    "Ipsa replaces months of manual MMM work with a repeatable platform built for agencies. Pipelines, models, and plain-language explanations in one place.",
  metadataBase: new URL("https://getipsa.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${radley.variable}`}>
      <body>
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
