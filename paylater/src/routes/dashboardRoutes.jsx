// import Users from "views/Users/User";
// import UserEdit from "views/Users/UserEdit";
import Dashboard from "views/app/DashBoard";
import CariAgen from "views/app/CariAgen";
import DaftarAgen from "views/app/DaftarAgen";
import Balance from "views/app/Balance";
import Report from "views/app/Report";
import AgenTransaction from "views/app/AgenTransaction";
import Pinjaman from "views/app/Pinjaman";
import GantiPassword from "views/app/GantiPassword";

const dashboardRoutes = [
  // { path: "/users", component: Users },
  { path: "/home", component: Dashboard },
  { path: "/cariagen", component: CariAgen},
  { path: "/daftaragen", component: DaftarAgen},
  { path: "/balance", component: Balance},
  // { path: "/report", component: Report},
  { path: "/transaction", component: AgenTransaction},
  // { path: "/pinjaman", component: Pinjaman},
  { path: "/gantipassword", component: GantiPassword}
  // { path: "/users/add", component: UserEdit },
  // { path: "/users/edit/:id", component: UserEdit }
];

export default dashboardRoutes;