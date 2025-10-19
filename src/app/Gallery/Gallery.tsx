import Image from "next/image";

const platos = [
  {
    id: 1,
    nombre: "Vieira a la Plancha",
    descripcion: "Vieira fresca a la plancha acompañada de una crema de berenjena ahumada y un caviar de aceite",
    imagen: "/Plato1.jpeg",
    imagenAlt: "Vieira fresca a la plancha con crema de berenjena ahumada y caviar de aceite en El Racó de Huelva, Mollet del Vallès",
    categoria: "Crustáceos",
  },
  {
    id: 2,
    nombre: "Langostinos de Sanlúcar",
    descripcion: "Langostinos de Sanlúcar marinados con jengibre, comino y tajín, acompañados de un crujiente de arroz y puntitos de berenjena ahumada",
    imagen: "/Plato2.jpeg",
    imagenAlt: "Gambas rojas de Huelva frescas en restaurante gourmet Mollet del Vallès",
    categoria: "Crustáceos",
  },
  {
    id: 3,
    nombre: "Nécora Fresca",
    descripcion: "Nécora recién llegada de Huelva, servida en su jugo con lima y aceite de oliva virgen extra",
    imagen: "/Plato3.jpeg",
    imagenAlt: "Nécora fresca de Huelva en restaurante mariscos El Racó, Barcelona",
    categoria: "Crustáceos",
  },
  {
    id: 4,
    nombre: "Arroz de Marisco",
    descripcion: "Arroz caldoso con gambas, cigalas y mejillones frescos de Huelva, infusionado con caldo de marisco",
    imagen: "/Plato4.jpeg",
    imagenAlt: "Arroz de marisco con gambas, cigalas y mejillones de Huelva",
    categoria: "Arroces",
  },
  {
    id: 5,
    nombre: "Pulpo a Feira",
    descripcion: "Pulpo de O Carballiño cocido en agua de mar, aliñado con aceite de oliva, sal y pimentón de la Vera",
    imagen: "/Plato6.jpeg",
    imagenAlt: "Pulpo a Feira receta tradicional en restaurante El Racó de Huelva",
    categoria: "Cefalópodos",
  },
  {
    id: 6,
    nombre: "Cheesecake de Frambuesa",
    descripcion: "Delicioso cheesecake cremoso con base de galleta, cubierto con coulis de frambuesa fresco",
    imagen: "/Plato17.jpeg",
    imagenAlt: "Cheesecake de frambuesa servido en restaurante El Racó de Huelva",
    categoria: "Postres",
  },
];

export default function Gallery() {
  return (
    <>
      {/* Schema.org JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Galería de platos - El Racó de Huelva",
            description: "Selección de platos gourmet con mariscos frescos de Huelva",
            itemListElement: platos.map((plato, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: plato.nombre,
              description: plato.descripcion,
              image: plato.imagen,
              url: `#galeria-${plato.id}`,
            })),
          }),
        }}
      />

      <section
        id="galeria"
        className="py-20 sm:py-28 bg-[#F9F6F1] px-4 sm:px-6 lg:px-8"
        aria-label="Galería de platos gourmet con mariscos de Huelva"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4AF8A]"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF8A] uppercase">
                Nuestras Creaciones
              </span>
              <div className="h-px w-8 bg-[#D4AF8A]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F3F5C] mb-4">
              Galería de Platos
            </h2>
            <p className="text-base sm:text-lg text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed">
              Selección de nuestras creaciones más refinadas, 
              elaboradas con mariscos frescos importados de Huelva, Barcelona
            </p>
          </div>

          {/* Grid de platos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {platos.map((plato) => (
              <article
                key={plato.id}
                id={`galeria-${plato.id}`}
                className="group"
              >
                {/* Contenedor de imagen */}
                <div className="relative h-80 sm:h-96 overflow-hidden bg-gray-200 mb-4 rounded-lg shadow-md">
                  <Image
                    src={plato.imagen}
                    alt={plato.imagenAlt}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  {/* Overlay elegante */}
                  <div className="absolute inset-0 bg-[#0F3F5C]/0 transition-all duration-500"></div>
                </div>

                {/* Contenido */}
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-[#2A9D8F] uppercase tracking-widest">
                      {plato.categoria}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F3F5C] mt-2 transition-colors duration-300">
                      {plato.nombre}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#3A3A3A]">
                    {plato.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 sm:mt-20">
            <a
              href="#contacto"
              role="button"
              aria-label="Reserva tu mesa en El Racó de Huelva"
              className="w-full sm:w-auto bg-[#E8704A] hover:bg-[#D4764A] text-white px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
            >
              Consultar Disponibilidad
            </a>
          </div>
        </div>
      </section>
    </>
  );
}