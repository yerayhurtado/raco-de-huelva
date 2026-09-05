import type { Metadata } from "next";
import { Marcellus, Instrument_Sans } from "next/font/google";
import "./globals.css";

// Marcellus: capital romana de inscripcion. Un solo peso, y el diseño usa uno.
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-marcellus",
});

// Instrument Sans sustituye a Lato: mas caracter en versalitas pequeñas.
// Es variable, asi que no se declara peso: se piden los que hagan falta.
const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "El Racó de Huelva",
  description: "Restaurante de mariscos de alta calidad importados desde Huelva",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "El Racó de Huelva",
    description: "Mariscos de alta calidad importados desde Huelva",
    url: "https://elracodehuelva.es",
    siteName: "El Racó de Huelva",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${marcellus.variable} ${instrument.variable}`}>
      <head>
        {/* Marca que hay JS antes del primer pintado. Sin esto, si el script
            fallase, todo lo que entra al hacer scroll quedaria invisible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
