import { lazy, Suspense, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/BarraNavegacion";
import FooterComponent from "../components/ayudaGuia";
import routes from "./config";
import { Styles } from "../styles/styles";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Router = () => {
  const history = useHistory();
  const navItems = [
    { label: "Menú" },
    { label: "Mis Datos" },
    { label: "Permisos" },
    { label: "Absentismos" },
  ];

  // Estado para el elemento activo
  const [activeItem, setActiveItem] = useState(navItems[0].label);

  // Maneja la selección de un elemento del NavBar
  const handleItemSelect = (label: string) => {
    setActiveItem(label);
    if (label === "Mis Datos") {
      history.push("/mis-datos");
    } else if (label === "Menú") {
      history.push("/home");
    }else if (label === "Permisos") {
      history.push("/permisos");
    }
    
    // Puedes agregar lógica para redirigir o cambiar de página si es necesario
  };

  return (
    <Suspense fallback={null}>
      <Styles />
      {/* Reemplaza Header por NavBar y pasa las props necesarias */}
      <MainContainer>
      <NavBar items={navItems} activeItem={activeItem} onItemSelect={handleItemSelect} />
      <Content>
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      </Content>
      <FooterComponent />
      </MainContainer>
    </Suspense>
  );
};

export default Router;
