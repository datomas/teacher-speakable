import Dashboard from "layouts/Dashboard.js";
import Login from "components/Login.js";
import Logout from "components/Logout.js";

const indexRoutes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/", name: "Home", component: Dashboard, private:true },
];

export default indexRoutes;
