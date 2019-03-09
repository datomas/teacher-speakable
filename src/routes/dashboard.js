import Dashboard from "views/Dashboard.js";
import UserPage from "views/UserPage.js";
import Schedule from "views/Schedule.js";
import Entities from "views/Entities.js"


const dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "nc-icon nc-calendar-60",
    component: Schedule
  },
  {
    path: "/entities",
    name: "entities",
    icon: "nc-icon nc-user",
    component: Entities
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
