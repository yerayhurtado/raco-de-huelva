import Reveal from "../components/Reveal";

const primeros = [
  "Sopa de pescado y marisco",
  "Lentejas caviar con chips de boniato",
  "Bacalao dorado con cebolla y huevo",
  "Mejillones en salsa picante",
  "Barquita del Racó, ensalada mézclum y queso de cabra",
  "Trinxat de la Cerdanya y mussaka de carne",
  "Rollitos de berenjena con hummus",
  "Esqueixada de bacalao con tierra de olivada",
  "Fritura de verduras con miel de caña",
];

const segundos = [
  "Galta al vino confitada a baja temperatura, aromatizada con cacao",
  "Careta confitada a baja temperatura, a la gallega con emulsión de patata",
  "Secreto o lagarto a la brasa",
  "Tortilla abierta de chistorra y manzana",
  "Albóndigas con tomate, caseras de la chef",
  "Huevos estrellados con butifarra de perol",
  "Lubina al horno con ajos confitados",
  "Bacalao a la miel",
  "El Bronceado, salmón con tierra de pistacho",
  "Arroz caldoso de bogavante, todos los jueves",
];

const incluye = [
  { que: "Incluye", detalle: "Pan artesanal" },
  { que: "Postre", detalle: "Selección del día" },
  { que: "Bebida", detalle: "Agua o vino Rioja" },
];

const PRECIO = "17,95 €";

export default function MenuDiario() {
  return (
    <section
      id="menu"
      className="bg-marino-oscuro px-5 py-24 sm:px-6 sm:py-32 lg:px-28"
      aria-label="Menú del día - El Racó de Huelva"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,5.5vw,3.875rem)] leading-[1.1] text-arena-clara">
              Menú del día
            </h2>
          </Reveal>

          <Reveal delay={90} className="mt-6">
            <p className="mx-auto max-w-[35rem] text-base leading-[1.75] text-crema/80 text-pretty sm:text-[17px]">
              Dos platos a elegir de la misma cocina que la carta, de miércoles a viernes
              al mediodía.
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-10">
            <p className="font-display text-[clamp(3.5rem,9vw,5rem)] leading-none text-coral-claro tabular-nums">
              {PRECIO}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-19 gap-y-14 lg:grid-cols-2">
          <Reveal delay={240}>
            <h3 className="border-b border-arena/35 pb-4 text-[10px] font-semibold tracking-[0.26em] text-arena uppercase">
              Primeros
            </h3>
            <ul className="flex flex-col">
              {primeros.map((plato) => (
                <li
                  key={plato}
                  className="border-b border-arena/15 py-4 text-[15px] leading-[1.6] text-crema/90 last:border-0"
                >
                  {plato}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <h3 className="border-b border-arena/35 pb-4 text-[10px] font-semibold tracking-[0.26em] text-arena uppercase">
              Segundos
            </h3>
            <ul className="flex flex-col">
              {segundos.map((plato) => (
                <li
                  key={plato}
                  className="border-b border-arena/15 py-4 text-[15px] leading-[1.6] text-crema/90 last:border-0"
                >
                  {plato}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-19">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-8 border-y border-arena/35 py-9 sm:grid-cols-3">
            {incluye.map((fila) => (
              <div key={fila.que} className="flex flex-col gap-2.5">
                <dt className="text-[10px] font-semibold tracking-[0.26em] text-arena uppercase">
                  {fila.que}
                </dt>
                <dd className="font-display text-xl text-arena-clara">{fila.detalle}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <p className="text-center text-sm leading-[1.7] text-crema/70">
            Servicio tupper: llévate lo que no te acabes por 1 € más.
          </p>
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
              aria-label="Llamar a El Racó de Huelva para reservar el menú del día"
              className="flex h-14 w-full items-center justify-center bg-coral px-10 text-xs font-semibold tracking-[0.19em] text-white uppercase transition-[background-color,transform] duration-200 hover:bg-coral-fuerte active:scale-[0.975] sm:w-auto"
            >
              Reservar mesa
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
