import Dashboard from "views/Dashboard.js";
import UserPage from "views/UserPage.js";
import Schedule from "views/Schedule.js";

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
    icon: "nc-icon nc-single-02",
    component: Schedule
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
