import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Carta from "./Carta/Carta";
// import MenuDiario from "./MenuDiario/MenuDiario";
import Contact from "./Contacto/Contacto";
import Footer from "./Footer/Footer";
import Opiniones from "./Opiniones/Opiniones";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Gallery />
        {/* Alternancia oscuro / claro. Si se reactiva el menú del día,
            que es oscuro, va aquí: entre Galería y Opiniones no rompe
            el ritmo, pero entre las dos secciones crema sí. */}
        {/* <MenuDiario /> */}
        <Opiniones />
        <Carta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
