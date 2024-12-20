import { lazy } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import TitleComponent from "../../components/Titulo";
const Container = lazy(() => import("../../common/Container"));
const Card = lazy(() => import("../../components/cardNavegacion"));

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <TitleComponent text="Portal de Gestión Personal" />
      <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
        <Card
          imageSrc="/img/misdatos.png"
          title="Mis Datos"
          description="Edita la información relacionada a tus datos personales, datos de trabajo y datos familiares."
          buttonText="Presiona Aquí"
          onButtonClick={() => history.push("/mis-datos")} 
        />
        <Card
          imageSrc="/img/permisos.png"
          title="Mis Permisos"
          description="Solicite los permisos que requerirá en ciertas fechas, además observe los permisos que ha ido solicitando."
          buttonText="Presiona Aquí"
          onButtonClick={() => history.push("/permisos")} 
        />
        <Card
          imageSrc="/img/absentismos.png"
          title="Mis Absentismos"
          description="Solicite sus fechas de absentismos en ciertas fechas, además observe los absentismos que ha ido solicitando."
          buttonText="Presiona Aquí"
          onButtonClick={() => history.push("/absentismos")} 
        />
      </div>
    </Container>
  );
};

export default Home;

