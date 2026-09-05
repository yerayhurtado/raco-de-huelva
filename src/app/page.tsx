import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Carta from "./Carta/Carta";
import MenuDiario from "./MenuDiario/MenuDiario";
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
        {/* El menu del dia es lo que mas citan las reseñas; estaba apagado. */}
        <MenuDiario />
        <Carta />
        <Opiniones />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
