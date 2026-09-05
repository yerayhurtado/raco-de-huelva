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
  // Sin metadataBase, las URLs de las tarjetas para compartir salen
  // relativas y ni WhatsApp ni Google las resuelven.
  metadataBase: new URL("https://elracodehuelva.es"),
  title: "El Racó de Huelva | Marisco de Huelva en Mollet del Vallès",
  description:
    "Marisco fresco traído directamente desde Huelva y Sanlúcar, en el centro de Mollet del Vallès. Reservas por teléfono y WhatsApp.",
  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "El Racó de Huelva",
    description:
      "Marisco fresco traído directamente desde Huelva y Sanlúcar, en Mollet del Vallès.",
    url: "https://elracodehuelva.es",
    siteName: "El Racó de Huelva",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "El Racó de Huelva",
    description:
      "Marisco fresco traído directamente desde Huelva y Sanlúcar, en Mollet del Vallès.",
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
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
