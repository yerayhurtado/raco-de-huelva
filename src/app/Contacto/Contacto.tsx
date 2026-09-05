import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal";

const pasos = [
  "Llama o escribe al 658 89 06 07",
  "Dinos fecha, hora y comensales",
  "Confirma tus datos de contacto",
  "Tu mesa queda reservada",
];

const horario = [
  { dias: "Miércoles a domingo", horas: "13:00 – 16:00", cerrado: false },
  { dias: "Viernes y sábado, noche", horas: "20:30 – 23:30", cerrado: false },
  { dias: "Lunes y martes", horas: "Cerrado", cerrado: true },
];

const DIRECCION = "Carrer de Roger de Llúria 7, 08100 Mollet del Vallès";

// El telefono es la via principal, pero en escritorio un tel: no lleva
// a ninguna parte: WhatsApp cubre ese hueco sin competir con la llamada.
const WHATSAPP = "https://wa.me/34658890607?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20mesa%20en%20El%20Rac%C3%B3%20de%20Huelva.";

function IconoWhatsApp() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24zm-2.6 4.1c-.15 0-.4.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.2.94 2.36c.11.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.43-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.05-.09-.2-.15-.42-.26-.22-.11-1.34-.66-1.54-.73-.21-.08-.36-.12-.5.11-.16.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.14-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.68-1.65-.18-.44-.36-.38-.5-.38l-.43-.01z"/></svg>
  );
}

export default function Contact() {
  return (
    <>
      {/* Schema.org JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "El Racó de Huelva",
            description:
              "Restaurante de mariscos frescos importados de Huelva en Mollet del Vallès, Barcelona. Reservas por teléfono.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Carrer de Roger de Llúria, 7",
              addressLocality: "Mollet del Vallès",
              addressRegion: "Barcelona",
              postalCode: "08100",
              addressCountry: "ES",
            },
            telephone: "+34658890607",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Reservations",
              telephone: "+34658890607",
              availableLanguage: ["es", "ca"],
            },
            priceRange: "$$$",
            servesCuisine: ["Seafood", "Spanish"],
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
        id="contacto"
        className="bg-marino px-5 py-24 sm:px-6 sm:py-32 lg:px-28"
        aria-label="Contacto y reservas - El Racó de Huelva"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">

            <Reveal>
              <h2 className="text-[clamp(2.25rem,5.5vw,3.875rem)] leading-[1.1] text-arena-clara">
                Contacto
              </h2>
            </Reveal>

            <Reveal delay={90} className="mt-6">
              <p className="mx-auto max-w-[35rem] text-base leading-[1.75] text-crema/80 text-pretty sm:text-[17px]">
                Reservamos por teléfono, persona a persona. Llámanos y te buscamos la
                mejor mesa.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal
                as="article"
                delay={300}
                className="border border-arena/40 bg-crema/5 p-8 transition-[border-color,background-color] duration-300 hover:border-arena/60 hover:bg-crema/7 sm:p-11"
              >
                <span className="flex items-center gap-3">
                  <Phone size={17} className="text-arena" aria-hidden="true" />
                  <span className="text-[10px] font-semibold tracking-[0.28em] text-arena uppercase">
                    Reservas
                  </span>
                </span>
                <a
                  href="tel:+34658890607"
                  className="mt-5 block font-display text-[clamp(2rem,5vw,2.875rem)] leading-[1.1] text-arena-clara tabular-nums transition-colors duration-[240ms] hover:text-white"
                >
                  658 89 06 07
                </a>
                <p className="mt-4.5 text-sm leading-[1.7] text-crema/70">
                  Atendemos de miércoles a domingo en horario de servicio. Para grupos de
                  más de ocho personas, llámanos con antelación.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex h-12 w-fit items-center gap-2.5 border border-arena/45 px-5 text-[11px] font-semibold tracking-[0.19em] text-arena uppercase transition-[border-color,color] duration-200 hover:border-arena hover:text-arena-clara"
                >
                  <IconoWhatsApp />
                  Escribir por WhatsApp
                </a>
              </Reveal>

              <Reveal
                as="article"
                delay={380}
                className="border border-arena/25 bg-crema/3 p-8 transition-[border-color,background-color] duration-300 hover:border-arena/50 hover:bg-crema/7 sm:p-11"
              >
                <span className="flex items-center gap-3">
                  <MapPin size={17} className="text-arena" aria-hidden="true" />
                  <span className="text-[10px] font-semibold tracking-[0.28em] text-arena uppercase">
                    Dónde estamos
                  </span>
                </span>
                <address className="mt-4.5 font-display text-xl leading-[1.55] text-arena-clara not-italic sm:text-[22px]">
                  Carrer Roger de Llúria, 7
                  <br />
                  08100 Mollet del Vallès, Barcelona
                </address>
              </Reveal>

              <Reveal
                as="article"
                delay={460}
                className="border border-arena/25 bg-crema/3 p-8 transition-[border-color,background-color] duration-300 hover:border-arena/50 hover:bg-crema/7 sm:p-11"
              >
                <span className="flex items-center gap-3">
                  <Clock size={17} className="text-arena" aria-hidden="true" />
                  <span className="text-[10px] font-semibold tracking-[0.28em] text-arena uppercase">
                    Horario
                  </span>
                </span>
                <dl className="mt-5 flex flex-col">
                  {horario.map((fila, index) => (
                    <div
                      key={fila.dias}
                      className={`flex items-baseline justify-between gap-5 py-3.5 ${
                        index < horario.length - 1 ? "border-b border-arena/18" : ""
                      }`}
                    >
                      <dt className="text-[15px] text-crema/85">{fila.dias}</dt>
                      <dd
                        className={`font-display text-[17px] ${
                          fila.cerrado ? "text-coral-claro" : "text-arena-clara"
                        }`}
                      >
                        {fila.horas}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={340} className="min-h-125 lg:min-h-full">
              <div className="relative h-full min-h-125 overflow-hidden border border-arena/25">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(DIRECCION)}&output=embed`}
                  title="Ubicación de El Racó de Huelva en Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={540} className="mt-22">
            <span className="text-[10px] font-semibold tracking-[0.28em] text-arena uppercase">
              Cómo reservar
            </span>
            <ol className="mt-7 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {pasos.map((paso, index) => (
                <li
                  key={paso}
                  className="flex flex-col gap-3.5 border-t border-arena/40 pt-6"
                >
                  <span className="font-display text-3xl leading-none text-coral-claro">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-[1.65] text-crema/85">{paso}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            delay={620}
            className="mt-19 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <a
              href="tel:+34658890607"
              aria-label="Llamar ahora a El Racó de Huelva"
              className="flex h-15 w-full items-center justify-center gap-3 bg-coral px-12 text-xs font-semibold tracking-[0.19em] text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975] sm:w-auto"
            >
              <Phone size={16} aria-hidden="true" />
              Llamar ahora
              <ArrowRight size={16} aria-hidden="true" className="hidden sm:block" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-15 w-full items-center justify-center gap-3 border border-arena/45 px-10 text-xs font-semibold tracking-[0.19em] text-arena uppercase transition-[border-color,color,transform] duration-200 hover:border-arena hover:text-arena-clara active:scale-[0.975] sm:w-auto"
            >
              <IconoWhatsApp />
              WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
