"use client";

import { useEffect, useState } from "react";
import { MapPin, Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection] = useState("hero"); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Galería", href: "#galeria" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Carta", href: "#carta" },
    { label: "Menú del Día", href: "#menu" },
    { label: "Menús de Grupo", href: "#menus-grupo" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* Microdatos JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "El Racó de Huelva",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Carrer Roger de Llúria, 7",
              "addressLocality": "Mollet del Vallès",
              "addressCountry": "ES"
            },
            "telephone": "+34 658 890 607",
            "servesCuisine": "Mediterránea"
          })
        }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F3F5C]/95 shadow-lg backdrop-blur-md"
            : "bg-[#0F3F5C]/80 shadow-md backdrop-blur-sm"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-8">
            {/* Logo + Info (Izquierda) */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                {/* Logo del restaurante con fondo blanco circular */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 relative flex-shrink-0 bg-white rounded-full p-2 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Logo El Racó de Huelva"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                {/* Nombre y ubicación */}
                <div className="flex flex-col">
                  <h2 className="text-xl lg:text-2xl font-bold text-[#D4AF8A]">
                    El Racó de Huelva
                  </h2>
                  <div className="flex items-center gap-1 text-xs lg:text-sm text-[#F9F6F1]">
                    <MapPin size={14} aria-hidden="true" focusable="false" />
                    <span>Carrer Roger de Llúria, 7, Mollet</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navegación (Centro) */}
            <nav
              className="flex-1 flex justify-center"
              aria-label="Navegación principal"
            >
              <ul className="flex gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      title={`Ir a la sección ${item.label}`}
                      aria-current={
                        currentSection === item.href.slice(1)
                          ? "page"
                          : undefined
                      }
                      className="text-[#F9F6F1] font-medium relative pb-2 transition-colors duration-200 hover:text-[#D4AF8A] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8704A] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Botón Reserva (Derecha) */}
            <a
              href="#contacto"
              aria-label="Reserva tu mesa en El Racó de Huelva"
              className="flex items-center gap-2 bg-[#E8704A] hover:bg-[#D4764A] text-white px-6 py-2 font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg flex-shrink-0"
            >
              <Calendar size={18} aria-hidden="true" focusable="false" />
              <span>Reservar</span>
            </a>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between">
            {/* Logo Mobile */}
            <div className="flex-1">
              <Link href="/" className="flex items-center gap-2">
                {/* Logo del restaurante mobile con fondo blanco circular */}
                <div className="w-14 h-14 relative flex-shrink-0 bg-white rounded-full p-1.5 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Logo El Racó de Huelva"
                    fill
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                {/* Nombre y ubicación mobile */}
                <div className="flex flex-col">
                  <h2 className="text-base sm:text-lg font-bold text-[#D4AF8A]">
                    El Racó de Huelva
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-[#F9F6F1]">
                    <MapPin size={12} aria-hidden="true" focusable="false" />
                    <span>Mollet del Vallès</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Botones Mobile */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#F9F6F1] p-2"
                aria-label="Alternar menú móvil"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav
              className="md:hidden mt-4 pb-4 space-y-3 border-t border-[#D4AF8A]/20 pt-4"
              aria-label="Navegación móvil"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  title={`Ir a la sección ${item.label}`}
                  className="block text-sm text-[#F9F6F1] hover:text-[#D4AF8A] transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="block w-full bg-[#E8704A] hover:bg-[#D4764A] text-white py-2 rounded-lg text-center font-semibold transition-all mt-4"
                onClick={() => setMobileMenuOpen(false)}
                role="button"
              >
                Reserva tu Mesa
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}