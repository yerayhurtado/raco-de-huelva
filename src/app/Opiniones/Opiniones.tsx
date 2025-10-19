"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const resenas = [
  {
    nombre: "Yeray Hurtado",
    iniciales: "YH",
    color: "#E8704A",
    calificacion: 5,
    texto: "Todo delicioso. La ensaladilla con langostino de Sanlúcar y huevo frito fue un comienzo perfecto. El solomillo con salsa de oporto, tierno y sabroso. Y la tarta de queso de pantera rosa, original y riquísima. Atención excelente. ¡Volveremos!",
    fecha: "Hace 4 meses",
    precio: "10-20 €"
  },
  {
    nombre: "ELM",
    iniciales: "ELM",
    color: "#2A9D8F",
    calificacion: 5,
    texto: "No puedes pasar por Mollet y perderte este lugar. Comida espectacular y la mejor relación precio/calidad que recuerdo. El menú de 17 euros es una maravilla. Platos cuidados y sabores reales. Recomendable el arroz con Bogavante. El trato de Pedro, el dueño muy cercano y la comida de Angie para recordarla durante mucho tiempo.",
    fecha: "Hace 2 meses",
    badge: "Local Guide · 305 reseñas"
  },
  {
    nombre: "Marta Molero Codina",
    iniciales: "MM",
    color: "#D4AF8A",
    calificacion: 5,
    texto: "Comida muy elaborada, casera y con mucho mimo. El dueño es espectacular desde el inicio hasta el final, se preocupa por todo. Pone especial atención a cualquier detalle, nos aconsejó muy bien! 100% recomendable",
    fecha: "Hace 2 meses",
    precio: "20-30 €",
    badge: "Local Guide · 100 reseñas"
  },
  {
    nombre: "Sara Martínez Palmieri",
    iniciales: "SM",
    color: "#0F3F5C",
    calificacion: 5,
    texto: "Muy buena experiencia en este restaurante. Decoración y ambiente agradable, servicio muy amable y eficiente, y buena calidad en sus platos. Todo delicioso. Las croquetas de secreto ibérico con salsa de miel, un poema. Las tartas de queso deliciosas (la tradicional y la de chocolate con sal y aceite de oliva). En resumen, lo recomiendo!",
    fecha: "Hace 1 mes",
    precio: "50-60 €",
    badge: "Local Guide · 416 reseñas"
  },
  {
    nombre: "Josep Franco Martínez",
    iniciales: "JF",
    color: "#C86A44",
    calificacion: 5,
    texto: "Acabamos de comer hoy en El Racó de Huelva y ha sido una experiencia fantástica. Comida auténtica, sabrosa y con productos de primera. El trato, muy cercano y amable. Un sitio que nunca falla. Recomendadísimo si estás por la zona o quieres darte un buen homenaje. Destacar que tienen comida sin gluten!!!",
    fecha: "Hace 3 meses",
    precio: "40-50 €"
  }
];

// Calificación promedio de Google
const googleRating = 4.6;

