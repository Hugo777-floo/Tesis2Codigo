import { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
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
  const location = useLocation();
  const navItems = [
    { label: "Menú" },
    { label: "Mis Datos" },
    { label: "Permisos" },
    { label: "Absentismos" },
  ];

  // Estado para el elemento activo
  const [activeItem, setActiveItem] = useState(navItems[0].label);

  // Actualiza el elemento activo basado en la ruta actual
  useEffect(() => {
    switch (location.pathname) {
      case "/mis-datos":
        setActiveItem("Mis Datos");
        break;
      case "/permisos":
        setActiveItem("Permisos");
        break;
      case "/absentismos":
        setActiveItem("Absentismos");
        break;
      default:
        setActiveItem("Menú");
        break;
    }
  }, [location.pathname]);

  const handleItemSelect = (label: string) => {
    setActiveItem(label);
    if (label === "Mis Datos") {
      history.push("/mis-datos");
    } else if (label === "Menú") {
      history.push("/home");
    } else if (label === "Permisos") {
      history.push("/permisos");
    } else if (label === "Absentismos") {
      history.push("/absentismos");
    }
  };

  return (
    <Suspense fallback={null}>
      <Styles />
      <MainContainer>
        <NavBar items={navItems} activeItem={activeItem} onItemSelect={handleItemSelect} />
        <Content>
          <Switch>
            {routes.map((routeItem) => (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(() => import(`../pages/${routeItem.component}`))}
              />
            ))}
          </Switch>
        </Content>
        <FooterComponent />
      </MainContainer>
    </Suspense>
  );
};

export default Router;
