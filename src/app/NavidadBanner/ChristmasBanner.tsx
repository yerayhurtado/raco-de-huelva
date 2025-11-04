'use client';
import { Sparkles, ChefHat, Calendar, Phone, Download } from 'lucide-react';

export default function ChristmasAnnouncement() {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#0F3F5C] via-[#1a5a7a] to-[#0F3F5C] overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">❄️</div>
        <div className="absolute top-20 right-20 text-5xl">🎄</div>
        <div className="absolute bottom-10 left-20 text-5xl">✨</div>
        <div className="absolute bottom-20 right-10 text-6xl">🎁</div>
      </div>

      {/* Estrellas brillantes animadas */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-8 left-[15%] w-5 h-5 text-[#D4AF8A] animate-pulse" />
        <Sparkles className="absolute top-12 right-[20%] w-4 h-4 text-[#D4AF8A] animate-pulse delay-200" />
        <Sparkles className="absolute bottom-8 left-[25%] w-4 h-4 text-[#D4AF8A] animate-pulse delay-400" />
        <Sparkles className="absolute bottom-12 right-[15%] w-5 h-5 text-[#D4AF8A] animate-pulse delay-600" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge decorativo */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#D4AF8A]/20 backdrop-blur-sm border border-[#D4AF8A] px-4 py-2 rounded-full">
            <span className="text-2xl animate-bounce">🎄</span>
            <span className="text-xs sm:text-sm font-semibold text-[#D4AF8A] uppercase tracking-wider">
              Menú Especial Fiestas 2024-2025
            </span>
            <span className="text-2xl animate-bounce delay-300">🎄</span>
          </div>
        </div>

        {/* Título principal */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Menú Exclusivo de Fiestas
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#F9F6F1] max-w-3xl mx-auto leading-relaxed">
            Celebra Navidad, San Esteban y Año Nuevo con una experiencia gastronómica única: 
            los mejores mariscos de Huelva en platos especialmente creados para estas fechas especiales
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF8A] rounded-full mb-4">
              <ChefHat className="w-7 h-7 text-[#0F3F5C]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Menú Gourmet
            </h3>
            <p className="text-sm text-[#F9F6F1]/90">
              Creaciones exclusivas del chef con mariscos premium
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF8A] rounded-full mb-4">
              <Calendar className="w-7 h-7 text-[#0F3F5C]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Fechas Especiales
            </h3>
            <p className="text-sm text-[#F9F6F1]/90">
              Navidad (25 Dic) • San Esteban (26 Dic) • Año Nuevo (1 Ene)
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF8A] rounded-full mb-4">
              <Phone className="w-7 h-7 text-[#0F3F5C]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Reserva Ya
            </h3>
            <p className="text-sm text-[#F9F6F1]/90">
              Plazas limitadas, no te quedes sin tu mesa
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/menu-navidad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#E8704A] hover:bg-[#D4764A] text-white px-10 py-4 font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-base flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Ver Menú (PDF)</span>
          </a>
          
          <a
            href="tel:658890607"
            className="w-full sm:w-auto border-2 border-[#D4AF8A] text-[#D4AF8A] hover:bg-[#D4AF8A]/10 px-10 py-4 font-bold rounded-lg transition-all duration-300 text-base flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Llamar para Reservar</span>
          </a>
        </div>

        {/* Nota final */}
        <p className="text-center text-xs sm:text-sm text-[#F9F6F1]/70 mt-8">
          * Menú disponible para Navidad (25 Dic), San Esteban (26 Dic) y Año Nuevo (1 Ene) • Reserva previa obligatoria
        </p>
      </div>

      {/* Borde decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF8A] to-transparent"></div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}