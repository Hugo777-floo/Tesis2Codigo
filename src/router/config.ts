const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/mis-datos",
    exact: true,
    component: "MisDatos",
  },
  {
    path: "/permisos",
    exact: true,
    component: "Permisos",
  },
];

export default routes;