export default function Opiniones() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resenas.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resenas.length) % resenas.length);
  };

  // Función para renderizar estrellas según calificación
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= rating) {
        stars.push(<Star key={i} size={16} fill="#FBBC05" stroke="#FBBC05" />);
      } else if (i < rating) {
        // Estrella media
        stars.push(
          <Star
            key={i}
            size={16}
            fill="url(#half)"
            stroke="#FBBC05"
          />
        );
      } else {
        stars.push(<Star key={i} size={16} fill="none" stroke="#FBBC05" />);
      }
    }
    return stars;
  };

  return (
    <section
      id="opiniones"
      className="py-20 sm:py-28 bg-[#0D2E3D] px-4 sm:px-6 lg:px-8"
      aria-label="Opiniones y Reseñas - El Racó de Huelva"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF8A] uppercase">
              Experiencias Auténticas
            </span>
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D4AF8A] mb-4">
            Lo Que Dicen
          </h2>
          <p className="text-base sm:text-lg text-[#F9F6F1] max-w-2xl mx-auto leading-relaxed">
            La opinión de nuestros comensales es nuestro mayor orgullo
          </p>
        </div>

        {/* Video Review */}
        <div className="mb-20 sm:mb-28">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF8A]/30 bg-black">
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/XpiztuF9s4c"
                  title="Review El Racó de Huelva"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-center mt-6 text-sm text-[#F9F6F1]/70">
              Review completo de nuestra propuesta gastronómica
            </p>
          </div>
        </div>

        {/* Google Reviews */}
        <div className="max-w-6xl mx-auto">

          {/* Header de Google Reviews */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-[#F9F6F1]/10 backdrop-blur-sm px-8 py-4 rounded-lg shadow-md border border-[#D4AF8A]/30">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F9F6F1]">Google</span>
                  <div className="flex">
                    {renderStars(googleRating)}
                  </div>
                </div>
                <p className="text-xs text-[#F9F6F1]/60">{googleRating} • Basado en reseñas verificadas</p>
              </div>
            </div>
          </div>

          {/* Carrusel de Reseñas */}
          <div className="relative">

            {/* Navegación */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-lg bg-[#F9F6F1]/10 hover:bg-[#E8704A] border-2 border-[#D4AF8A] hover:border-[#E8704A] flex items-center justify-center transition-all duration-300 group shadow-md"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="text-[#F9F6F1] group-hover:text-white transition-colors" size={24} />
              </button>
              
              <div className="flex gap-2">
                {resenas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-[#E8704A]' 
                        : 'w-2 bg-[#D4AF8A]/30 hover:bg-[#D4AF8A]/50'
                    }`}
                    aria-label={`Ir a reseña ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-lg bg-[#F9F6F1]/10 hover:bg-[#E8704A] border-2 border-[#D4AF8A] hover:border-[#E8704A] flex items-center justify-center transition-all duration-300 group shadow-md"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="text-[#F9F6F1] group-hover:text-white transition-colors" size={24} />
              </button>
            </div>

            {/* Tarjeta de Reseña */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {resenas.map((resena, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <article className="bg-[#F9F6F1]/10 backdrop-blur-sm rounded-lg p-8 sm:p-10 shadow-lg border border-[#D4AF8A]/30 hover:shadow-xl transition-shadow duration-300 relative">
                      
                      {/* Quote Icon */}
                      <div className="absolute top-8 right-8 opacity-5">
                        <Quote size={80} className="text-[#D4AF8A]" />
                      </div>

                      <div className="relative">
                        {/* Header: Avatar + Info */}
                        <div className="flex items-start gap-4 mb-6">
                          <div 
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-md"
                            style={{ backgroundColor: resena.color }}
                          >
                            {resena.iniciales}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-[#D4AF8A] mb-1">
                              {resena.nombre}
                            </h3>
                            {resena.badge && (
                              <p className="text-xs text-[#F9F6F1]/60 mb-1">
                                {resena.badge}
                              </p>
                            )}
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(resena.calificacion)].map((_, i) => (
                                  <Star key={i} size={16} fill="#FBBC05" stroke="#FBBC05" />
                                ))}
                              </div>
                              <span className="text-xs text-[#F9F6F1]/50">•</span>
                              <span className="text-xs text-[#F9F6F1]/60">{resena.fecha}</span>
                            </div>
                          </div>
                        </div>

                        {/* Texto de la Reseña */}
                        <p className="text-base sm:text-lg text-[#F9F6F1] leading-relaxed mb-4">
                            &quot;{resena.texto}&quot;
                        </p>

                        {/* Precio */}
                        {resena.precio && (
                          <div className="inline-block px-4 py-2 bg-[#0D2E3D] rounded-lg border border-[#D4AF8A]/20">
                            <span className="text-sm text-[#F9F6F1] font-semibold">
                              💰 {resena.precio}
                            </span>
                          </div>
                        )}
                      </div>

                    </article>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA Final */}
          <div className="text-center mt-16">
            <p className="text-sm text-[#F9F6F1]/70 mb-6">
              ¿Quieres ser parte de nuestra historia?
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#E8704A] hover:bg-[#D4764A] text-white font-bold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Reserva tu Mesa
            </a>
          </div>

        </div>

      </div>

      {/* Definición de gradiente para media estrella */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
            <stop offset="50%" stopColor="#FBBC05"/>
            <stop offset="50%" stopColor="transparent"/>
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
