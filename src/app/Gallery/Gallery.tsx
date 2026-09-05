import Image from "next/image";
import Reveal from "../components/Reveal";

const platos = [
  {
    id: 1,
    nombre: "Vieira a la plancha",
    descripcion:
      "Vieira fresca, cuidadosamente a la plancha, servida con crema de berenjena ahumada y delicado caviar de aceite que realza su sabor.",
    imagen: "/Plato1.jpeg",
    imagenAlt:
      "Vieira fresca a la plancha con crema de berenjena ahumada y caviar de aceite en El Racó de Huelva, Mollet del Vallès",
    // La vieira es un molusco, no un crustaceo.
    categoria: "Mariscos",
  },
  {
    id: 2,
    nombre: "Langostinos de Sanlúcar",
    descripcion:
      "Langostinos frescos de Sanlúcar marinados con jengibre, comino y tajín, con crujiente de arroz y toques de berenjena ahumada.",
    imagen: "/Plato2.jpeg",
    imagenAlt:
      "Langostinos frescos de Sanlúcar marinados, en restaurante gourmet de Mollet del Vallès",
    categoria: "Crustáceos",
  },
  {
    id: 3,
    nombre: "El Bronceado",
    descripcion:
      "Salmón al horno con superficie caramelizada de azúcar moreno, acompañado de polvo de pistacho y un salteado de verduras frescas.",
    imagen: "/Plato3.jpeg",
    imagenAlt:
      "Salmón al horno con costra de azúcar moreno en El Racó de Huelva, Barcelona",
    // El salmon es pescado; estaba clasificado como crustaceo.
    categoria: "Pescados",
  },
  {
    id: 4,
    nombre: "Revuelto de langostino",
    descripcion:
      "Revuelto cremoso de langostino de Sanlúcar con salsa de trufa y huevos de corral.",
    imagen: "/Plato4.jpeg",
    imagenAlt:
      "Revuelto cremoso de langostinos de Sanlúcar con salsa de trufa y huevos de corral",
    categoria: "Crustáceos",
  },
  {
    id: 5,
    nombre: "Cochinillo confitado",
    descripcion:
      "Cochinillo confitado lentamente a baja temperatura, con salsa de manzana y gel de naranja, de textura crujiente y jugosa.",
    imagen: "/Plato6.jpeg",
    imagenAlt: "Cochinillo confitado a baja temperatura en El Racó de Huelva",
    categoria: "Carnes",
  },
  {
    id: 6,
    nombre: "Cheesecake de frambuesa",
    descripcion:
      "Cheesecake suave y cremoso sobre base de galleta, coronado con coulis de frambuesa fresca que aporta un contraste ácido.",
    imagen: "/Plato17.jpeg",
    imagenAlt: "Cheesecake de frambuesa servido en El Racó de Huelva",
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
            description:
              "Selección de platos gourmet con mariscos frescos de Huelva",
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
        className="bg-crema px-5 py-24 sm:px-6 sm:py-32 lg:px-24"
        aria-label="Galería de platos gourmet con mariscos de Huelva"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <Reveal className="flex items-center gap-4">
              <span className="hidden h-px w-7 bg-bronce/50 sm:block" />
              <span className="text-[10px] tracking-[0.32em] text-bronce uppercase sm:text-[11px] sm:tracking-[0.34em]">
                Nuestras creaciones
              </span>
              <span className="hidden h-px w-7 bg-bronce/50 sm:block" />
            </Reveal>

            <Reveal delay={110} className="mt-6">
              <h2 className="text-[clamp(2.25rem,5.5vw,3.875rem)] leading-[1.1] text-marino">
                Galería de platos
              </h2>
            </Reveal>

            <Reveal delay={200} className="mt-6">
              <p className="mx-auto max-w-[37rem] text-base leading-[1.75] text-tinta text-pretty sm:text-[17px]">
                Una selección de lo que sale cada día de nuestra cocina, elaborada con
                producto fresco de Huelva y Sanlúcar.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-11 gap-y-13 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
            {platos.map((plato, index) => (
              <Reveal
                key={plato.id}
                as="article"
                delay={300 + index * 80}
                className="group flex flex-col"
              >
                <div
                  id={`galeria-${plato.id}`}
                  className="relative h-80 overflow-hidden bg-[#e4dcd1] sm:h-[21.25rem]"
                >
                  <Image
                    src={plato.imagen}
                    alt={plato.imagenAlt}
                    fill
                    className="object-cover transition-transform duration-[760ms] ease-[var(--ease-suave)] group-hover:scale-[1.045]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,46,61,0)_45%,rgba(13,46,61,0.55)_100%)] opacity-0 transition-opacity duration-500 ease-[var(--ease-suave)] group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <span className="mt-5.5 text-[10px] font-semibold tracking-[0.26em] text-bronce uppercase">
                  {plato.categoria}
                </span>
                <h3 className="mt-2.5 text-[25px] leading-[1.25] text-marino transition-colors duration-[260ms] group-hover:text-coral">
                  {plato.nombre}
                </h3>
                <span
                  className="mt-3.5 block h-px w-0 bg-bronce transition-[width] duration-500 ease-[var(--ease-suave)] group-hover:w-11"
                  aria-hidden="true"
                />
                <p className="mt-3.5 text-[15px] leading-[1.68] text-tinta text-pretty">
                  {plato.descripcion}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center gap-6.5 sm:mt-26">
            <Reveal
              variant="rule-draw"
              as="span"
              className="block h-px w-16 origin-center bg-bronce/60"
            >
              {null}
            </Reveal>
            <Reveal delay={80}>
              <p className="text-center text-[15px] text-tinta">
                Pregunta por la sugerencia del día.
              </p>
            </Reveal>
            <Reveal delay={160} className="w-full sm:w-auto">
              <a
                href="tel:+34658890607"
                aria-label="Llamar a El Racó de Huelva para consultar disponibilidad"
                className="flex h-14 w-full items-center justify-center bg-coral px-10 text-xs font-semibold tracking-[0.19em] text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975] sm:w-auto"
              >
                Consultar disponibilidad
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
