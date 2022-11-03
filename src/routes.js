// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import home from "./assets/img/menu/home.png"
import myaccount from "./assets/img/menu/myaccount.png"
import betting from "./assets/img/menu/betting.png"
import withdraw from "./assets/img/menu/withdraw.png"
import support from "./assets/img/menu/support.png"


var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: <img src={home}/>,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/myAccount",
    name: "My Account",
    rtlName: "لوحة القيادة",
    icon: <img src={myaccount}/>,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/betting",
    name: "Betting",
    rtlName: "لوحة القيادة",
    icon: <img src={betting}/>,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/withdraw",
    name: "Withdraw",
    rtlName: "لوحة القيادة",
    icon: <img src={withdraw}/>,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/support",
    name: "Support",
    rtlName: "لوحة القيادة",
    icon: <img src={support}/>,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        // icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        // icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        // icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
