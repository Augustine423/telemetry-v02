import ReportListPage from "../features/dashboard/workmanage/pages/ReportListPage";
import ReportDetailPage from "../features/dashboard/workmanage/pages/ReportDetailPage";
import WorkReportRegisterPage from "../features/dashboard/workmanage/pages/WorkReportRegisterPage";
import ReportPage from "../features/dashboard/workmanage/pages/ReportPage";



const reportlistRoute = [
  {
    path: "report-overview",
   element:<ReportListPage/>
  },
  {
    path:"report-detail/:id",
    element:<ReportDetailPage/>
  },
  {
    path:"report-register",
    element:<ReportPage/>
  }
];

export default reportlistRoute;