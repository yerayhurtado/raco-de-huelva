"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9F6F1] border-t-2 border-[#D4AF8A]/30">
      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Columna 1: Info del Restaurante */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3F5C] mb-4">
              El Racó de Huelva
            </h3>
            <p className="text-sm text-[#3A3A3A] leading-relaxed mb-4">
              Mariscos frescos importados directamente de Huelva. 
              Calidad y sabor en cada plato.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/racodehuelva/"
                aria-label="Síguenos en Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0F3F5C]/10 hover:bg-[#E8704A] border border-[#D4AF8A]/30 hover:border-[#E8704A] rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#0F3F5C] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Elracodehuelva/"
                aria-label="Síguenos en Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0F3F5C]/10 hover:bg-[#E8704A] border border-[#D4AF8A]/30 hover:border-[#E8704A] rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#0F3F5C] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Contacto Rápido */}
          <div>
            <h4 className="text-lg font-bold text-[#0F3F5C] mb-4 flex items-center gap-2">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-[#3A3A3A]">
              <a 
                href="tel:+34658890607"
                className="block hover:text-[#E8704A] transition-colors duration-200 font-semibold"
              >
                +34 658 89 06 07
              </a>
              <address className="not-italic leading-relaxed">
                Carrer Roger de Llúria, 7<br />
                08100 Mollet del Vallès<br />
                Barcelona, España
              </address>
            </div>
          </div>

          {/* Columna 3: Horarios */}
          <div>
            <h4 className="text-lg font-bold text-[#0F3F5C] mb-4 flex items-center gap-2">
              Horarios
            </h4>
            <div className="space-y-2 text-sm text-[#3A3A3A]">
              <div>
                <p className="font-semibold text-[#0F3F5C]">Miercoles - Domingo</p>
                <p>13:00 - 16:00</p>
                <p className="font-semibold text-[#0F3F5C]">Viernes - Sabado (Noche):</p>
                <p>20:30 - 23:30</p>
              </div>
              <div className="pt-2 border-t border-[#D4AF8A]/30">
                <p className="font-semibold text-[#E8704A]">Lunes y Martes: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Columna 4: Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold text-[#0F3F5C] mb-4">
              Navegación
            </h4>
            <nav className="space-y-2 text-sm">
              <a 
                href="#menu"
                className="block text-[#3A3A3A] hover:text-[#E8704A] transition-colors duration-200"
              >
                Menú del Día
              </a>
              <a 
                href="#menus-grupo"
                className="block text-[#3A3A3A] hover:text-[#E8704A] transition-colors duration-200"
              >
                Menús de Grupo
              </a>
              <a 
                href="#carta"
                className="block text-[#3A3A3A] hover:text-[#E8704A] transition-colors duration-200"
              >
                Carta Completa
              </a>
              <a 
                href="#galeria"
                className="block text-[#3A3A3A] hover:text-[#E8704A] transition-colors duration-200"
              >
                Galería de Platos
              </a>
              <a 
                href="#contacto"
                className="block text-[#3A3A3A] hover:text-[#E8704A] transition-colors duration-200"
              >
                Contacto y Reservas
              </a>
            </nav>
          </div>

        </div>
      </div>

      {/* Barra inferior - Copyright */}
      <div className="border-t border-[#D4AF8A]/30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-[#3A3A3A]">
              © {currentYear} <span className="font-semibold text-[#0F3F5C]">El Racó de Huelva</span>. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}