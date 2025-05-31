import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Portafolio Marino",
  description: "Portafolio personal con temática del océano",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}