import Image from "next/image";
import Reveal from "../components/Reveal";

const navegacion = [
  { label: "Galería de platos", href: "#galeria" },
  { label: "Carta completa", href: "#carta" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto y reservas", href: "#contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-crema px-5 pt-20 sm:px-6 lg:px-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-1 gap-x-14 gap-y-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div className="flex flex-col">
              <Image
                src="/logo.png"
                alt="Logo El Racó de Huelva"
                width={62}
                height={62}
                className="h-15.5 w-15.5 object-contain"
              />
              <span className="mt-5 font-display text-[26px] leading-[1.25] text-marino">
                El Racó de Huelva
              </span>
              <p className="mt-3.5 max-w-80 text-[15px] leading-[1.7] text-tinta">
                Marisco fresco traído directamente desde Huelva y Sanlúcar, cocinado con
                producto y sin atajos.
              </p>
              <div className="mt-6.5 flex gap-3">
                <a
                  href="https://www.instagram.com/racodehuelva/"
                  aria-label="Síguenos en Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10.5 w-10.5 items-center justify-center border border-bronce/45 text-marino transition-[background-color,color,border-color,transform] duration-[260ms] ease-[var(--ease-suave)] hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-white"
                >
                  <svg
                    className="h-4.5 w-4.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Elracodehuelva/"
                  aria-label="Síguenos en Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10.5 w-10.5 items-center justify-center border border-bronce/45 text-marino transition-[background-color,color,border-color,transform] duration-[260ms] ease-[var(--ease-suave)] hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-white"
                >
                  <svg
                    className="h-4.5 w-4.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V11H5.5v4H8v6h4v-6h3l.5-4H12V7.6c0-.7.4-1.1 1.2-1.1H15z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-semibold tracking-[0.26em] text-bronce uppercase">
                Contacto
              </span>
              <a
                href="tel:+34658890607"
                className="mt-5.5 text-[15px] text-marino tabular-nums transition-colors duration-[220ms] hover:text-coral"
              >
                658 89 06 07
              </a>
              <a
                href="https://wa.me/34658890607?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20mesa%20en%20El%20Rac%C3%B3%20de%20Huelva."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[15px] text-tinta transition-colors duration-[220ms] hover:text-coral"
              >
                WhatsApp
              </a>
              <address className="mt-3.5 text-[15px] leading-[1.75] text-tinta not-italic">
                Carrer Roger de Llúria, 7
                <br />
                08100 Mollet del Vallès
                <br />
                Barcelona
              </address>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-semibold tracking-[0.26em] text-bronce uppercase">
                Horario
              </span>
              <div className="mt-5.5 flex flex-col gap-3 text-[15px] leading-[1.6] text-tinta">
                <span>
                  Miércoles a domingo
                  <br />
                  13:00 – 16:00
                </span>
                <span>
                  Viernes y sábado
                  <br />
                  20:30 – 23:30
                </span>
                <span className="text-coral">Lunes y martes cerrado</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-semibold tracking-[0.26em] text-bronce uppercase">
                Navegación
              </span>
              <nav className="mt-5.5 flex flex-col gap-3.5" aria-label="Navegación del pie">
                {navegacion.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[15px] text-tinta transition-colors duration-[220ms] hover:text-coral"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-bronce/35 py-6.5 sm:flex-row">
          <span className="text-[13px] text-tinta/80">
            © {currentYear} El Racó de Huelva. Todos los derechos reservados.
          </span>
          <span className="text-[11px] tracking-[0.2em] text-bronce uppercase">
            Mollet del Vallès · Barcelona
          </span>
        </div>
      </div>
    </footer>
  );
}
