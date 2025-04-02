
import VesselDashboardListPage from "../features/dashboard/datamanage/shipVessels/pages/VesselDashboardListPage";
import VesselDetailPage from "../features/dashboard/datamanage/shipVessels/pages/VesselDetailPage";
import VesselRegisterPage from "../features/dashboard/datamanage/shipVessels/pages/VesselRegisterPage";



const vesselsRoute=[
   
       
          {
            path: "vessel-register",
            element: <VesselRegisterPage/>
          },
          {
            path: "vessel-overview",
            element: <VesselDashboardListPage/>,
          },
         
         
          {
            path: "vessel-detail/:id",
            element: <VesselDetailPage />,
          }
        ]
 


export default vesselsRoute;