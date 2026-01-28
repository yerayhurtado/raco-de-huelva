"use client";

import { useState } from "react";

export default function MenuDiario() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const primerosPlatos = [
    "Sopa de pescado Marisco",
    "Lentejas caviar con chips de boniato",
    "Bacalao dorado (bacalao, cebolla y huevos)",
    "Mejillones en salsa picante",
    "Barquita del Raco Ensalada mezclum y queso de cabra",
    "Trinxat de la Cerdenya & Mussakka de carne",
    "Rollitos  de berenjenas con humus",
    "Esqueixada de bacalao con tierra de olivada",
    "Fritura de verduras con miel de caña",
  ];

  const segundosPlatos = [
    "Galta al vino confitada a B/T aromatizada con cacao",
    "Careta confitada a B/T a la gallega con emulsión de patata",
    "Secreto o laagarto a la Brasa",
    "Tortilla abierta de chistorra y manzana",
    "Albondigas con tomate caseras de la chef",
    "Huevos estrellados con butifarra de perol",
    "Lubina al horno con ajos confitados",
    "Bacalao a la miel",
    "El bronceado, Salmón con tierra de pistacho",
    "Arroz caldoso de bogavante (todos los jueves)",
  ];

  const precioMenu = "17.95€";

  return (
    <section
      id="menu"
      className="py-20 sm:py-28 bg-gradient-to-br from-[#0D2E3D] via-[#0F3F5C] to-[#0D2E3D] px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Menú del Día - El Racó de Huelva"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF8A]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8704A]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF8A]"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#D4AF8A] uppercase">
              Especial de Martes a Viernes
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF8A]"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF8A] to-[#E8C9A0] mb-6">
            Menú del Día
          </h2>
          
          <p className="text-base sm:text-lg text-[#F9F6F1]/90 max-w-2xl mx-auto leading-relaxed">
            Selección de nuestros mejores platos elaborados con ingredientes de primera calidad.
            <br />
            <span className="text-[#D4AF8A] font-medium">Disponible de martes a viernes en horario de comida.</span>
          </p>
        </div>

        {/* Grid de dos columnas para pantallas grandes */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Primeros Platos */}
          <div className="bg-[#F9F6F1]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF8A]/20 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E8704A]"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF8A]">Primeros Platos</h3>
            </div>
            
            <ul className="space-y-4">
              {primerosPlatos.map((item, index) => (
                <li
                  key={index}
                  className="p-3 rounded-lg transition-all duration-300 hover:bg-[#F9F6F1]/5"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className={`text-sm sm:text-base text-[#F9F6F1] leading-relaxed transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-[#D4AF8A]' : ''
                  }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Segundos Platos */}
          <div className="bg-[#F9F6F1]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF8A]/20 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E8704A]"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF8A]">Segundos Platos</h3>
            </div>
            
            <ul className="space-y-4">
              {segundosPlatos.map((item, index) => (
                <li
                  key={index}
                  className="p-3 rounded-lg transition-all duration-300 hover:bg-[#F9F6F1]/5"
                  onMouseEnter={() => setHoveredIndex(index + 100)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className={`text-sm sm:text-base text-[#F9F6F1] leading-relaxed transition-colors duration-300 ${
                    hoveredIndex === index + 100 ? 'text-[#D4AF8A]' : ''
                  }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Precio y detalles */}
        <div className="bg-gradient-to-br from-[#F9F6F1]/10 to-[#D4AF8A]/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-[#D4AF8A]/30 shadow-2xl mb-12">
          <div className="text-center mb-8">
            <div className="inline-block">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8704A] to-[#D4AF8A] mb-2">
                {precioMenu}
              </div>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF8A] to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">

              <p className="text-[#F9F6F1] text-sm sm:text-base">
                <span className="block font-semibold text-[#D4AF8A]">Incluye</span>
                Pan artesanal
              </p>
            </div>
            
            <div className="space-y-2">
              
              <p className="text-[#F9F6F1] text-sm sm:text-base">
                <span className="block font-semibold text-[#D4AF8A]">Postre</span>
                Selección del día
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-[#F9F6F1] text-sm sm:text-base">
                <span className="block font-semibold text-[#D4AF8A]">Bebida</span>
                Agua o vino Rioja
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#D4AF8A]/30 text-center">
            <p className="text-sm text-[#F9F6F1]/80">
              <span className="text-[#D4AF8A] font-semibold">Servicio Tupper:</span> Lleva tus platos favoritos por solo 1€ adicional
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            role="button"
            aria-label="Reserva tu mesa en El Racó de Huelva"
            className="inline-block bg-gradient-to-r from-[#E8704A] to-[#D4764A] hover:from-[#D4764A] hover:to-[#E8704A] text-white px-10 sm:px-12 py-4 sm:py-5 font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-[#E8704A]/50 hover:scale-105 text-base sm:text-lg"
          >
            Reservar Menú del Día
          </a>
        </div>
      </div>
    </section>
  );
}