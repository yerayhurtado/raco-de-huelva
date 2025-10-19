"use client";

import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Schema.org JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "El Racó de Huelva",
            description: "Restaurante de mariscos frescos importados de Huelva en Mollet del Vallès, Barcelona. Reservas por teléfono.",
            image: "https://ejemplo.com/hero-image.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Carrer de Roger de Llúria, 7",
              addressLocality: "Mollet del Vallès",
              addressRegion: "Barcelona",
              postalCode: "08100",
              addressCountry: "ES",
            },
            telephone: "+34658890607",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Reservations",
              telephone: "+34658890607",
              availableLanguage: ["es", "ca"],
            },
            priceRange: "$$$",
            servesCuisine: ["Seafood", "Spanish"],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday"],
                openingHours: "CLOSED",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
                opens: "13:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
                opens: "20:30",
                closes: "23:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Friday", "Saturday"],
                opens: "13:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Friday", "Saturday"],
                opens: "20:30",
                closes: "23:00",
              },
            ],
          }),
        }}
      />

      <section
        id="contacto"
        className="py-20 sm:py-28 bg-[#F9F6F1] px-4 sm:px-6 lg:px-8"
        aria-label="Contacto y Reservas - El Racó de Huelva"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4AF8A]"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF8A] uppercase">
                Reserva tu Experiencia
              </span>
              <div className="h-px w-8 bg-[#D4AF8A]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F3F5C] mb-4">
              Contacto
            </h2>
            <p className="text-base sm:text-lg text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed">
              Reserva tu mesa llamando directamente. Nuestro equipo te atenderá con la mejor disposición.
            </p>
          </div>

          {/* Grid Principal: Info + Mapa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
            
            {/* Columna Izquierda: Información de Contacto */}
            <div className="space-y-6">
              
              {/* Teléfono - Destacado */}
              <article className="bg-gradient-to-br from-[#E8704A] to-[#D4764A] rounded-xl p-8 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Llama para Reservar
                    </h3>
                    <a
                      href="tel:+34658890607"
                      className="text-2xl sm:text-3xl font-bold text-white hover:text-white/90 transition-colors duration-200 block"
                    >
                      +34 658 89 06 07
                    </a>
                    <p className="text-sm text-white/90 mt-3">
                      Disponible de martes a domingo en horario de servicio
                    </p>
                  </div>
                </div>
              </article>

              {/* Ubicación */}
              <article className="bg-white rounded-xl p-8 shadow-lg border border-[#D4AF8A]/30">
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF8A]/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-[#D4AF8A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F3F5C] mb-3">
                      Ubicación
                    </h3>
                    <address className="text-sm text-[#3A3A3A] not-italic leading-relaxed">
                      Carrer Roger de Llúria, 7<br />
                      08100 Mollet del Vallès<br />
                      Barcelona, España
                    </address>
                  </div>
                </div>
              </article>

              {/* Horario */}
              <article className="bg-white rounded-xl p-8 shadow-lg border border-[#D4AF8A]/30">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2A9D8F]/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="text-[#2A9D8F]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F3F5C] mb-3">
                      Horario
                    </h3>
                    <dl className="text-sm text-[#3A3A3A] space-y-2">
                      <div>
                        <dt className="font-semibold text-[#0F3F5C]">Martes - Domingo:</dt>
                        <dd>13:00 - 16:00</dd>
                        <dd>20:30 - 23:00</dd>
                      </div>
                      <div className="pt-2 border-t border-[#D4AF8A]/20">
                        <dt className="font-semibold text-[#E8704A]">Lunes:</dt>
                        <dd>Cerrado</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </article>

            </div>

            {/* Columna Derecha: Mapa */}
            <div className="h-full min-h-[500px] lg:min-h-[600px]">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#D4AF8A]/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.5127891234567!2d2.2130000000000003!3d41.53900000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcd9e0000001%3A0x1234567890abcdef!2sCarrer%20de%20Roger%20de%20Ll%C3%BAria%2C%207%2C%2008100%20Mollet%20del%20Vall%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de El Racó de Huelva en Google Maps"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

          {/* CTA Principal */}
          <div className="text-center mb-16">
            <a
              href="tel:+34658890607"
              className="inline-flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-5 bg-[#E8704A] hover:bg-[#D4764A] text-white font-bold text-lg sm:text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone size={24} />
              Llamar Ahora
            </a>
          </div>

          {/* Información adicional - Cómo Reservar */}
          <div className="bg-white border-2 border-[#D4AF8A]/30 rounded-xl p-8 sm:p-10 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F3F5C] mb-6 text-center sm:text-left">
              ¿Cómo reservar?
            </h3>
            <ol className="space-y-4 text-sm sm:text-base text-[#3A3A3A]">
              <li className="flex gap-4 items-start">
                <span className="font-bold text-[#E8704A] flex-shrink-0 text-xl">1.</span>
                <span>Llama al <strong className="text-[#0F3F5C]">+34 658 89 06 07</strong></span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-bold text-[#E8704A] flex-shrink-0 text-xl">2.</span>
                <span>Indica la fecha, hora y número de comensales</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-bold text-[#E8704A] flex-shrink-0 text-xl">3.</span>
                <span>Confirma tus datos de contacto</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-bold text-[#E8704A] flex-shrink-0 text-xl">4.</span>
                <span>¡Listo! Tu mesa está reservada</span>
              </li>
            </ol>
            <p className="text-xs sm:text-sm text-[#3A3A3A]/70 mt-6 pt-6 border-t border-[#D4AF8A]/20">
              <strong className="text-[#0F3F5C]">Recomendación:</strong> Para fechas especiales o grupos grandes (más de 8 personas), recomendamos llamar con antelación para garantizar disponibilidad.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}