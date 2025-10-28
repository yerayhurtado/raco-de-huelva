import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Carta from "./Carta/Carta";
import MenuDiario from "./MenuDiario/MenuDiario";
import Contact from "./Contacto/Contacto";
import Footer from "./Footer/Footer";
import Opiniones from "./Opiniones/Opiniones";
import MenusGrupo from "./MenuGrupo/MenuGrupo";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Opiniones />
      <Carta />      
      <MenuDiario />
      <MenusGrupo />
      <Contact />
      <Footer />
    </>
  );
}
