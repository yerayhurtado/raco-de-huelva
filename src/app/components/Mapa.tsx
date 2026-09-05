"use client";

import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

const DIRECCION = "Carrer de Roger de Llúria 7, 08100 Mollet del Vallès";
const EMBED = `https://www.google.com/maps?q=${encodeURIComponent(DIRECCION)}&output=embed`;
const ENLACE = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`;

/**
 * El mapa entra solo cuando se pide.
 *
 * Un iframe de Google Maps en la carga inicial son cientos de kB de
 * terceros y cookies antes de que nadie lo haya pedido, lo que además
 * arrastra consentimiento. La fachada da la misma información util
 * (dónde está y cómo llegar) sin cargar nada de fuera.
 */
export default function Mapa() {
  const [cargado, setCargado] = useState(false);

  if (cargado) {
    return (
      <div className="relative h-full min-h-125 overflow-hidden border-t border-arena/30">
        <iframe
          src={EMBED}
          title="Ubicación de El Racó de Huelva en Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-125 flex-col justify-end overflow-hidden border-t border-arena/30 bg-marino/70 p-9 sm:p-11">
      <svg
        viewBox="0 0 640 640"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-45"
        aria-hidden="true"
      >
        <g stroke="#D4AF8A" strokeWidth="1" fill="none" opacity="0.5">
          <path d="M-40 150 L680 108" />
          <path d="M-40 320 L680 296" />
          <path d="M-40 470 L680 500" />
          <path d="M120 -40 L96 680" />
          <path d="M300 -40 L318 680" />
          <path d="M486 -40 L462 680" />
        </g>
        <g stroke="#D4AF8A" strokeWidth="0.6" fill="none" opacity="0.28">
          <path d="M-40 60 L680 34" />
          <path d="M-40 232 L680 205" />
          <path d="M-40 395 L680 400" />
          <path d="M-40 560 L680 592" />
          <path d="M210 -40 L200 680" />
          <path d="M392 -40 L398 680" />
          <path d="M570 -40 L556 680" />
        </g>
        <rect x="304" y="286" width="34" height="30" fill="#F98661" opacity="0.5" />
      </svg>

      <div className="relative flex flex-col">
        <span className="flex items-center gap-2.5">
          <MapPin size={17} className="text-coral-claro" aria-hidden="true" />
          <span className="text-micro font-semibold tracking-[0.28em] text-arena uppercase">
            Cómo llegar
          </span>
        </span>
        <p className="mt-4 max-w-[24rem] font-display text-pieza leading-[1.35] text-arena-clara">
          A dos minutos a pie de la estación de Mollet-Sant Fost
        </p>

        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-5">
          <button
            type="button"
            onClick={() => setCargado(true)}
            className="flex h-12 cursor-pointer items-center justify-center border border-arena/45 px-6 text-mini font-semibold tracking-[0.19em] text-arena uppercase transition-[border-color,color] duration-200 hover:border-arena hover:text-arena-clara active:scale-[0.975]"
          >
            Ver el mapa aquí
          </button>
          <a
            href={ENLACE}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 items-center gap-2.5 text-mini font-semibold tracking-[0.19em] text-arena uppercase transition-colors duration-200 hover:text-arena-clara"
          >
            Abrir en Google Maps
            <ArrowRight
              size={15}
              className="transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <p className="mt-5 text-mini leading-[1.6] text-crema/50">
          El mapa lo carga Google. No se carga nada hasta que lo pides.
        </p>
      </div>
    </div>
  );
}
