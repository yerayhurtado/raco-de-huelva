import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* JSON-LD Schema para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "El Racó de Huelva",
            description:
              "Restaurante de mariscos frescos importados de Huelva en Mollet del Vallès, Barcelona",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Carrer de Roger de Llúria, 7",
              addressLocality: "Mollet del Vallès",
              addressRegion: "Barcelona",
              postalCode: "08100",
              addressCountry: "ES",
            },
            telephone: "658890607",
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
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-white pt-24 sm:pt-32"
        aria-label="Bienvenida a El Racó de Huelva - Mariscos frescos de Huelva en Mollet del Vallès, Barcelona"
      >
        {/* Imagen de fondo */}
        <Image
          src="/HeroBg.jpg"
          alt="Mariscos frescos premium de Huelva en El Racó de Huelva, restaurante en Mollet del Vallès"
          fill
          className="object-cover -z-10"
          priority
          quality={85}
          sizes="100vw"
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F3F5C]/75 via-[#0F3F5C]/65 to-[#0F3F5C]/55 -z-10" />

        {/* Contenido principal */}
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8 sm:space-y-10">

            {/* Título H1 - Responsive */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF8A] drop-shadow-lg leading-tight">
              Sabores del Mar de Huelva en tu Mesa
            </h1>

            {/* Subtítulo - Responsive */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F9F6F1] leading-relaxed max-w-3xl mx-auto">
              Disfruta de los mejores mariscos frescos importados directo de Huelva,
              preparados con auténtico sabor gourmet en Mollet del Vallès.
            </p>

            {/* Trust indicators - Elegante */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#F9F6F1]">Importación Directa de Huelva</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#D4AF8A]"></div>
              <div className="flex items-center gap-2">
                <span className="text-[#F9F6F1]">Cocina Artesanal</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#D4AF8A]"></div>
              <div className="flex items-center gap-2">
                <span className="text-[#F9F6F1]">Excelencia Gourmet</span>
              </div>
            </div>

            {/* CTAs - Mejorado */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-8">
              <a
                href="#contacto"
                role="button"
                aria-label="Reserva tu mesa en El Racó de Huelva"
                className="w-full sm:w-auto bg-[#E8704A] hover:bg-[#D4764A] text-white px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              >
                Reserva tu Mesa
              </a>

              <a
                href="#galeria"
                role="button"
                aria-label="Ver nuestra galería de platos"
                className="w-full sm:w-auto border-2 border-[#D4AF8A] text-[#D4AF8A] hover:bg-[#D4AF8A]/10 px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                Ver Galería
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}