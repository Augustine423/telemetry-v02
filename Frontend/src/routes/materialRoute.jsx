import MaterialDetailPage from "../features/dashboard/datamanage/material/pages/MaterialDetailPage";
import MaterialEditPage from "../features/dashboard/datamanage/material/pages/MaterialEditPage";
import MaterialListPage from "../features/dashboard/datamanage/material/pages/MaterialListPage";
import MaterialRegisterPage from "../features/dashboard/datamanage/material/pages/MaterialRegisterPage";


const materialRoute = [
  {
    path: "material-overview",
    element: <MaterialListPage />,
  },

  {
    path: "material-register",
    element: <MaterialRegisterPage />,
  },
  {
    path: "material-detail/:id",
    element: <MaterialDetailPage />,
  },
  {
    path: "material-edit/:id",
    element: <MaterialEditPage />,
  },


];

export default materialRoute;
