"use client";

import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Inicio", href: "#hero", id: "hero" },
  { label: "Galería", href: "#galeria", id: "galeria" },
  { label: "Menú del día", href: "#menu", id: "menu" },
  { label: "Carta", href: "#carta", id: "carta" },
  { label: "Opiniones", href: "#opiniones", id: "opiniones" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Marca en la navegacion la seccion que se esta leyendo. El original
  // guardaba este estado pero no lo actualizaba nunca.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrentSection(visible.target.id);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0.1, 0.5] },
    );

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Microdatos JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "El Racó de Huelva",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Carrer Roger de Llúria, 7",
              addressLocality: "Mollet del Vallès",
              addressCountry: "ES",
            },
            telephone: "+34 658 890 607",
            servesCuisine: "Mediterránea",
          }),
        }}
      />

      <header
        className={`fixed top-0 left-0 z-50 w-full border-b transition-[background-color,border-color] duration-300 ease-[var(--ease-suave)] backdrop-blur-md ${
          scrolled
            ? "border-arena/25 bg-marino-oscuro/90"
            : "border-arena/15 bg-marino-oscuro/45"
        }`}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          {/* Escritorio */}
          <div className="hidden items-center justify-between gap-10 py-4 md:flex">
            <Link href="/" className="flex flex-shrink-0 items-center gap-3.5">
              <span className="flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-full bg-crema p-1.5">
                {/* width/height explicitos en vez de fill: con fill, Next pedia el
                    logo a 3840px de ancho para una caja de 52px. Y sin priority:
                    el logo aparece dos veces (escritorio y movil) y dos precargas
                    del mismo recurso se pisaban; ademas el LCP es la foto del hero. */}
                <Image
                  src="/logo.png"
                  alt="Logo El Racó de Huelva"
                  width={52}
                  height={52}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-xl leading-none tracking-[0.055em] text-crema">
                  El Racó de Huelva
                </span>
                <span className="flex items-center gap-1.5 text-[10px] leading-none tracking-[0.24em] text-arena/85 uppercase">
                  <MapPin size={11} aria-hidden="true" focusable="false" />
                  Mollet del Vallès
                </span>
              </span>
            </Link>

            <nav className="flex flex-1 justify-center" aria-label="Navegación principal">
              <ul className="flex gap-7 lg:gap-9">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      title={`Ir a la sección ${item.label}`}
                      aria-current={currentSection === item.id ? "page" : undefined}
                      className={`nav-link text-[11px] tracking-[0.19em] uppercase transition-colors duration-200 hover:text-arena ${
                        currentSection === item.id ? "text-arena" : "text-crema"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="tel:+34658890607"
              aria-label="Llamar a El Racó de Huelva para reservar mesa"
              className="flex flex-shrink-0 items-center gap-2.5 bg-coral px-6 py-3 text-[11px] font-semibold tracking-[0.17em] whitespace-nowrap text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975]"
            >
              <Phone size={14} aria-hidden="true" focusable="false" />
              Reservar
            </a>
          </div>

          {/* Móvil */}
          <div className="flex items-center justify-between gap-3 py-3 md:hidden">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-crema p-1">
                <Image
                  src="/logo.png"
                  alt="Logo El Racó de Huelva"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="font-display text-base leading-none tracking-[0.04em] text-crema">
                  El Racó de Huelva
                </span>
                <span className="text-[9px] leading-none tracking-[0.2em] text-arena/85 uppercase">
                  Mollet del Vallès
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-arena/40 text-crema transition-transform duration-150 active:scale-95"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              aria-controls="menu-movil"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav
              id="menu-movil"
              className="reveal border-t border-arena/20 pb-4 md:hidden"
              data-visible="true"
              aria-label="Navegación móvil"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      title={`Ir a la sección ${item.label}`}
                      className="flex h-13 items-center border-b border-arena/15 text-[12px] tracking-[0.19em] text-crema uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+34658890607"
                className="mt-5 flex h-13 items-center justify-center gap-2.5 bg-coral text-[12px] font-semibold tracking-[0.19em] text-white uppercase transition-transform duration-150 active:scale-[0.975]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={15} aria-hidden="true" focusable="false" />
                Reservar mesa
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
