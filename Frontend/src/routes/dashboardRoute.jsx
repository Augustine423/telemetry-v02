import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import RealTimeInfo from "../features/dashboard/control/components/RealTimeInfo";
import companyRoute from "./companyRoute";
import helpCenterRoute from "./helpCenterRoute";
import pilotoverviewRoute from "./pilotoverviewRoute";
import realTimeInfoRoute from "./RealTimeInfoRoute";
import reportlistRoute from "./reportlistRoute";
import vesselsRoute from "./vesselRoute";
import videoGalleryRoute from "./videoGalleryRoute";

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
      ...pilotoverviewRoute ,
      ...videoGalleryRoute,
    ],
  },
];

export default dashboardRoute;
