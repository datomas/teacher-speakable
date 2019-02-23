import Dashboard from "layouts/Dashboard.js";
import Login from "components/Login.js";

const indexRoutes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Home", component: Dashboard },
];

export default indexRoutes;
