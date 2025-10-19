import type { Metadata } from "next";
import { Marcellus, Lato } from "next/font/google";
import "./globals.css";

// Importamos las fuentes
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "El Racó de Huelva",
  description: "Restaurante de mariscos de alta calidad importados desde Huelva",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${marcellus.variable} ${lato.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
