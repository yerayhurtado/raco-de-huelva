import Image from "next/image";

const platos = [
  {
    id: 1,
    nombre: "Vieira a la Plancha",
    descripcion: "Vieira fresca, cuidadosamente a la plancha, servida con crema de berenjena ahumada y delicado caviar de aceite que realza su sabor.",
    imagen: "/Plato1.jpeg",
    imagenAlt: "Vieira fresca a la plancha con crema de berenjena ahumada y caviar de aceite en El Racó de Huelva, Mollet del Vallès",
    categoria: "Crustáceos",
  },
  {
    id: 2,
    nombre: "Langostinos de Sanlúcar",
    descripcion: "Langostinos frescos de Sanlúcar marinados con jengibre, comino y tajín, acompañados de crujiente de arroz y toques de berenjena ahumada, creando un equilibrio de texturas y sabores.",
    imagen: "/Plato2.jpeg",
    imagenAlt: "Gambas rojas de Huelva frescas en restaurante gourmet Mollet del Vallès",
    categoria: "Crustáceos",
  },
  {
    id: 3,
    nombre: "El Bronceado",
    descripcion: "Salmón al horno con superficie caramelizada de azúcar moreno, acompañado de tierra de pistacho y un salteado de verduras frescas.",
    imagen: "/Plato3.jpeg",
    imagenAlt: "Salmon al horno de Huelva en restaurante mariscos El Racó, Barcelona",
    categoria: "Crustáceos",
  },
  {
    id: 4,
    nombre: "Revuelto de langostino de Sanlúcar",
    descripcion: "Revuelto cremoso de langostino de Sanlúcar con salsa de trufa y huevos de corral",
    imagen: "/Plato4.jpeg",
    imagenAlt: "Cremoso revuelto de langostinos de Sanlúcar, realzado con delicada salsa de trufa y huevos de corral frescos.",
    categoria: "Crustáceos",
  },
  {
    id: 5,
    nombre: "Cochinillo Confitado",
    descripcion: "Cochinillo confitado lentamente a baja temperatura, acompañado de salsa de manzana y gel de naranja, con textura crujiente y jugosa.",
    imagen: "/Plato6.jpeg",
    imagenAlt: "Cochinillo confitado en restaurante El Racó de Huelva",
    categoria: "Carnes",
  },
  {
    id: 6,
    nombre: "Cheesecake de Frambuesa",
    descripcion: "Cheesecake suave y cremoso sobre base de galleta, coronado con coulis de frambuesa fresca que aporta un contraste ácido y refrescante.",
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