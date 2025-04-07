import DroneDetailPage from "../features/dashboard/datamanage/droneShip/pages/DroneDetailPage";
import DroneEditPage from "../features/dashboard/datamanage/droneShip/pages/DroneEditPage";
import DroneListPage from "../features/dashboard/datamanage/droneShip/pages/DroneListPage";
import DroneRegisterPage from "../features/dashboard/datamanage/droneShip/pages/DroneRegisterPage";



const droneShipRoute = [
  {
    path: "drone-overview",
    element: <DroneListPage />,
  },

  {
    path: "drone-register",
    element: <DroneRegisterPage />,
  },
  {
    // path: "drone-detail/:id",
    path: "drone-detail",
    element: <DroneDetailPage />,
  },
  {
    path: "drone-edit/:id",
    element: <DroneEditPage />,
  },


];

export default droneShipRoute;
