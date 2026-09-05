"use client";

import { useState } from "react";
import { Play, Star } from "lucide-react";
import Reveal from "../components/Reveal";

const resenas = [
  {
    nombre: "Yeray Hurtado",
    iniciales: "YH",
    meta: "Hace 4 meses",
    ticket: "Ticket 10-20 €",
    texto:
      "Todo delicioso. La ensaladilla con langostino de Sanlúcar y huevo frito fue un comienzo perfecto. El solomillo con salsa de oporto, tierno y sabroso. Y la tarta de queso de pantera rosa, original y riquísima. Atención excelente. ¡Volveremos!",
  },
  {
    nombre: "ELM",
    iniciales: "ELM",
    meta: "Hace 2 meses · Local Guide, 305 reseñas",
    ticket: "Menú del día 17 €",
    texto:
      "No puedes pasar por Mollet y perderte este lugar. Comida espectacular y la mejor relación precio/calidad que recuerdo. Platos cuidados y sabores reales. Recomendable el arroz con bogavante. El trato de Pedro, el dueño, muy cercano, y la comida de Angie para recordarla durante mucho tiempo.",
  },
  {
    nombre: "Marta Molero Codina",
    iniciales: "MM",
    meta: "Hace 2 meses · Local Guide, 100 reseñas",
    ticket: "Ticket 20-30 €",
    texto:
      "Comida muy elaborada, casera y con mucho mimo. El dueño es espectacular desde el inicio hasta el final, se preocupa por todo. Pone especial atención a cualquier detalle, nos aconsejó muy bien. 100% recomendable.",
  },
  {
    nombre: "Sara Martínez Palmieri",
    iniciales: "SM",
    meta: "Hace 1 mes · Local Guide, 416 reseñas",
    ticket: "Ticket 50-60 €",
    texto:
      "Muy buena experiencia. Decoración y ambiente agradable, servicio muy amable y eficiente, y buena calidad en sus platos. Las croquetas de secreto ibérico con salsa de miel, un poema. Las tartas de queso deliciosas, la tradicional y la de chocolate con sal y aceite de oliva. Lo recomiendo.",
  },
  {
    nombre: "Josep Franco Martínez",
    iniciales: "JF",
    meta: "Hace 3 meses",
    ticket: "Ticket 40-50 €",
    texto:
      "Acabamos de comer hoy en El Racó de Huelva y ha sido una experiencia fantástica. Comida auténtica, sabrosa y con productos de primera. El trato, muy cercano y amable. Un sitio que nunca falla. Destacar que tienen comida sin gluten.",
  },
];

const googleRating = "4,6";

export default function Opiniones() {
  // El vídeo se carga solo al pulsar: un iframe de YouTube en la carga
  // inicial cuesta cientos de kB y bloquea el hilo principal.
  const [videoActivo, setVideoActivo] = useState(false);

  return (
    <section
      id="opiniones"
      className="bg-crema px-5 py-24 sm:px-6 sm:py-32 lg:px-28"
      aria-label="Opiniones y reseñas - El Racó de Huelva"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-[clamp(2.25rem,5.5vw,3.875rem)] leading-[1.05] text-marino">
                Lo que dicen
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-[35rem] text-guia leading-[1.75] text-tinta text-pretty">
                La opinión de quien se sienta a nuestra mesa es el único aval que nos
                interesa.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="flex flex-wrap items-center gap-4 border border-bronce/30 px-7 py-4">
              <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="hidden h-6.5 w-px bg-bronce/30 sm:block" />
              <span className="font-display text-pieza leading-none text-marino tabular-nums">
                {googleRating}
              </span>
              <span className="flex gap-1" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} size={15} className="fill-bronce text-bronce" />
                ))}
                <Star size={15} className="text-bronce/45" />
              </span>
              <span className="text-mini tracking-[0.09em] text-tinta/75">
                valoración media en Google
              </span>
            </div>
          </Reveal>
        </div>

        {/* Mosaico en vez de carrusel: el activo es el volumen de reseñas,
            y de una en una se esconde justo eso. */}
        <div className="mt-16 gap-x-7 sm:mt-20 md:columns-2 xl:columns-3">
          {resenas.map((resena, index) => (
            <Reveal
              key={resena.nombre}
              as="article"
              delay={index * 70}
              className="mb-7 flex break-inside-avoid flex-col border border-bronce/25 bg-white/55 p-7 sm:p-9"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-bronce/45 text-nota font-semibold tracking-[0.08em] text-bronce">
                  {resena.iniciales}
                </span>
                <span className="flex flex-col gap-1.5 pt-0.5">
                  <span className="font-display text-precio leading-[1.2] text-marino">
                    {resena.nombre}
                  </span>
                  <span className="flex gap-1" aria-label="5 de 5 estrellas">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={13} className="fill-bronce text-bronce" aria-hidden="true" />
                    ))}
                  </span>
                </span>
              </div>

              <p className="mt-6 font-display text-guia leading-[1.7] text-marino text-pretty">
                {resena.texto}
              </p>

              <span className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-bronce/25 pt-4 text-micro font-semibold tracking-[0.22em] text-bronce uppercase">
                <span>{resena.ticket}</span>
                <span aria-hidden="true">·</span>
                <span className="normal-case tracking-[0.06em] text-tinta/65">
                  {resena.meta}
                </span>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-14">
          {videoActivo ? (
            <div className="relative aspect-video w-full overflow-hidden border border-arena/30 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/XpiztuF9s4c?autoplay=1"
                title="Reseña en vídeo de El Racó de Huelva"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setVideoActivo(true)}
              className="group flex w-full cursor-pointer items-center gap-6 border border-bronce/30 bg-white/55 p-7 text-left transition-colors duration-300 hover:border-bronce/55 sm:gap-9 sm:p-11"
            >
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-bronce/12 transition-[background-color,transform] duration-300 ease-[var(--ease-suave)] group-hover:scale-105 group-hover:bg-coral sm:h-17 sm:w-17">
                <Play size={22} className="ml-0.5 fill-marino text-marino" aria-hidden="true" />
              </span>
              <span className="flex flex-1 flex-col gap-2">
                <span className="text-micro font-semibold tracking-[0.28em] text-bronce uppercase">
                  Reseña en vídeo
                </span>
                <span className="font-display text-plato leading-[1.25] text-marino">
                  Un recorrido completo por nuestra propuesta
                </span>
              </span>
            </button>
          )}
        </Reveal>

        <div className="mt-22 flex flex-col items-center gap-6.5">
          <Reveal
            variant="rule-draw"
            as="span"
            className="block h-px w-16 origin-center bg-bronce/60"
          >
            {null}
          </Reveal>
          <Reveal delay={80} className="w-full sm:w-auto">
            <a
              href="tel:+34658890607"
              aria-label="Llamar a El Racó de Huelva para reservar mesa"
              className="flex h-14 w-full items-center justify-center bg-coral px-10 text-mini font-semibold tracking-[0.19em] text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975] sm:w-auto"
            >
              Reservar mesa
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
