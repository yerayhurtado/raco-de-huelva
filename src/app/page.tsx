import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Carta from "./Carta/Carta";
// import MenuDiario from "./MenuDiario/MenuDiario";
import Contact from "./Contacto/Contacto";
import Footer from "./Footer/Footer";
import Opiniones from "./Opiniones/Opiniones";
import BarraMovil from "./components/BarraMovil";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Gallery />
        {/* El orden sigue lo que la gente viene a buscar: la carta es el
            contenido más pedido de la web de un restaurante, y las reseñas
            tranquilizan justo después de ver los precios. La alternancia
            oscuro / claro la lleva el fondo de cada sección, no el orden. */}
        {/* <MenuDiario /> */}
        <Carta />
        <Opiniones />
        <Contact />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
