"use client";

import { useEffect, useState } from "react";

/**
 * Horario de servicio. Índices de día como getDay(): 0 = domingo.
 * Miércoles a domingo al mediodía; viernes y sábado también por la noche.
 */
const SERVICIOS: Record<number, { abre: number; cierra: number }[]> = {
  0: [{ abre: 13 * 60, cierra: 16 * 60 }], // domingo
  3: [{ abre: 13 * 60, cierra: 16 * 60 }], // miércoles
  4: [{ abre: 13 * 60, cierra: 16 * 60 }], // jueves
  5: [
    { abre: 13 * 60, cierra: 16 * 60 },
    { abre: 20 * 60 + 30, cierra: 23 * 60 + 30 },
  ], // viernes
  6: [
    { abre: 13 * 60, cierra: 16 * 60 },
    { abre: 20 * 60 + 30, cierra: 23 * 60 + 30 },
  ], // sábado
};

const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

const reloj = (minutos: number) =>
  `${String(Math.floor(minutos / 60)).padStart(2, "0")}:${String(minutos % 60).padStart(2, "0")}`;

/** Hora local de Mollet, sea cual sea la zona horaria de quien mira. */
function ahoraEnMadrid() {
  const partes = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const buscar = (tipo: string) => partes.find((p) => p.type === tipo)?.value ?? "";
  const abrev = buscar("weekday").toLowerCase().slice(0, 2);
  const dia = ["do", "lu", "ma", "mi", "ju", "vi", "sá"].indexOf(abrev);

  return {
    dia: dia === -1 ? new Date().getDay() : dia,
    minutos: Number(buscar("hour")) * 60 + Number(buscar("minute")),
  };
}

function calcular() {
  const { dia, minutos } = ahoraEnMadrid();

  for (const tramo of SERVICIOS[dia] ?? []) {
    if (minutos >= tramo.abre && minutos < tramo.cierra) {
      return { abierto: true, texto: `Abierto ahora · cerramos a las ${reloj(tramo.cierra)}` };
    }
  }

  // Siguiente apertura: hoy más tarde, o el próximo día con servicio.
  const restaHoy = (SERVICIOS[dia] ?? []).find((t) => minutos < t.abre);
  if (restaHoy) {
    return { abierto: false, texto: `Cerrado · abrimos hoy a las ${reloj(restaHoy.abre)}` };
  }

  for (let salto = 1; salto <= 7; salto += 1) {
    const siguiente = (dia + salto) % 7;
    const tramos = SERVICIOS[siguiente];
    if (tramos?.length) {
      return {
        abierto: false,
        texto: `Cerrado · abrimos el ${DIAS[siguiente]} a las ${reloj(tramos[0].abre)}`,
      };
    }
  }

  return { abierto: false, texto: "Cerrado" };
}

/**
 * Si estamos abiertos ahora mismo es el dato más útil de una web de
 * restaurante. Se calcula en el cliente: la página es estática y una
 * respuesta cacheada mentiría a las pocas horas.
 */
export default function EstadoApertura({ className = "" }: { className?: string }) {
  const [estado, setEstado] = useState<ReturnType<typeof calcular> | null>(null);

  useEffect(() => {
    setEstado(calcular());
    const id = window.setInterval(() => setEstado(calcular()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Hasta que monta no se pinta nada: evita un desajuste de hidratación
  // y evita afirmar un horario con la hora del servidor.
  if (!estado) return null;

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${estado.abierto ? "bg-coral-claro" : "bg-arena/50"}`}
      />
      {estado.texto}
    </span>
  );
}
