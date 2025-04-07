
import FlightLogListPage from "../features/dashboard/flightLog/flightLog/pages/FlightLogListPage";
import FlightLogRegisterPage from "../features/dashboard/flightLog/flightLog/pages/FlightLogRegisterPage";


const flightLogRoute = [
  {
    path: "flightLog-overview",
    element: <FlightLogListPage/>,
  },

  {
    path: "flightLog-register",
    element: <FlightLogRegisterPage />,
  }


];

export default flightLogRoute;
