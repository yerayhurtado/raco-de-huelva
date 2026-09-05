import Image, { type StaticImageData } from "next/image";
import Reveal from "../components/Reveal";
import plato1 from "../../../public/Plato1.jpeg";
import plato2 from "../../../public/Plato2.jpeg";
import plato3 from "../../../public/Plato3.jpeg";
import plato4 from "../../../public/Plato4.jpeg";
import plato6 from "../../../public/Plato6.jpeg";
import plato17 from "../../../public/Plato17.jpeg";

type Plato = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: StaticImageData;
  imagenAlt: string;
  categoria: string;
  /** Retícula editorial: ni todas las fotos miden lo mismo ni caen a la misma altura. */
  columnas: string;
  alto: string;
  desplace: string;
};

const platos: Plato[] = [
  {
    id: 1,
    nombre: "Vieira a la plancha",
    descripcion:
      "Vieira fresca, cuidadosamente a la plancha, servida con crema de berenjena ahumada y delicado caviar de aceite que realza su sabor.",
    imagen: plato1,
    imagenAlt:
      "Vieira fresca a la plancha con crema de berenjena ahumada y caviar de aceite en El Racó de Huelva, Mollet del Vallès",
    categoria: "Mariscos",
    columnas: "lg:col-span-7",
    alto: "h-80 sm:h-96 lg:h-[36rem]",
    desplace: "",
  },
  {
    id: 2,
    nombre: "Langostinos de Sanlúcar",
    descripcion:
      "Langostinos frescos de Sanlúcar marinados con jengibre, comino y tajín, con crujiente de arroz y toques de berenjena ahumada.",
    imagen: plato2,
    imagenAlt:
      "Langostinos frescos de Sanlúcar marinados, en restaurante gourmet de Mollet del Vallès",
    categoria: "Crustáceos",
    columnas: "lg:col-span-5",
    alto: "h-80 sm:h-96 lg:h-[27rem]",
    desplace: "lg:mt-28",
  },
  {
    id: 3,
    nombre: "El Bronceado",
    descripcion:
      "Salmón al horno con superficie caramelizada de azúcar moreno, acompañado de polvo de pistacho y un salteado de verduras frescas.",
    imagen: plato3,
    imagenAlt:
      "Salmón al horno con costra de azúcar moreno en El Racó de Huelva, Barcelona",
    categoria: "Pescados",
    columnas: "lg:col-span-5",
    alto: "h-80 sm:h-96 lg:h-[27rem]",
    desplace: "",
  },
  {
    id: 4,
    nombre: "Revuelto de langostino",
    descripcion:
      "Revuelto cremoso de langostino de Sanlúcar con salsa de trufa y huevos de corral.",
    imagen: plato4,
    imagenAlt:
      "Revuelto cremoso de langostinos de Sanlúcar con salsa de trufa y huevos de corral",
    categoria: "Crustáceos",
    columnas: "lg:col-span-7",
    alto: "h-80 sm:h-96 lg:h-[34rem]",
    desplace: "lg:mt-16",
  },
  {
    id: 5,
    nombre: "Cochinillo confitado",
    descripcion:
      "Cochinillo confitado lentamente a baja temperatura, con salsa de manzana y gel de naranja, de textura crujiente y jugosa.",
    imagen: plato6,
    imagenAlt: "Cochinillo confitado a baja temperatura en El Racó de Huelva",
    categoria: "Carnes",
    columnas: "lg:col-span-6",
    alto: "h-80 sm:h-96 lg:h-[30rem]",
    desplace: "",
  },
  {
    id: 6,
    nombre: "Cheesecake de frambuesa",
    descripcion:
      "Cheesecake suave y cremoso sobre base de galleta, coronado con coulis de frambuesa fresca que aporta un contraste ácido.",
    imagen: plato17,
    imagenAlt: "Cheesecake de frambuesa servido en El Racó de Huelva",
    categoria: "Postres",
    columnas: "lg:col-span-6",
    alto: "h-80 sm:h-96 lg:h-[30rem]",
    desplace: "lg:mt-20",
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
              image: plato.imagen.src,
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
          {/* Cabecera asimétrica: el titular ancla a la izquierda y el texto
              cierra a la derecha. Todo centrado en todas las secciones era
              la composición más segura y la menos memorable. */}
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <Reveal>
              <h2 className="text-[clamp(2.25rem,5.5vw,3.875rem)] leading-[1.05] text-marino">
                Galería
                <br />
                de platos
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="max-w-[27rem] text-guia leading-[1.75] text-tinta text-pretty lg:text-right">
                Una selección de lo que sale cada día de nuestra cocina, elaborada con
                producto fresco de Huelva y Sanlúcar.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 items-start gap-x-11 gap-y-13 sm:mt-20 sm:grid-cols-2 lg:grid-cols-12">
            {platos.map((plato, index) => (
              <Reveal
                key={plato.id}
                as="article"
                variant="reveal-frame"
                delay={index * 90}
                className={`group flex flex-col ${plato.columnas} ${plato.desplace}`}
              >
                <div
                  id={`galeria-${plato.id}`}
                  className={`shot relative overflow-hidden bg-[#e4dcd1] ${plato.alto}`}
                >
                  {/* El paralaje va en el contenedor y la escala del hover en la
                      imagen: separados, no compiten por la misma propiedad. */}
                  <div className="parallax absolute inset-x-0 -top-[6%] h-[112%]">
                    <Image
                      src={plato.imagen}
                      alt={plato.imagenAlt}
                      fill
                      placeholder="blur"
                      className="object-cover transition-transform duration-[760ms] ease-[var(--ease-suave)] group-hover:scale-[1.045]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 55vw"
                      quality={85}
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,46,61,0)_45%,rgba(13,46,61,0.55)_100%)] opacity-0 transition-opacity duration-500 ease-[var(--ease-suave)] group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <span className="mt-5.5 text-micro font-semibold tracking-[0.26em] text-bronce uppercase">
                  {plato.categoria}
                </span>
                <h3 className="mt-2.5 text-pieza leading-[1.25] text-marino transition-colors duration-[260ms] group-hover:text-coral">
                  {plato.nombre}
                </h3>
                <span
                  className="mt-3.5 block h-px w-0 bg-bronce transition-[width] duration-500 ease-[var(--ease-suave)] group-hover:w-11"
                  aria-hidden="true"
                />
                <p className="mt-3.5 max-w-[34rem] text-cuerpo leading-[1.68] text-tinta text-pretty">
                  {plato.descripcion}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center gap-6.5 sm:mt-32">
            <Reveal
              variant="rule-draw"
              as="span"
              className="block h-px w-16 origin-center bg-bronce/60"
            >
              {null}
            </Reveal>
            <Reveal delay={80}>
              <p className="text-center text-cuerpo text-tinta">
                Pregunta por la sugerencia del día.
              </p>
            </Reveal>
            <Reveal delay={160} className="w-full sm:w-auto">
              <a
                href="tel:+34658890607"
                aria-label="Llamar a El Racó de Huelva para consultar disponibilidad"
                className="flex h-14 w-full items-center justify-center bg-coral px-10 text-mini font-semibold tracking-[0.19em] text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975] sm:w-auto"
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
