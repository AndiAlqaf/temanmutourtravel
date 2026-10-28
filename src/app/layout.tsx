import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#4B3A32",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://temanmutourtravel.vercel.app"
  ),
  title: "Temanmu Tour & Travel — Temanmu Beribadah, Temanmu Menuju Surga",
  description:
    "Layanan Umrah Private, Keluarga, dan Group yang Lebih Personal, Nyaman, dan Bermakna. Teman setia perjalanan ibadah Anda menuju Baitullah sejak 2021. Izin PPIU: 212210042780001.",
  keywords: [
    "Temanmu Tour Travel",
    "Umrah Private",
    "Umrah Keluarga",
    "Umrah Pasangan",
    "Umrah Makasar",
    "Fast Travel Sengkang",
    "Umrah Bintang 5 Ka'bah",
    "Paket Umrah 35 Juta",
    "Paket Umrah Silver 53 Juta",
    "Paket Umrah Platinum 88 Juta",
  ],
  authors: [{ name: "Temanmu Tour & Travel" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/Logo.jpeg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/Logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Temanmu Tour & Travel — Temanmu Beribadah, Temanmu Menuju Surga",
    description:
      "Wujudkan perjalanan ibadah umrah yang lebih personal, nyaman, dan khusyuk bersama keluarga tercinta tanpa harus menunggu rombongan besar.",
    siteName: "Temanmu Tour & Travel",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/Logo.jpeg",
        width: 800,
        height: 800,
        alt: "Temanmu Tour & Travel Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakartaSans.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
