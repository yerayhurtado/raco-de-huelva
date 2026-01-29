"use client";

import { useState } from "react";

type MenuCategory = "Para compartir" | "Entrantes especiales" | "Carnes" | "Pescados" | "Arroces" | "Bollería" | "Postres" | "Vinos";

const menuItems: Record<MenuCategory, { nombre: string; descripcion: string; precio: string }[]> = {
  "Para compartir": [
    {
      nombre: "Croquetas de Cochinillo con Manzana",
      descripcion: "Croquetas cremosas de cochinillo con toque de manzana",
      precio: "14,95€"
    },
    {
      nombre: "Croquetas de Secreto Ibérico con Miel",
      descripcion: "Croquetas de secreto ibérico con un toque dulce de miel ",
      precio: "12,95€"
    },
    {
      nombre: "Revuelto de Langostinos y Trufa",
      descripcion: "Revuelto suave con langostinos frescos y trufa",
      precio: "19,95€"
    },
    {
      nombre: "Papas de San Lúcar",
      descripcion: "Tradicionales papas de San Lúcar",
      precio: "18,95€"
    },
    {
      nombre: "Rocas Volcánicas",
      descripcion: "Buñuelos de bacalao con tempuura de tinta de calamar",
      precio: "14,95€"
    },
    {
      nombre: "Cochifrito con Manzana",
      descripcion: "Trozos de cochinillo fritos acompañados de manzana",
      precio: "15,95€"
    },
    {
      nombre: "Tortitas de Camarón Caseras",
      descripcion: "Tortitas crujientes de camarón de elaboración casera",
      precio: "14,95€"
    },
    {
      nombre: "Anchoa del Cantábrico 000",
      descripcion: "Anchoa de máxima calidad del Cantábrico",
      precio: "3,95€/filete"
    },
    {
      nombre: "Mejillones en Salsa Picante",
      descripcion: "Mejillones frescos cocinados en salsa picante",
      precio: "12,95€"
    },
    {
      nombre: "Cazón en Adobo",
      descripcion: "Cazón marinado y frito en adobo tradicional",
      precio: "14,95€"
    },
    {
      nombre: "Coquinas D.O de Huelva",
      descripcion: "Coquinas frescas con Denominación de Origen de Huelva",
      precio: "19,95€"
    },
    {
      nombre: "Olla de Caracoles Ibéricos",
      descripcion: "Caracoles ibéricos guisados al estilo tradicional",
      precio: "19,95€"
    },
    {
      nombre: "Zamburiñas a la Brasa",
      descripcion: "4 unidades de zamburiñas frescas a la brasa",
      precio: "12,95€"
    },
    {
      nombre: "Vieira Fresca con Berenjena Ahumada",
      descripcion: "Vieira fresca acompañada de berenjena ahumada",
      precio: "6,95€"
    },
  ],
  "Entrantes especiales": [
    {
      nombre: "Tartar de Salmón",
      descripcion: "Helado de aguacate, tartar de salmón y aires de limón",
      precio: "14,95€"
    },
    {
      nombre: "Flor de Alcachofa",
      descripcion: "Flor de alcachofa confitada acabada en brasa con foie y langostinos",
      precio: "14,95€"
    },
  ],
  "Carnes": [
    {
      nombre: "Brownie",
      descripcion: "Base de bizcocho al vino con carne de buey y salsa oporto B/T",
      precio: "16,95€"
    },
    {
      nombre: "El Canelón",
      descripcion: "Rabo de toro al vino con cacao",
      precio: "15,95€"
    },
    {
      nombre: "El Crujiente de Ministro",
      descripcion: "Manitas de cerdo deshuesadas crujientes con salsa de foie",
      precio: "18,95€"
    },
    {
      nombre: "Zarpa de Oso",
      descripcion: "Costillar de ternera con emulsión de patata y ahumado con encina B/T",
      precio: "26,95€"
    },
    {
      nombre: "Panceta Ibérica",
      descripcion: "Dados de panceta ibérica con compota de manzana, cebolla encurtida y ahumado con encina B/T",
      precio: "16,95€"
    },
  ],
  "Pescados": [
    {
      nombre: "Bacalao a la Miel",
      descripcion: "Dados de bacalao en tempura de miel",
      precio: "18,95€"
    },
    {
      nombre: "La Perla",
      descripcion: "Delicadas cocochas de bacalao emulsionadas en nuestra salsa pilpil tradicional, con ajo y guindilla",
      precio: "22,95€"
    },
    {
      nombre: "El Pulpo",
      descripcion: "Pata de pulpo a la brasa con emulsión de patata y ahumada con encina",
      precio: "24,95€"
    },
    {
      nombre: "Mar y Montaña",
      descripcion: "Albóndigas de choco con gamba roja y crema de jamón de bellota",
      precio: "17,95€"
    },
    {
      nombre: "Lubina de Isla Canela",
      descripcion: "Lubina al horno con ajos confitados cama de salteado de verduras del campo",
      precio: "17,95€"
    },
    {
      nombre: "El Bronceado",
      descripcion: "Salmón al horno con costra de azúcar moreno, verduritas y polvo de pistacho",
      precio: "19,95€"
    },
    {
      nombre: "Mariscada El Racó",
      descripcion: "Solo disponible fin de semana - Para dos comensales",
      precio: "119,95€"
    },
  ],
  "Arroces": [
    {
      nombre: "Arroz Caldoso de Bogavante",
      descripcion: "Mínimo dos personas",
      precio: "26,95€"
    },
    
  ],
  "Bollería": [
    {
      nombre: "Pan de Coca",
      descripcion: "Pan dulce tradicional",
      precio: "3,95€"
    },
  ],
  "Postres": [
    {
      nombre: "Sorbete de Limón con Mar de Cava o Mandarina con Vodka",
      descripcion: "Sorbete refrescante de limón con cava o mandarina con vodka",
      precio: "6,95€"
    },
    {
      nombre: "Tiramisú Casero",
      descripcion: "Tiramisú tradicional casero",
      precio: "6,95€"
    },
    {
      nombre: "Torrija de Coco con Helado de Leche Merengada",
      descripcion: "Torrija de coco caramelizada acompañada de helado artesanal de leche merengada",
      precio: "6,50€"
    },
    {
      nombre: "Planchadito de Crema",
      descripcion: "Xuxo relleno de cremosa crema pastelera, planchadito al momento y acompañado de una bola de helado artesanal, ofreciendo un delicioso contraste de texturas y temperaturas.",
      precio: "6,95€"
    },
    {
      nombre: "Cheesecake Casera",
      descripcion: "Tarta de queso casera tradicional",
      precio: "6,50€"
    },
    {
      nombre: "Cheesecake Casera Sabores",
      descripcion: "Tarta de queso casera con variedad de sabores",
      precio: "6,95€"
    },
  ],
  "Vinos": [
    {
      "nombre": "Vino de la Casa Zuazo Gaston Rioja",
      "descripcion": "DOCa Rioja. 95% Tempranillo, 5% Graciano. Color cereza de capa media-alta con ribete rojizo. Aroma intenso, combinando fruta fresca y confinada. De entrada fresca y viva con un equilibrio tánico-ácido adecuado, largo retrogusto.",
      "precio": "16€ (Botella) / 3,95€ (Copa)"
    },
    {
      "nombre": "Zuazo Gastón Crianza",
      "descripcion": "DOCa Rioja. 100% Tempranillo. 15 meses en barrica de roble francés y americano. Color rojo rubí ligero e intenso. Aromas varietales y de crianza (roble y vainilla). Complejo y elegante en boca. Intenso retrogusto.",
      "precio": "20,95€"
    },
    {
      "nombre": "Tamiz Roble",
      "descripcion": "DO Ribera del Duero. 100% Tempranillo. 7 meses en barrica de roble americano. Color rojo cereza, limpio, con ribete violáceo. Intensa nariz, con frutas rojas del bosque y vainilla propia de la madera. En boca es redonda, con matices balsámicos, sedoso.",
      "precio": "16,95€ (Botella) / 4,50€ (Copa)"
    },
    {
      "nombre": "Teófilo Reyes",
      "descripcion": "DO Ribera del Duero. 100% Tempranillo. 15 meses en barrica de roble francés y americano. Vista limpia, color cereza con ribete granate. Nariz: notas de fruta madura, caramelo y tostados. En boca es sedoso, con recuerdos de minerales, confitura y balsámicos, bien ensamblado.",
      "precio": "27€"
    },
    {
      "nombre": "Ulls Negres Crianza",
      "descripcion": "DO Empordà. 100% Garnacha. 12 meses en barrica de roble americano. Color cereza con reflejos de color teja. En nariz es muy franco, con notas a frutas maduras. En boca es graso y potente, con final largo y equilibrado con tanino suave.",
      "precio": "18,50€"
    },
    {
      "nombre": "Vino de la Casa Tapas Gaston Verdejo",
      "descripcion": "100% Verdejo. Color amarillo pálido con sutiles reflejos dorados. Aromas de piña, melocotón y cítricos junto a notas florales y de hinojo. Excelente entrada fresca, con acidez, fruta y frescura.",
      "precio": "16€ (Botella) / 3,95€ (Copa)"
    },
    {
      "nombre": "Pere Punyetes",
      "descripcion": "DO Penedès. 60% Muscat y 40% Xarel·lo. En nariz se despliegan aromas intensos de azahar y flores blancas, entrelazados con destellos de mango y piña. En boca, su textura sedosa y su amplitud se hacen presentes, llevándonos a un viaje por sabores de frutas maduras y un final ligeramente cítrico.",
      "precio": "18,50€"
    },
    {
      "nombre": "Marqués de Vizhoja",
      "descripcion": "Sin D.O. Tradicionales de procedencia nacional. Color amarillo pálido con una notas verdosas. Aroma fresco, fino y penetrante, con toques frutales. Ofrece un sabor equilibrado que recuerda a manzana y pera, con suaves notas cítricas.",
      "precio": "19,95€"
    },
    {
      "nombre": "Ullones Rosado",
      "descripcion": "DO Empordà. 100% Garnacha. Color rosa suave con reflejos grises. Desarrolla sutiles e inagotables aromas: pétalos de rosa, fresas, frambuesas y cerezas. Sensaciones de untuosidad y suavidad en boca. Encontramos balance, frescor, y en su desarrollo al paladar de nuevo una melosa untuosidad.",
      "precio": "17,95€"
    },
    {
      "nombre": "Oh Brut Nature",
      "descripcion": "DO Cava. Macabeo, Xarel·lo. Mínimo 15 meses en la cava. Atractivo color amarillo pálido brillante. Burbuja fina que forma una corona de espuma. Buena intensidad aromática, rico en aromas florales y afrutados que denotan personalidad. En boca es fresco, seco y afrutado. Conjunto equilibrado con buena persistencia.",
      "precio": "18€"
    }
]

};

