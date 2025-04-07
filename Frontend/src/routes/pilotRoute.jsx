import PilotDashboardListPage from "../features/dashboard/datamanage/pilot/pages/PilotDashboardListPage";
import PilotDetailPage from "../features/dashboard/datamanage/pilot/pages/PilotDetailPage";
import PilotRegisterPage from "../features/dashboard/datamanage/pilot/pages/PilotRegisterPage";




const pilotRoute=[
          {
            path: "pilot-register",
            element: <PilotRegisterPage/>
          },
          {
            path: "pilot-overview",
            element: <PilotDashboardListPage/>,
          },
          {
            path: "pilot-detail/:id",
            element: <PilotDetailPage/>,
          }
        ]
 


export default pilotRoute;