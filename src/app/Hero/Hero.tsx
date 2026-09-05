import Image from "next/image";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <>
      {/* JSON-LD Schema para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "El Racó de Huelva",
            description:
              "Restaurante de mariscos frescos importados de Huelva en Mollet del Vallès, Barcelona",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Carrer de Roger de Llúria, 7",
              addressLocality: "Mollet del Vallès",
              addressRegion: "Barcelona",
              postalCode: "08100",
              addressCountry: "ES",
            },
            telephone: "+34658890607",
            priceRange: "$$$",
            servesCuisine: ["Seafood", "Spanish"],
            // Horario alineado con Contacto y el pie. La version anterior
            // declaraba martes abierto y contradecia al resto de la web.
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "13:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Friday", "Saturday"],
                opens: "20:30",
                closes: "23:30",
              },
            ],
          }),
        }}
      />

      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-marino-oscuro pt-28 pb-24 text-white sm:pt-32"
        aria-label="Bienvenida a El Racó de Huelva - Mariscos frescos de Huelva en Mollet del Vallès, Barcelona"
      >
        <Image
          src="/HeroBg.jpg"
          alt="Mariscos frescos premium de Huelva en El Racó de Huelva, restaurante en Mollet del Vallès"
          fill
          className="hero-settle z-0 object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(13,46,61,0.88)_0%,rgba(15,63,92,0.68)_42%,rgba(13,46,61,0.92)_100%)]" />

        <div className="relative z-10 w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Reveal delay={340} className="flex items-center gap-4">
              <span className="hidden h-px w-8 bg-arena/55 sm:block" />
              <span className="text-[10px] tracking-[0.32em] text-arena uppercase sm:text-[11px] sm:tracking-[0.34em]">
                Producto de Huelva · Mollet del Vallès
              </span>
              <span className="hidden h-px w-8 bg-arena/55 sm:block" />
            </Reveal>

            <Reveal delay={460} className="mt-6 sm:mt-7">
              <h1 className="max-w-[72rem] text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.08] text-arena-clara text-pretty">
                Sabores del mar de Huelva
                <span className="hidden sm:inline">
                  <br />
                </span>
                <span className="sm:hidden"> </span>
                en tu mesa
              </h1>
            </Reveal>

            <Reveal
              variant="rule-draw"
              delay={760}
              as="span"
              className="mt-7 block h-px w-16 origin-center bg-arena sm:w-23"
            >
              {null}
            </Reveal>

            <Reveal delay={620} className="mt-7 sm:mt-8">
              <p className="mx-auto max-w-[38rem] text-base leading-[1.75] text-crema/85 text-pretty sm:text-lg">
                Marisco fresco traído directamente desde Huelva y Sanlúcar, tratado con
                cocina de producto y servicio de sala en el centro de Mollet del Vallès.
              </p>
            </Reveal>

            <Reveal
              delay={760}
              className="mt-10 flex w-full flex-col items-center gap-4 sm:mt-11 sm:w-auto sm:flex-row sm:gap-8"
            >
              <a
                href="tel:+34658890607"
                aria-label="Llamar a El Racó de Huelva para reservar mesa"
                className="flex h-14 w-full items-center justify-center bg-coral px-10 text-xs font-semibold tracking-[0.19em] text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975] sm:w-auto"
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                aria-label="Ver la carta completa"
                className="group flex h-14 w-full items-center justify-center gap-2.5 border border-arena/45 px-8 text-xs tracking-[0.19em] text-arena uppercase transition-colors duration-200 hover:border-arena sm:w-auto sm:border-x-0 sm:border-t-0 sm:border-b sm:px-1"
              >
                Ver la carta
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>

            <Reveal
              delay={900}
              className="mt-11 flex flex-col items-center gap-3 text-xs tracking-[0.08em] text-crema/75 sm:mt-13 sm:flex-row sm:gap-5"
            >
              <span className="flex items-center gap-2">
                <Star size={14} className="fill-arena text-arena" aria-hidden="true" />
                4,6 en Google
              </span>
              <span className="hidden h-[3px] w-[3px] rounded-full bg-arena/60 sm:block" />
              <span>Carrer Roger de Llúria, 7</span>
              <span className="hidden h-[3px] w-[3px] rounded-full bg-arena/60 sm:block" />
              <span>Miércoles a domingo</span>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10 hidden flex-col items-center gap-2.5 sm:flex">
          <span className="text-[10px] tracking-[0.3em] text-arena/70 uppercase">
            Descubre
          </span>
          <ChevronDown size={18} className="cue text-arena" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
