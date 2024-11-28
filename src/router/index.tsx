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
    { label: "Mis Permisos" },
    { label: "Mis Absentismos" },
  ];
  

 
  const [activeItem, setActiveItem] = useState(navItems[0].label);

  
  useEffect(() => {
    switch (location.pathname) {
      case "/mis-datos":
        setActiveItem("Mis Datos");
        break;
      case "/permisos":
        setActiveItem("Mis Permisos");
        break;
      case "/absentismos":
        setActiveItem("Mis Absentismos");
        break;
      default:
        setActiveItem("Menú");
        break;
    }
  }, [location.pathname]);
  

 
  const getImagesForSection = () => {
    switch (location.pathname) {
      case "/mis-datos":
        return [
          { src: '/img/ModalDatos/guia1.png', alt: 'Guía 1', description: 'Actualmente se encuentra en la pantalla de Mis Datos en donde actualizará los datos relacionados a usted, de trabajo o sobre su familia' },
          { src: '/img/ModalDatos/guia2.png', alt: 'Guía 2', description: 'En la parte superior tiene 3 opciones, Datos Personales, Datos de Trabajo y Datos de Familia. Sirven para dirigirse a llenar la información de cada seccion. Presione la opción a la que desea dirigirse' },
          { src: '/img/ModalDatos/guia3.png', alt: 'Guía 3', description: 'Al entrar en cualquier opcion disponible, se tiene una notificación que informa si se encuentra en el modo de solo ver los datos, en caso desea editar, debe de presionar el botón Editar. Además al hacerlo la notificación desaparecerá ya que ya podrá editar la información' },
          { src: '/img/ModalDatos/guia4.png', alt: 'Guía 4', description: 'En esta sección están los datos personales, donde podrá editar todo lo relacionado a sus nombres, apellidos, DNI, telefono y un número de emergencia' },
          { src: '/img/ModalDatos/guia5.png', alt: 'Guía 5', description: 'En esta sección está todo lo relacionado a datos de trabajo ya sea los bancos designados para los diferentes pagos, su ubicación de trabajo, además se busca conocer su talla de ropa y calzado' },
          { src: '/img/ModalDatos/guia6.png', alt: 'Guía 6', description: 'En esta sección se tienen los datos de familia nuclear, se muestra la información de su conyugue. En caso no tenga se mostrarán datos vacios, además se tiene un apartado de hijos en donde podrá registrar los hijos que tenga presionando el boton añadir' },
          { src: '/img/ModalDatos/guia7.png', alt: 'Guía 7', description: 'Al presionar el botón añadir aparecerá una sección donde llenará la información respecto a su hijo' },
        ];
      case "/permisos":
        return [
          { src: '/img/ModalPermisos/guia1.png', alt: 'Guía 1', description: 'Actualmente se encuentra en el apartado de permisos, en este podrá revisar los permisos que ha solicitado, ver el detallo de los que ya han sido aprobados o rechazados asi como tambien editar o cancelar solicitudes que ya ha realizado. Se presenta la opción de Nuevo Permiso para crear uno nuevo y está el botón de revisar solicitudes en donde podrá aprobar o rechazar las solicitudes que tiene a su cargo' },
          { src: '/img/ModalPermisos/guia2.png', alt: 'Guía 2', description: 'En la pantalla inicial verá los últimos permisos que ha solicitado, en donde se destacará un color verde si fue aprobado, color rojo si fue rechazado y color naranja si está pendiente de aprobación' },
          { src: '/img/ModalPermisos/guia3.png', alt: 'Guía 3', description: 'En los permisos aprobados o rechazados podrá ver el detalle de estos permisos presionando el botón Ver Detalle' },
          { src: '/img/ModalPermisos/guia4.png', alt: 'Guía 4', description: 'Al presionar Ver Detalle le aparecerá la información completa de su permiso solicitado' },
          { src: '/img/ModalPermisos/guia5.png', alt: 'Guía 5', description: 'En el caso de los Pendiente de aprobación tendrá 2 opciones, podrá editar su solicitud presionando el botón Editar solicitud y la opción de Cancelar Solicitud en caso haya sucedido algún imprevisto' },
          { src: '/img/ModalPermisos/guia6.png', alt: 'Guía 6', description: 'Al presionar Editar Solicitud tendrá está pantalla en donde podrá editar su información y cuando esté completo debe presionar Guardar Cambios, en caso no desee editar algo o no quiere que se guarde lo cambiado puede presionar Cancelar o Cerrar' },
          { src: '/img/ModalPermisos/guia7.png', alt: 'Guía 7', description: 'Aca se ve un ejemplo de la solicitud cambiada, siendo otra ahora la fecha de permiso' },
          { src: '/img/ModalPermisos/guia81.png', alt: 'Guía 81', description: 'Se tienen otras pantallas que aparecen al presionar Nuevo Permiso o Revisar Solicitudes' },
          { src: '/img/ModalPermisos/guia8.png', alt: 'Guía 8', description: 'Al presionar Nuevo Permiso le aparecerá un modal en donde puede registrar su permiso, además este colocará de forma automática la fecha actual como fecha de permiso así como su hora de entrada y salida de trabajo, esto lo puede modificar a su gusto dependiendo del permiso planeado' },
          { src: '/img/ModalPermisos/guia9.png', alt: 'Guía 9', description: 'Aca se vé un ejemplo de un nuevo permiso creado el cual automaticamente aparecé como Pendiente de Aprobación' },
          { src: '/img/ModalPermisos/guia10.png', alt: 'Guía 10', description: 'Al presionar Revisar Solicitudes podrá ver las solicitudes que está usted a cargo de responder, en este caso podrá aprobar o rechazar una por una cada solicitud o en todo caso puede seleccionar las que desee y aprobarlas o rechazarlas a la vez de forma más optima. Adicional a ello tiene un botón de Ver Detalle donde podrá ver más información del permiso' },
          { src: '/img/ModalPermisos/guia11.png', alt: 'Guía 11', description: 'Ejemplo al seleccionar todos los permisos' },
          { src: '/img/ModalPermisos/guia12.png', alt: 'Guía 12', description: 'Muestra del Detalle de una solicitud a revisar' },
          
        ];
      case "/absentismos":
        return [
          { src: '/img/ModalAbsentismos/guia1.png', alt: 'Guía 1', description: 'Actualmente se encuentra en el apartado de absentismos, en este podrá revisar los absentismos que ha solicitado, ver el detallo de los que ya han sido aprobados o rechazados asi como tambien editar o cancelar solicitudes que ya ha realizado. Se presenta la opción de Nuevo Absentismo para crear uno nuevo y está el botón de revisar solicitudes en donde podrá aprobar o rechazar las solicitudes que tiene a su cargo' },
          { src: '/img/ModalAbsentismos/guia2.png', alt: 'Guía 2', description: 'En la pantalla inicial verá los últimos absentismos que ha solicitado, en donde se destacará un color verde si fue aprobado, color rojo si fue rechazado y color naranja si está pendiente de aprobación' },
          { src: '/img/ModalAbsentismos/guia3.png', alt: 'Guía 3', description: 'En los absentismos aprobados o rechazados podrá ver el detalle de estos permisos presionando el botón Ver Detalle' },
          { src: '/img/ModalAbsentismos/guia4.png', alt: 'Guía 4', description: 'Al presionar Ver Detalle le aparecerá la información completa de su absentismo solicitado junto al documento que subió como evidencia' },
          { src: '/img/ModalAbsentismos/guia5.png', alt: 'Guía 5', description: 'En el caso de los Pendiente de aprobación tendrá 2 opciones, podrá editar su solicitud presionando el botón Editar solicitud y la opción de Cancelar Solicitud en caso haya sucedido algún imprevisto' },
          { src: '/img/ModalAbsentismos/guia6.png', alt: 'Guía 6', description: 'Al presionar Editar Solicitud tendrá está pantalla en donde podrá editar su información, subir un documento distinto en caso sea necesario y cuando esté completo debe presionar Guardar Cambios, en caso no desee editar algo o no quiere que se guarde lo cambiado puede presionar Cancelar o Cerrar' },
          { src: '/img/ModalAbsentismos/guia7.png', alt: 'Guía 7', description: 'Aca se ve un ejemplo de la solicitud cambiada, siendo otra ahora la fecha de retorno' },
          { src: '/img/ModalAbsentismos/guia81.png', alt: 'Guía 81', description: 'Se tienen otras pantallas que aparecen al presionar Nuevo Absentismo o Revisar Solicitudes' },
          { src: '/img/ModalAbsentismos/guia8.png', alt: 'Guía 8', description: 'Al presionar Nuevo Absentismos le aparecerá un modal en donde puede registrar su absentismo, además este colocará de forma automática la fecha actual como fecha de inicio y fecha de fin , esto lo puede modificar a su gusto dependiendo del absentismo planeado,además tiene un apartado para subir un documento' },
          { src: '/img/ModalAbsentismos/guia9.png', alt: 'Guía 9', description: 'Aca se vé un ejemplo de un nuevo absentismo creado el cual automaticamente aparecé como Pendiente de Aprobación' },
          { src: '/img/ModalAbsentismos/guia10.png', alt: 'Guía 10', description: 'Al presionar Revisar Solicitudes podrá ver las solicitudes que está usted a cargo de responder, en este caso podrá aprobar o rechazar una por una cada solicitud o en todo caso puede seleccionar las que desee y aprobarlas o rechazarlas a la vez de forma más optima. Adicional a ello tiene un botón de Ver Detalle donde podrá ver más información del absentismo' },
          { src: '/img/ModalAbsentismos/guia11.png', alt: 'Guía 11', description: 'Ejemplo al seleccionar todos los absentismos' },
          { src: '/img/ModalAbsentismos/guia12.png', alt: 'Guía 12', description: 'Muestra del Detalle de una solicitud a revisar' },
        ];
      default:
        return [
          { src: '/img/ModalHome/guia1.png', alt: 'Guía 1', description: 'Actualmente se encuentra en el menú principal, en este podrá observar a detalle las operaciones que puede realizar en este sistema.'  },
          { src: '/img/ModalHome/guia2.png', alt: 'Guía 2', description:  'En este apartado tiene una descripción detallada de las operaciones que puede realizar junto a una descripción de cada operación, adicional a ella tiene un botón de Presiona Aquí que lo dirigirá a la operación que ha seleccionado y podrá realizar lo que necesita' },
          { src: '/img/ModalHome/guia3.png', alt: 'Guía 3', description: 'Adicional a las descripciones de las operaciones se tiene una barra arriba en donde al presionarla puede dirigirse automaticamente a la opción escogida en caso ya sepa que es lo que realiza cada operación' },
        ];
    }
  };

  const handleItemSelect = (label: string) => {
    setActiveItem(label);
    if (label === "Mis Datos") {
      history.push("/mis-datos");
    } else if (label === "Menú") {
      history.push("/home");
    } else if (label === "Mis Permisos") {
      history.push("/permisos");
    } else if (label === "Mis Absentismos") {
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
        <FooterComponent images={getImagesForSection()} />
      </MainContainer>
    </Suspense>
  );
};

export default Router;
