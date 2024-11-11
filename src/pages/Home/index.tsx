import { lazy } from "react";
import styled from "styled-components";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import TitleComponent from "../../components/Titulo";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Card = lazy(() => import("../../components/cardNavegacion"));



const Home = () => {
  return (
    <Container>

      <TitleComponent text="Sistema Autogestionable" />
       
      <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
        <Card
          imageSrc="/img/misdatos.png"
          // Coloca aquí la ruta de la imagen
          title="Mis Datos"
          description="Edita la información relacionada a tus datos personales, datos de trabajo y datos familiares."
          buttonText="Presiona Aquí"
          onButtonClick={() => alert("Mis Datos")}
        />
        <Card
          imageSrc="/img/permisos.png" // Coloca aquí la ruta de la imagen
          title="Permisos"
          description="Solicite los permisos que requerirá en ciertas fechas, además observe los permisos que ha ido solicitando."
          buttonText="Presiona Aquí"
          onButtonClick={() => alert("Permisos")}
        />
        <Card 
          imageSrc="/img/absentismos.png" // Coloca aquí la ruta de la imagen
          title="Absentismos"
          description="Solicite sus fechas de absentismos en ciertas fechas, además observe los absentismos que ha ido solicitando."
          buttonText="Presiona Aquí"
          onButtonClick={() => alert("Absentismos")}
        />
      </div>
    </Container>
  );
};

export default Home;