export default function Carta() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Para compartir");
  const categories = Object.keys(menuItems) as MenuCategory[];

  return (
    <section
      id="carta"
      className="py-20 sm:py-28 bg-[#F9F6F1] px-4 sm:px-6 lg:px-8"
      aria-label="Carta Completa - El Racó de Huelva"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF8A] uppercase">
              Propuesta Culinaria Completa
            </span>
            <div className="h-px w-8 bg-[#D4AF8A]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F3F5C] mb-4">
            Carta
          </h2>
          <p className="text-base sm:text-lg text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed">
            Disfruta de nuestra selección gourmet de productos frescos
            directamente importados desde Huelva
          </p>
        </div>

        {/* Categorías - Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#E8704A] text-white shadow-lg"
                  : "bg-white text-[#0F3F5C] border-2 border-[#D4AF8A] hover:border-[#E8704A] hover:text-[#E8704A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ítems del menú */}
        <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          {menuItems[activeCategory].map((item, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-6 sm:pb-8 border-b border-[#D4AF8A]/30 last:border-0"
            >
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F3F5C] mb-2">
                  {item.nombre}
                </h3>
                <p className="text-sm sm:text-base text-[#3A3A3A]">
                  {item.descripcion}
                </p>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#E8704A] whitespace-nowrap sm:text-right">
                {item.precio}
              </div>
            </article>
          ))}
        </div>

        {/* Nota importante */}
        <div className="p-6 sm:p-8 bg-[#0F3F5C]/5 border-l-4 border-[#D4AF8A] rounded mb-12">
          <p className="text-sm sm:text-base text-[#3A3A3A] mb-3">
            <span className="font-semibold text-[#0F3F5C]">Consulte disponibilidad:</span> Todos nuestros productos
            son frescos y de temporada. Las disponibilidades pueden variar según la captura diaria.
            Recomendamos llamar con antelación para confirmar su plato favorito.
          </p>
          <p className="text-xs sm:text-sm text-[#3A3A3A] italic">
            * Disponemos de la carta con alérgenos, solicítela al camarero.<br />
            * Si dispone de alguna alergia o intolerancia, háganoslo saber.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            role="button"
            aria-label="Reserva tu mesa en El Racó de Huelva"
            className="inline-block w-full sm:w-auto bg-[#E8704A] hover:bg-[#D4764A] text-white px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
          >
            Reserva tu Mesa
          </a>
        </div>
      </div>
    </section>
  );
}