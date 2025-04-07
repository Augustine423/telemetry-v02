import PilotOverViewPage from "../features/dashboard/workmanage/pages/WorkOverViewPage";
import PilotRegisterPage from "../features/dashboard/workmanage/pages/WorkRegisterPage";
import PilotDetailPage from "../features/dashboard/workmanage/pages/WorkDetailPage";
import WorkUpdatePage from "../features/dashboard/workmanage/pages/WorkUpdatePage"
const pilotoverviewRoute = [
  {
    path: "work-overview",
   element:<PilotOverViewPage/>

  },
  {
    path: "pilot-register",
   element:<PilotRegisterPage/>
   
  },
  {
    path:"work-detail/:id",
    element:<PilotDetailPage/>
  },
  {
    path:"work-edit/:id",
    element:<WorkUpdatePage/>
  }

];

export default pilotoverviewRoute;