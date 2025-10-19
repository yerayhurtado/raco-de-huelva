"use client";

import { useState } from "react";

type MenuCategory = "Entrantes" | "Arroces" | "Crustáceos" | "Pescados";

const menuItems: Record<MenuCategory, { nombre: string; descripcion: string; precio: string }[]> = {
  "Entrantes": [
    {
      nombre: "Tabla de Mariscos",
      descripcion: "Selección variada de mariscos frescos de Huelva",
      precio: "28€"
    },
    {
      nombre: "Ostras Frescas",
      descripcion: "Doce ostras de la mejor procedencia",
      precio: "24€"
    },
    {
      nombre: "Ceviche de Gambas",
      descripcion: "Gambas rojas marinadas en limón y cilantro",
      precio: "16€"
    },
    {
      nombre: "Pulpitos a la Gallega",
      descripcion: "Pulpitos cocidos con pimentón y aceite de oliva",
      precio: "18€"
    },
  ],
  "Arroces": [
    {
      nombre: "Arroz de Marisco",
      descripcion: "Con gambas, cigalas, mejillones y caldo de marisco",
      precio: "22€"
    },
    {
      nombre: "Arroz Negro",
      descripcion: "Con sepia, gambas y tinta de calamar",
      precio: "20€"
    },
    {
      nombre: "Paella de Bogavante",
      descripcion: "Con trozos de bogavante fresco de Huelva",
      precio: "32€"
    },
  ],
  "Crustáceos": [
    {
      nombre: "Bogavante a la Brasa",
      descripcion: "Cocido a la brasa con mantequilla clarificada",
      precio: "42€"
    },
    {
      nombre: "Gamba Roja de Huelva",
      descripcion: "Cocida al punto con sal marina",
      precio: "26€"
    },
    {
      nombre: "Cigalas a la Sal",
      descripcion: "Frescas cocidas con mayonesa casera",
      precio: "28€"
    },
    {
      nombre: "Nécora Fresca",
      descripcion: "Servida en su jugo con limón y aceite virgen",
      precio: "24€"
    },
  ],
  "Pescados": [
    {
      nombre: "Lubina a la Sal",
      descripcion: "Lubina fresca cocida en costra de sal",
      precio: "32€"
    },
    {
      nombre: "Rodaballo a la Mantequilla",
      descripcion: "Rodaballo de primera calidad con salsa de vino blanco",
      precio: "38€"
    },
    {
      nombre: "Lenguado Meunière",
      descripcion: "Lenguado fresco salteado con limón",
      precio: "34€"
    },
  ],
};

export default function Carta() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Entrantes");
  const categories = Object.keys(menuItems) as MenuCategory[];

  return (
    <section
      id="carta"
      className="py-20 sm:py-28 bg-[#F9F6F1] px-4 sm:px-6 lg:px-8"
      aria-label="Carta Completa - El Racó de Huelva"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF8A] uppercase">
              Propuesta Culinaria Completa
            </span>
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F3F5C] mb-4">
            Carta
          </h2>
          <p className="text-base sm:text-lg text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed">
            Disfruta de nuestra selección gourmet completa de mariscos frescos
            directamente importados desde Huelva
          </p>
        </div>

        {/* Categorías - Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#E8704A] text-white shadow-lg"
                  : "bg-white text-[#0F3F5C] border-2 border-[#D4AF8A] hover:border-[#E8704A] hover:text-[#E8704A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ítems del menú */}
        <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          {menuItems[activeCategory].map((item, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-6 sm:pb-8 border-b border-[#D4AF8A]/30 last:border-0"
            >
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F3F5C] mb-2">
                  {item.nombre}
                </h3>
                <p className="text-sm sm:text-base text-[#3A3A3A]">
                  {item.descripcion}
                </p>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#E8704A] whitespace-nowrap sm:text-right">
                {item.precio}
              </div>
            </article>
          ))}
        </div>

        {/* Nota importante */}
        <div className="p-6 sm:p-8 bg-[#0F3F5C]/5 border-l-4 border-[#D4AF8A] rounded mb-12">
          <p className="text-sm sm:text-base text-[#3A3A3A]">
            <span className="font-semibold text-[#0F3F5C]">Consulte disponibilidad:</span> Todos nuestros productos
            son frescos y de temporada. Las disponibilidades pueden variar según la captura diaria.
            Recomendamos llamar con antelación para confirmar su plato favorito.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            role="button"
            aria-label="Reserva tu mesa en El Racó de Huelva"
            className="w-full sm:w-auto bg-[#E8704A] hover:bg-[#D4764A] text-white px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
          >
            Reserva tu Mesa
          </a>
        </div>
      </div>
    </section>
  );
}