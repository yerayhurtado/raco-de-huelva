"use client";

import { useMemo, useRef, useState } from "react";
import Reveal from "../components/Reveal";

type MenuCategory = "Para compartir" | "Entrantes especiales" | "Carnes" | "Pescados" | "Arroces" | "Bollería" | "Postres" | "Vinos";

const menuItems: Record<MenuCategory, { nombre: string; descripcion: string; precio: string }[]> = {
  "Para compartir": [
    {
      nombre: "Croquetas de Cochinillo con Manzana",
      descripcion: "Croquetas cremosas de cochinillo con toque de manzana",
      precio: "14,95 €"
    },
    {
      nombre: "Croquetas de Secreto Ibérico con Miel",
      descripcion: "Croquetas de secreto ibérico con un toque dulce de miel",
      precio: "12,95 €"
    },
    {
      nombre: "Revuelto de Langostinos y Trufa",
      descripcion: "Revuelto suave con langostinos frescos y trufa",
      precio: "19,95 €"
    },
    {
      nombre: "Papas de Sanlúcar",
      descripcion: "Tradicionales papas de Sanlúcar",
      precio: "18,95 €"
    },
    {
      nombre: "Rocas Volcánicas",
      descripcion: "Buñuelos de bacalao con tempura de tinta de calamar",
      precio: "14,95 €"
    },
    {
      nombre: "Cochifrito con Manzana",
      descripcion: "Trozos de cochinillo fritos acompañados de manzana",
      precio: "15,95 €"
    },
    {
      nombre: "Tortitas de Camarón Caseras",
      descripcion: "Tortitas crujientes de camarón de elaboración casera",
      precio: "14,95 €"
    },
    {
      nombre: "Anchoa del Cantábrico 000",
      descripcion: "Anchoa de máxima calidad del Cantábrico",
      precio: "3,95 €/filete"
    },
    {
      nombre: "Mejillones en Salsa Picante",
      descripcion: "Mejillones frescos cocinados en salsa picante",
      precio: "12,95 €"
    },
    {
      nombre: "Cazón en Adobo",
      descripcion: "Cazón marinado y frito en adobo tradicional",
      precio: "14,95 €"
    },
    {
      nombre: "Coquinas D.O. de Huelva",
      descripcion: "Coquinas frescas con Denominación de Origen de Huelva",
      precio: "19,95 €"
    },
    {
      nombre: "Olla de Caracoles Ibéricos",
      descripcion: "Caracoles ibéricos guisados al estilo tradicional",
      precio: "19,95 €"
    },
    {
      nombre: "Zamburiñas a la Brasa",
      descripcion: "4 unidades de zamburiñas frescas a la brasa",
      precio: "12,95 €"
    },
    {
      nombre: "Vieira Fresca con Berenjena Ahumada",
      descripcion: "Vieira fresca acompañada de berenjena ahumada",
      precio: "6,95 €"
    },
  ],
  "Entrantes especiales": [
    {
      nombre: "Tartar de Salmón",
      descripcion: "Helado de aguacate, tartar de salmón y aires de limón",
      precio: "14,95 €"
    },
    {
      nombre: "Flor de Alcachofa",
      descripcion: "Flor de alcachofa confitada acabada en brasa con foie y langostinos",
      precio: "14,95 €"
    },
  ],
  "Carnes": [
    {
      nombre: "Brownie",
      descripcion: "Base de bizcocho al vino con carne de buey y salsa oporto B/T",
      precio: "16,95 €"
    },
    {
      nombre: "El Canelón",
      descripcion: "Rabo de toro al vino con cacao",
      precio: "15,95 €"
    },
    {
      nombre: "El Crujiente de Ministro",
      descripcion: "Manitas de cerdo deshuesadas crujientes con salsa de foie",
      precio: "18,95 €"
    },
    {
      nombre: "Zarpa de Oso",
      descripcion: "Costillar de ternera con emulsión de patata y ahumado con encina B/T",
      precio: "26,95 €"
    },
    {
      nombre: "Panceta Ibérica",
      descripcion: "Dados de panceta ibérica con compota de manzana, cebolla encurtida y ahumado con encina B/T",
      precio: "16,95 €"
    },
  ],
  "Pescados": [
    {
      nombre: "Bacalao a la Miel",
      descripcion: "Dados de bacalao en tempura de miel",
      precio: "18,95 €"
    },
    {
      nombre: "La Perla",
      descripcion: "Delicadas cocochas de bacalao emulsionadas en nuestra salsa pilpil tradicional, con ajo y guindilla",
      precio: "22,95 €"
    },
    {
      nombre: "El Pulpo",
      descripcion: "Pata de pulpo a la brasa con emulsión de patata y ahumada con encina",
      precio: "24,95 €"
    },
    {
      nombre: "Mar y Montaña",
      descripcion: "Albóndigas de choco con gamba roja y crema de jamón de bellota",
      precio: "17,95 €"
    },
    {
      nombre: "Lubina de Isla Canela",
      descripcion: "Lubina al horno con ajos confitados cama de salteado de verduras del campo",
      precio: "17,95 €"
    },
    {
      nombre: "El Bronceado",
      descripcion: "Salmón al horno con costra de azúcar moreno, verduritas y polvo de pistacho",
      precio: "19,95 €"
    },
    {
      nombre: "Mariscada El Racó",
      descripcion: "Solo disponible fin de semana - Para dos comensales",
      precio: "119,95 €"
    },
  ],
  "Arroces": [
    {
      nombre: "Arroz Caldoso de Bogavante",
      descripcion: "Mínimo dos personas",
      precio: "26,95 €"
    },
    
  ],
  "Bollería": [
    {
      nombre: "Pan de Coca",
      descripcion: "Pan dulce tradicional",
      precio: "3,95 €"
    },
  ],
  "Postres": [
    {
      nombre: "Sorbete de Limón con Mar de Cava o Mandarina con Vodka",
      descripcion: "Sorbete refrescante de limón con cava o mandarina con vodka",
      precio: "6,95 €"
    },
    {
      nombre: "Tiramisú Casero",
      descripcion: "Tiramisú tradicional casero",
      precio: "6,95 €"
    },
    {
      nombre: "Torrija de Coco con Helado de Leche Merengada",
      descripcion: "Torrija de coco caramelizada acompañada de helado artesanal de leche merengada",
      precio: "6,50 €"
    },
    {
      nombre: "Planchadito de Crema",
      descripcion: "Xuxo relleno de cremosa crema pastelera, planchadito al momento y acompañado de una bola de helado artesanal, ofreciendo un delicioso contraste de texturas y temperaturas.",
      precio: "6,95 €"
    },
    {
      nombre: "Cheesecake Casera",
      descripcion: "Tarta de queso casera tradicional",
      precio: "6,50 €"
    },
    {
      nombre: "Cheesecake Casera Sabores",
      descripcion: "Tarta de queso casera con variedad de sabores",
      precio: "6,95 €"
    },
  ],
  "Vinos": [
    {
      nombre: "Vino de la Casa Zuazo Gaston Rioja",
      descripcion: "DOCa Rioja. 95% Tempranillo, 5% Graciano. Color cereza de capa media-alta con ribete rojizo. Aroma intenso, combinando fruta fresca y confinada. De entrada fresca y viva con un equilibrio tánico-ácido adecuado, largo retrogusto.",
      precio: "16 € (Botella) / 3,95 € (Copa)"
    },
    {
      nombre: "Zuazo Gastón Crianza",
      descripcion: "DOCa Rioja. 100% Tempranillo. 15 meses en barrica de roble francés y americano. Color rojo rubí ligero e intenso. Aromas varietales y de crianza (roble y vainilla). Complejo y elegante en boca. Intenso retrogusto.",
      precio: "20,95 €"
    },
    {
      nombre: "Tamiz Roble",
      descripcion: "DO Ribera del Duero. 100% Tempranillo. 7 meses en barrica de roble americano. Color rojo cereza, limpio, con ribete violáceo. Intensa nariz, con frutas rojas del bosque y vainilla propia de la madera. En boca es redonda, con matices balsámicos, sedoso.",
      precio: "16,95 € (Botella) / 4,50 € (Copa)"
    },
    {
      nombre: "Teófilo Reyes",
      descripcion: "DO Ribera del Duero. 100% Tempranillo. 15 meses en barrica de roble francés y americano. Vista limpia, color cereza con ribete granate. Nariz: notas de fruta madura, caramelo y tostados. En boca es sedoso, con recuerdos de minerales, confitura y balsámicos, bien ensamblado.",
      precio: "27 €"
    },
    {
      nombre: "Ulls Negres Crianza",
      descripcion: "DO Empordà. 100% Garnacha. 12 meses en barrica de roble americano. Color cereza con reflejos de color teja. En nariz es muy franco, con notas a frutas maduras. En boca es graso y potente, con final largo y equilibrado con tanino suave.",
      precio: "18,50 €"
    },
    {
      nombre: "Vino de la Casa Tapas Gaston Verdejo",
      descripcion: "100% Verdejo. Color amarillo pálido con sutiles reflejos dorados. Aromas de piña, melocotón y cítricos junto a notas florales y de hinojo. Excelente entrada fresca, con acidez, fruta y frescura.",
      precio: "16 € (Botella) / 3,95 € (Copa)"
    },
    {
      nombre: "Pere Punyetes",
      descripcion: "DO Penedès. 60% Muscat y 40% Xarel·lo. En nariz se despliegan aromas intensos de azahar y flores blancas, entrelazados con destellos de mango y piña. En boca, su textura sedosa y su amplitud se hacen presentes, llevándonos a un viaje por sabores de frutas maduras y un final ligeramente cítrico.",
      precio: "18,50 €"
    },
    {
      nombre: "Marqués de Vizhoja",
      descripcion: "Sin D.O. Tradicionales de procedencia nacional. Color amarillo pálido con una notas verdosas. Aroma fresco, fino y penetrante, con toques frutales. Ofrece un sabor equilibrado que recuerda a manzana y pera, con suaves notas cítricas.",
      precio: "19,95 €"
    },
    {
      nombre: "Ullones Rosado",
      descripcion: "DO Empordà. 100% Garnacha. Color rosa suave con reflejos grises. Desarrolla sutiles e inagotables aromas: pétalos de rosa, fresas, frambuesas y cerezas. Sensaciones de untuosidad y suavidad en boca. Encontramos balance, frescor, y en su desarrollo al paladar de nuevo una melosa untuosidad.",
      precio: "17,95 €"
    },
    {
      nombre: "Oh Brut Nature",
      descripcion: "DO Cava. Macabeo, Xarel·lo. Mínimo 15 meses en la cava. Atractivo color amarillo pálido brillante. Burbuja fina que forma una corona de espuma. Buena intensidad aromática, rico en aromas florales y afrutados que denotan personalidad. En boca es fresco, seco y afrutado. Conjunto equilibrado con buena persistencia.",
      precio: "18 €"
    }
]

};
/** Identificador estable para enlazar cada pestaña con su panel. */
const slug = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-");

