import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import RealTimeInfo from "../features/dashboard/control/components/RealTimeInfo";
import companyRoute from "./companyRoute";
import helpCenterRoute from "./helpCenterRoute";
import pilotoverviewRoute from "./pilotoverviewRoute";
import pilotRoute from "./pilotRoute";
import realTimeInfoRoute from "./RealTimeInfoRoute";
import reportlistRoute from "./reportlistRoute";
import vesselsRoute from "./vesselRoute";
import videoGalleryRoute from "./videoGalleryRoute";
import flightrecordRoute from "./flightrecordRoute";
import droneShipRoute from "./droneShipRoute";
import mechanicRoute from "./mechanicRoute";
import materialRoute from "./materialRoute";
import flightLogRoute from "./flightLogRoute";
import documentRoute from "./documentRoute";
import scheduleRoute from "./scheduleRoute";


const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true, // Redirect to RealTimeInfo after login
        element: <RealTimeInfo />,
      },
      ...realTimeInfoRoute,
      ...companyRoute,
      ...vesselsRoute,
      ...helpCenterRoute,
      ...reportlistRoute,
      ...pilotoverviewRoute,
      ...flightrecordRoute,
      ...pilotoverviewRoute ,
      ...videoGalleryRoute,
      ...pilotRoute,
      ...pilotoverviewRoute,
      ...droneShipRoute,
      ...mechanicRoute,
      ...materialRoute,
      ...flightLogRoute,  
      ...documentRoute,
      ...scheduleRoute
      
    ],
  },
];

export default dashboardRoute;
