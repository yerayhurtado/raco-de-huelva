"use client";

import { Users } from "lucide-react";

export default function MenusGrupo() {
  return (
    <section
      id="menus-grupo"
      className="py-20 sm:py-28 bg-gradient-to-br from-[#F9F6F1] to-[#F5EFE7] px-4 sm:px-6 lg:px-8"
      aria-label="Menús de Grupo - El Racó de Huelva"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
            <span className="text-mini font-semibold tracking-widest text-[#D4AF8A] uppercase flex items-center gap-2">
              <Users size={16} />
              Experiencias Grupales
            </span>
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F3F5C] mb-4">
            Menús de Grupo
          </h2>
          <p className="text-guia text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed">
            Perfecto para celebraciones y reuniones. Mínimo 12 comensales.
          </p>
        </div>

        {/* Grid de Menús */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Menú para Compartir */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#D4AF8A]/20 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#0F3F5C] to-[#0D2E3D] p-6 sm:p-8">
              <h3 className="text-pieza sm:text-3xl font-bold text-[#D4AF8A] mb-2">
                Menú para Compartir
              </h3>
              <p className="text-[#F9F6F1]/80 text-nota">
                Ideal para disfrutar en grupo
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Para Compartir */}
              <div>
                <h4 className="text-precio font-bold text-[#E8704A] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E8704A]"></div>
                  Para Compartir
                </h4>
                <ul className="space-y-2 text-nota text-[#3A3A3A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Papas de San Lúcar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Revuelto de langostinos con trufa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Croquetas de secreto con miel de caña</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Croquetas de cochinillo con manzana y gel de naranja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Tortitas de camarones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Panceta ibérica confitada a baja temperatura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Pan de coca con tomate</span>
                  </li>
                </ul>
              </div>

              {/* Postre */}
              <div className="border-t border-[#D4AF8A]/30 pt-4">
                <h4 className="text-precio font-bold text-[#E8704A] mb-3">Postre</h4>
                <p className="text-nota text-[#3A3A3A]">Pastel de queso</p>
              </div>

              {/* Bebida */}
              <div className="border-t border-[#D4AF8A]/30 pt-4">
                <h4 className="text-precio font-bold text-[#E8704A] mb-3">Bebida</h4>
                <p className="text-nota text-[#3A3A3A]">
                  Sangría de vino (cada 4 personas) o agua
                </p>
              </div>

              {/* Precio */}
              <div className="bg-gradient-to-r from-[#E8704A]/10 to-[#D4AF8A]/10 rounded-lg p-6 text-center border-2 border-[#E8704A]/30">
                <div className="text-4xl sm:text-5xl font-bold text-[#E8704A] mb-2">
                  36,95€
                </div>
                <p className="text-mini text-[#3A3A3A] font-medium">
                  Por persona
                </p>
              </div>
            </div>
          </article>

          {/* Menú de Grupo */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#D4AF8A]/20 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#E8704A] to-[#D4764A] p-6 sm:p-8">
              <h3 className="text-pieza sm:text-3xl font-bold text-white mb-2">
                Menú de Grupo
              </h3>
              <p className="text-white/90 text-nota">
                Experiencia completa con opciones
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Para Compartir */}
              <div>
                <h4 className="text-precio font-bold text-[#E8704A] mb-3">
                  Para Compartir (cada 4 personas)
                </h4>
                <ul className="space-y-2 text-nota text-[#3A3A3A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Papas San Lúcar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Revoltillo de langostinos con trufa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Croquetas de secreto con miel de caña</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Pan de coca con tomate</span>
                  </li>
                </ul>
              </div>

              {/* Segundos */}
              <div className="border-t border-[#D4AF8A]/30 pt-4">
                <h4 className="text-precio font-bold text-[#E8704A] mb-3">
                  Segundos a Elegir por Comensal
                </h4>
                <ul className="space-y-2 text-nota text-[#3A3A3A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Brownie de buey con salsa oporto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Canalón XXL de pollo de corral con trufa y salsa de foie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Panceta ibérica confitada a baja temperatura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF8A] mt-1">•</span>
                    <span>Lomo de bacalao confitado con salsa pil-pil</span>
                  </li>
                </ul>
              </div>

              {/* Postre */}
              <div className="border-t border-[#D4AF8A]/30 pt-4">
                <h4 className="text-precio font-bold text-[#E8704A] mb-3">Postre</h4>
                <p className="text-nota text-[#3A3A3A]">Pastel de queso</p>
              </div>

              {/* Bebida */}
              <div className="border-t border-[#D4AF8A]/30 pt-4">
                <h4 className="text-precio font-bold text-[#E8704A] mb-3">Bebida</h4>
                <p className="text-nota text-[#3A3A3A]">
                  Sangría de vino (cada 4 personas) o agua
                </p>
              </div>

              {/* Precio */}
              <div className="bg-gradient-to-r from-[#E8704A]/10 to-[#D4AF8A]/10 rounded-lg p-6 text-center border-2 border-[#E8704A]/30">
                <div className="text-4xl sm:text-5xl font-bold text-[#E8704A] mb-2">
                  40,95€
                </div>
                <p className="text-mini text-[#3A3A3A] font-medium">
                  Por persona
                </p>
              </div>
            </div>
          </article>

        </div>

        {/* Nota importante */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-[#E8704A] shadow-lg mb-12">
          <div className="flex items-start gap-3">
            <Users className="text-[#E8704A] flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-[#0F3F5C] mb-2 text-precio">
                Información Importante
              </h4>
              <p className="text-nota text-[#3A3A3A] leading-relaxed">
                <span className="font-semibold">Mínimo 12 comensales.</span> Estos menús están diseñados 
                para grupos y celebraciones. Para reservas y consultas, contáctanos con antelación 
                para garantizar la mejor experiencia.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            role="button"
            aria-label="Reserva menú de grupo en El Racó de Huelva"
            className="inline-block w-full sm:w-auto bg-[#E8704A] hover:bg-[#D4764A] text-white px-10 sm:px-12 py-4 sm:py-5 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-guia"
          >
            Reservar Menú de Grupo
          </a>
        </div>
      </div>
    </section>
  );
}