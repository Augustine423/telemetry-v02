import ScheduleDetailsPage from "../features/dashboard/workmanage/pages/ScheduleDetailsPage";

import ScheduleRegisterPage from "../features/dashboard/workmanage/pages/ScheduleRegisterPage";
import SchedulPage from "../features/dashboard/workmanage/pages/SchedulPage";
const scheduleRoute = [
  {
    path: "schedule",
    element: <SchedulPage />,
  },
  {
    path: "schedule-detail/:id",
    element: <ScheduleDetailsPage />,
  },
{
  path: "schedule-register",
  element: <ScheduleRegisterPage />,
}
];

export default scheduleRoute;