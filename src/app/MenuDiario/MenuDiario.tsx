"use client";

import { motion } from "framer-motion";

export default function MenuDiario() {
  const primerosPlatos = [
    { nombre: "Crema de calabaza con jamón y aire de remolacha" },
    { nombre: "Potaje de garbanzos con langostinos" },
    { nombre: "Bacalao dorado (bacalao, cebolla y huevos)" },
    { nombre: "Canalón de bacalao y langostinos con salsa de pimiento del piquillo" },
    { nombre: "Patatas de Olot de la chef" },
    { nombre: "Ensalada de Otoño (granada, membrillo y queso de cabra)" },
    { nombre: "Milhojas de queso con eneldo y salmón marinado" },
    { nombre: "Ensalada mezclum con naranja y salmón marinado" },
    { nombre: "Crujiente de pimenta con atún" },
  ];

  const segundosPlatos = [
    { nombre: "Panceta ibérica confitada a B/T con manzana y cebolla encurtida" },
    { nombre: "Careta confitada a B/T a la gallega con emulsión de patata" },
    { nombre: "Secreto ibérico D.O. Huelva con crema de boniato" },
    { nombre: "Pluma ibérica D.O. Huelva con salsa oporto" },
    { nombre: "Bacalao confitado sobre cama de espinacas y pasas" },
    { nombre: "Pulpo D.O. Huelva braseado con crema de calabaza casera" },
    { nombre: "Lubina al horno con ajos confitados" },
    { nombre: "Pez espada con salsa verde y almejas" },
    { nombre: "Bonito D.O. Santoña a la plancha con cebolla caramelizada" },
    { nombre: "Arroz caldoso de bogavante (todos los jueves)" },
  ];

  const precioMenu = "17.95€"; // precio único del menú

  return (
    <section
      id="menu"
      className="py-20 sm:py-28 bg-[#0D2E3D] px-4 sm:px-6 lg:px-8"
      aria-label="Menú del Día - El Racó de Huelva"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF8A] uppercase">
              Especial de Martes a Viernes
            </span>
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D4AF8A] mb-4">
            Menú del Día
          </h2>
          <p className="text-base sm:text-lg text-[#F9F6F1] max-w-2xl mx-auto leading-relaxed">
            Selección de nuestros mejores platos a precio especial.
            Disponible de martes a viernes en horario de comida.
          </p>
        </div>

        {/* Primeros Platos */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF8A] mb-6">Primeros Platos</h3>
          <ul className="space-y-2 text-[#F9F6F1]">
            {primerosPlatos.map((item, index) => (
              <li key={index}>{item.nombre}</li>
            ))}
          </ul>
        </div>

        {/* Segundos Platos */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF8A] mb-6">Segundos Platos</h3>
          <ul className="space-y-2 text-[#F9F6F1]  ">
            {segundosPlatos.map((item, index) => (
              <li key={index}>{item.nombre}</li>
            ))}
          </ul>
        </div>

        {/* Precio destacado con animación */}
        <div className="text-center mb-12">
          <motion.span
            className="text-4xl sm:text-5xl font-bold text-[#E8704A]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            {precioMenu}
          </motion.span>
        </div>

        {/* Nota */}
        <div className="p-6 sm:p-8 bg-[#F9F6F1]/20 border-l-4 border-[#D4AF8A] rounded mb-12">
          <p className="text-sm sm:text-base text-[#F9F6F1]">
            <span className="font-semibold text-[#D4AF8A]">Incluido:</span> Pan, postre y bebida (agua mineral o copa de vino de Rioja T/B). Tupper para llevar 1€.
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
            Reservar Menú
          </a>
        </div>
      </div>
    </section>
  );
}
