import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV. Imex Tama | Produsen Tangki Air Polo & Solusi Manufaktur Terpercaya",
  description: "CV. Imex Tama merupakan perusahaan manufaktur terpercaya dengan keahlian dalam pembuatan tangki air Polo, tangki Oasis, serta berbagai produk industri presisi. Dengan pengalaman lebih dari tiga dekade, kami menghadirkan solusi manufaktur berkualitas tinggi sesuai kebutuhan Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
