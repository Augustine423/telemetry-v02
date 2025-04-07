import MechanicDetailPage from "../features/dashboard/datamanage/mechanic/pages/MechanicDetailPage";
import MechanicEditPage from "../features/dashboard/datamanage/mechanic/pages/MechanicEditPage";
import MechanicListPage from "../features/dashboard/datamanage/mechanic/pages/MechanicListPage";
import MechanicRegisterPage from "../features/dashboard/datamanage/mechanic/pages/MechanicRegisterPage";



const mechanicRoute = [
  {
    path: "mechanic-overview",
    element: <MechanicListPage/>,
  },

  {
    path: "mechanic-register",
    element: <MechanicRegisterPage />,
  },
  {
    path: "mechanic-detail/:id",
    element: <MechanicDetailPage />,
  },
  {
    path: "mechanic-edit/:id",
    element: <MechanicEditPage />,
  },


];

export default mechanicRoute;
