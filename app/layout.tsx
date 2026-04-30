import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Inter, Radley } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

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
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
    <html
      lang="en"
      className={`${inter.variable} ${radley.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body>
        <LenisProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
