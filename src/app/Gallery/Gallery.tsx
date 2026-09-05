import Image, { type StaticImageData } from "next/image";
import Reveal from "../components/Reveal";
import plato1 from "../../../public/Plato1IA.jpeg";
import plato2 from "../../../public/Plato2IA.jpeg";
import plato3 from "../../../public/Plato3IA.jpeg";
import plato4 from "../../../public/Plato4IA2.jpeg";
import plato6 from "../../../public/Plato6IA.jpeg";
import plato17 from "../../../public/Plato17IA.jpeg";

type Plato = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: StaticImageData;
  imagenAlt: string;
  categoria: string;
  /**
   * Corrección de color medida foto a foto sobre las fotos nuevas. Ya
   * vienen bien iluminadas: la dispersión de luz baja de 74 puntos a 35,
   * así que el ajuste es mucho más suave que antes. Lo que sigue bailando
   * es la saturación (el salmón está en 0,255 por la madera del fondo,
   * el resto entre 0,107 y 0,146). Se corrige hacia luz 196 y saturación
   * 0,14, amortiguado al 55%.
   */
  ajuste: string;
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
      "Vieira a la plancha sobre crema de berenjena ahumada, con puntos de caviar de aceite",
    categoria: "Mariscos",
    ajuste: "brightness(1.000) saturate(0.977)",
    desplace: "",
  },
  {
    id: 2,
    nombre: "Langostinos de Sanlúcar",
    descripcion:
      "Langostinos frescos de Sanlúcar marinados con jengibre, comino y tajín, con crujiente de arroz y toques de berenjena ahumada.",
    imagen: plato2,
    imagenAlt:
      "Langostinos de Sanlúcar con crujiente de arroz y puntos de berenjena ahumada",
    categoria: "Crustáceos",
    ajuste: "brightness(0.993) saturate(1.170)",
    desplace: "sm:mt-28",
  },
  {
    id: 3,
    nombre: "El Bronceado",
    descripcion:
      "Salmón al horno con superficie caramelizada de azúcar moreno, acompañado de polvo de pistacho y un salteado de verduras frescas.",
    imagen: plato3,
    imagenAlt:
      "Lomo de salmón al horno con costra de azúcar moreno sobre salteado de verduras",
    categoria: "Pescados",
    ajuste: "brightness(1.041) saturate(0.752)",
    desplace: "",
  },
  {
    id: 4,
    nombre: "Revuelto de langostino",
    descripcion:
      "Revuelto cremoso de langostino de Sanlúcar con salsa de trufa y huevos de corral.",
    imagen: plato4,
    imagenAlt: "Revuelto cremoso de langostino de Sanlúcar con salsa de trufa",
    categoria: "Crustáceos",
    ajuste: "brightness(0.982) saturate(1.029)",
    desplace: "sm:mt-28",
  },
  {
    id: 5,
    nombre: "Cochinillo confitado",
    descripcion:
      "Cochinillo confitado lentamente a baja temperatura, con salsa de manzana y gel de naranja, de textura crujiente y jugosa.",
    imagen: plato6,
    imagenAlt: "Cochinillo confitado con salsa de manzana y gel de naranja",
    categoria: "Carnes",
    ajuste: "brightness(0.945) saturate(1.137)",
    desplace: "",
  },
  {
    id: 6,
    nombre: "Cheesecake de frambuesa",
    descripcion:
      "Cheesecake suave y cremoso sobre base de galleta, coronado con coulis de frambuesa fresca que aporta un contraste ácido.",
    imagen: plato17,
    imagenAlt: "Porción de cheesecake sobre base de galleta con coulis de frambuesa",
    categoria: "Postres",
    ajuste: "brightness(1.003) saturate(0.977)",
    desplace: "sm:mt-28",
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

          {/* Dos columnas, no tres: las fotos nuevas aguantan verse grandes
              y seis fotos grandes valen más que seis pequeñas. Sin
              con su descripción bajo cada una. */}
          <div className="mt-16 grid grid-cols-1 items-start gap-x-12 gap-y-16 sm:mt-24 sm:grid-cols-2 sm:gap-y-24">
            {platos.map((plato, index) => (
              <Reveal
                key={plato.id}
                as="article"
                variant="reveal-frame"
                delay={index * 90}
                className={`group flex flex-col ${plato.desplace}`}
              >
                <div
                  id={`galeria-${plato.id}`}
                  className="shot relative aspect-[5/4] overflow-hidden bg-[#e4dcd1] sm:aspect-square"
                >
                  <div className="parallax absolute inset-x-0 -top-[6%] h-[112%]">
                    <Image
                      src={plato.imagen}
                      alt={plato.imagenAlt}
                      fill
                      placeholder="blur"
                      style={{ filter: plato.ajuste }}
                      className="object-cover transition-transform duration-[760ms] ease-[var(--ease-suave)] group-hover:scale-[1.045]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      quality={85}
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,46,61,0)_45%,rgba(13,46,61,0.55)_100%)] opacity-0 transition-opacity duration-500 ease-[var(--ease-suave)] group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                {/* El pie entra un poco después que la foto: la sección se
                    lee como un solo gesto en tres tiempos, no como tres
                    cosas apareciendo a la vez. */}
                <div className="pie flex flex-col">
                  <span className="mt-7 text-micro font-semibold tracking-[0.28em] text-bronce uppercase">
                    {plato.categoria}
                  </span>
                  <h3 className="mt-3 text-plato leading-[1.25] text-marino transition-colors duration-[260ms] group-hover:text-coral sm:text-[1.75rem]">
                    {plato.nombre}
                  </h3>
                  <span
                    className="mt-4 block h-px w-11 bg-bronce/40 transition-[width,background-color] duration-500 ease-[var(--ease-suave)] group-hover:w-20 group-hover:bg-bronce"
                    aria-hidden="true"
                  />
                  <p className="mt-4 max-w-[34rem] text-cuerpo leading-[1.7] text-tinta text-pretty">
                    {plato.descripcion}
                  </p>
                </div>
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
