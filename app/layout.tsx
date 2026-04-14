import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeFe Uniformes | Vestimos tu profesión",
  description:
    "Uniformes para todos los rubros. Por mayor y menor. Personalizados con bordado o estampado. Envíos a todo el país. Empresas, Gastronomía, Salud, Industria.",
  keywords:
    "uniformes, ropa de trabajo, bordado, estampado, uniformes gastronomia, uniformes salud, uniformes industria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
