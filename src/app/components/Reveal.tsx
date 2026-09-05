"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "header" | "span" | "li";

type RevealProps = {
  children: ReactNode;
  /** Retardo en ms para escalonar hermanos. */
  delay?: number;
  className?: string;
  /** Clase de animacion; por defecto la entrada estandar. */
  variant?: "reveal" | "rule-draw";
  as?: Tag;
  style?: CSSProperties;
};

/**
 * Revela su contenido cuando entra en pantalla.
 *
 * El observador solo decide CUANDO: pone data-visible="true" y a partir de
 * ahi anima CSS, que corre fuera del hilo principal. Se desconecta en cuanto
 * dispara, porque la entrada ocurre una sola vez.
 *
 * Si no hay IntersectionObserver (o el usuario pide menos movimiento) el
 * contenido se muestra directamente: nunca se queda invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "reveal",
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    // Red de seguridad: si por lo que sea el observador no llega a disparar,
    // el contenido aparece igualmente. Nunca puede quedarse invisible.
    const fallback = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      // El ref es del mismo elemento en todos los casos; el union de tags
      // obliga a este cast, que es seguro.
      ref={ref as React.RefObject<never>}
      data-visible={visible ? "true" : "false"}
      className={`${variant} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