export default function Carta() {
  const categories = useMemo(() => Object.keys(menuItems) as MenuCategory[], []);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Para compartir");
  // Alternar el nombre de la animacion es lo que la reinicia al cambiar de
  // pestaña: React reutiliza los nodos y una animacion con el mismo nombre
  // no se vuelve a disparar.
  const [pass, setPass] = useState(0);

  const selectCategory = (category: MenuCategory) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setPass((value) => value + 1);
  };

  // role="tablist" promete navegacion con flechas: si se pone el rol,
  // hay que cumplirlo. Con tabindex movil, como manda el patron ARIA.
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = categories.length - 1;
    let next: number;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    selectCategory(categories[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="carta"
      className="bg-marino-oscuro px-5 py-24 sm:px-6 sm:py-32 lg:px-28"
      aria-label="Carta completa - El Racó de Huelva"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">

          <Reveal>
            <h2 className="text-[clamp(2.25rem,5.5vw,3.875rem)] leading-[1.1] text-arena-clara">
              La carta
            </h2>
          </Reveal>

          <Reveal delay={90} className="mt-6">
            <p className="mx-auto max-w-[36rem] text-guia leading-[1.75] text-crema/80 text-pretty">
              Producto fresco de temporada. La disponibilidad varía según la captura del día.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300} className="mt-15">
          <div
            role="tablist"
            aria-label="Categorías de la carta"
            className="no-scrollbar flex snap-x snap-proximity gap-x-8 overflow-x-auto border-b border-arena/25 md:flex-wrap md:justify-center md:gap-x-10 md:overflow-visible"
          >
            {categories.map((category, index) => {
              const selected = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  id={`tab-${slug(category)}`}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  tabIndex={selected ? 0 : -1}
                  aria-selected={selected}
                  aria-controls={`panel-${slug(category)}`}
                  onClick={() => selectCategory(category)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={`tab relative flex-none snap-start cursor-pointer px-0.5 py-3 text-mini font-semibold tracking-[0.2em] whitespace-nowrap uppercase transition-colors duration-[240ms] ${
                    selected ? "text-coral-claro" : "text-crema/70 hover:text-coral-claro"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${slug(activeCategory)}`}
          aria-labelledby={`tab-${slug(activeCategory)}`}
          className="mt-16 gap-x-19 md:columns-2"
        >
          {menuItems[activeCategory].map((item, index) => (
            <article
              // La clave incluye la pasada para que el cambio de pestaña
              // remonte las filas y la entrada escalonada se reproduzca.
              key={`${pass}-${item.nombre}`}
              className="dish-in flex break-inside-avoid flex-col border-b border-arena/20 pt-5.5 pb-6"
              style={{ "--dish-delay": `${Math.min(index * 55, 620)}ms` } as React.CSSProperties}
            >
              <div className="flex items-baseline">
                <h3 className="text-plato leading-[1.3] text-arena-clara">{item.nombre}</h3>
                <span className="leader" aria-hidden="true" />
                <span className="font-display text-precio whitespace-nowrap text-arena-clara tabular-nums">
                  {item.precio}
                </span>
              </div>
              <p className="mt-2.5 max-w-[92%] text-nota leading-[1.66] text-crema/75 text-pretty">
                {item.descripcion}
              </p>
            </article>
          ))}
        </div>

        <Reveal delay={80} className="mt-19">
          <div className="flex flex-col gap-6 border-y border-arena/35 py-8 sm:flex-row sm:gap-10">
            <span className="flex-none pt-1 text-micro font-semibold tracking-[0.26em] text-arena uppercase">
              Antes de pedir
            </span>
            <div className="flex flex-col gap-2.5">
              <p className="max-w-[49rem] text-cuerpo leading-[1.7] text-crema/85">
                Todo el producto es fresco y de temporada, así que la disponibilidad cambia
                con la lonja. Si vienes por un plato concreto, llámanos antes y te lo
                reservamos.
              </p>
              <p className="max-w-[49rem] text-nota leading-[1.7] text-crema/65">
                Tenemos carta de alérgenos: pídesela al camarero. Si tienes alguna alergia o
                intolerancia, dínoslo al sentarte.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-19 flex flex-col items-center gap-6.5">
          <Reveal
            variant="rule-draw"
            as="span"
            className="block h-px w-16 origin-center bg-arena/70"
          >
            {null}
          </Reveal>
          <Reveal delay={80} className="w-full sm:w-auto">
            <a
              href="tel:+34658890607"
              aria-label="Llamar a El Racó de Huelva para reservar mesa"
              className="flex h-14 w-full items-center justify-center bg-coral px-10 text-mini font-semibold tracking-[0.19em] text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975] sm:w-auto"
            >
              Reservar mesa
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
