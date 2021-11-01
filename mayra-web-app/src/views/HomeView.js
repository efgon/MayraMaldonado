import NavBar from "../components/NavBar";
import Header from "../components/Header";
import PicBody from "../components/PicBody";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";
import profilePic from "../img/image44.jpeg";
import bookPic from "../img/Diseno-sin-titulo.png";
import bookPic2 from "../img/coming soon amarillo.png";
// import headerPic from "../img/valores IMAGEN.jpg";
// import bookPic3 from "../img/IMG_E4213.JPG";
// import talleresPic from "../img/carpic2.jpeg";
// import tutoriasPic from "../img/AdobeStock_47186368.jpeg";
// import BodyPic from "../components/BodyPic";
import MisionVision from "../components/MisionVision";
import Publicaciones from "../components/Publicaciones";
import QueOfrecemos from "../components/QueOfrecemos";

function HomeView() {
  return (
    <div className="App home">
      <NavBar />

      <Header text="Valores Familiares-Empresariales" />
      <PicBody
        src={profilePic}
        text2=""
        title=""
        text1="Nos dedicamos a educar y reeducar sobre valores. Las buenas formas de vivir, tratar y esperar que con el ejemplo otros aprendan la ética de la sana convivencia. Llevamos nuestra educación con publicaciones, talleres y más."
      />
      <MisionVision
        title="Misión:"
        text1="Reeducar y educar sobre valores: "
        text2="Las formas de tratarse en familia."
        text3="Trato a comunidades, amistades, personas conocidas y no conocidas."
        text4="Comportamiento en diferentes lugares (hogar, vecinos, trabajos…)"
        title2="Objetivo:"
        text5="Que las familias eduquen y ofrezcan el mejor ejemplo a sus menores y jóvenes."
        text6=" Que todos se traten con valores como son el respeto, amor, dignidad, tolerancia… "
      />

      <Publicaciones
        containerTitle="Publicaciones: "
        src={bookPic}
        // title="Hoy... Porque Mañana Podria Ser Tarde"
        text1="Ayer era hoy y... ayer prometía ser mañana ... Hoy hablaremos de lo que hicimos ayer y de lo que haremos hoy y quizás mañana ... Si no se pudo ayer y tampoco hoy, lo intentaremos después... Tratemos no dejar lo que queremos hacer hoy... "
        src2={bookPic2}
        title2="Desarrolla tu 'Pazciencia'"
        text2="Coming Soon!"
      />

      <QueOfrecemos
        title1="¿Que Ofrecemos?"
        text2="Talleres"
        text3="Clases y Tutorías"
        text4="Conferencias"
        text9="Más"
        title5="¿Para Quién?"
        text6="Para todo tipo de Familia"
        text7="Familia Convencional"
        text8="Familia Directa e indirecta"
        text10="Familia Empresarial"
      />
      {/* <PicCarousel /> */}
      <FollowMe />
      <Footer />
    </div>
  );
}
export default HomeView;
