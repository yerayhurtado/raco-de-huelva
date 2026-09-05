"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const WHATSAPP =
  "https://wa.me/34658890607?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20mesa%20en%20El%20Rac%C3%B3%20de%20Huelva.";

/**
 * Barra de acción fija en móvil.
 *
 * En un móvil la página mide unas diecisiete pantallas y las dos cosas
 * que más se buscan en la web de un restaurante — llamar y escribir —
 * quedaban enterradas. Aparece cuando el hero sale de pantalla, para no
 * competir con sus propias llamadas a la acción.
 */
export default function BarraMovil() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entrada]) => setVisible(!entrada.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      // Siempre en el DOM: así la transición tiene de dónde salir y
      // aria-hidden mantiene el lector de pantalla en el contenido.
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-arena/25 bg-marino-oscuro/95 px-4 pt-3 backdrop-blur-md transition-transform duration-300 ease-[var(--ease-suave)] md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href="tel:+34658890607"
        tabIndex={visible ? undefined : -1}
        className="flex h-13 flex-1 items-center justify-center gap-2.5 bg-coral text-mini font-semibold tracking-[0.17em] text-white uppercase transition-transform duration-150 active:scale-[0.975]"
      >
        <Phone size={15} aria-hidden="true" />
        Llamar
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? undefined : -1}
        className="flex h-13 flex-1 items-center justify-center gap-2.5 border border-arena/45 text-mini font-semibold tracking-[0.17em] text-arena uppercase transition-transform duration-150 active:scale-[0.975]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24zm-2.6 4.1c-.15 0-.4.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.2.94 2.36c.11.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.43-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.05-.09-.2-.15-.42-.26-.22-.11-1.34-.66-1.54-.73-.21-.08-.36-.12-.5.11-.16.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.14-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.68-1.65-.18-.44-.36-.38-.5-.38l-.43-.01z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
