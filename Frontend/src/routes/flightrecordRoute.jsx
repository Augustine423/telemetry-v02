import FlightRecordPage from "../features/dashboard/workmanage/pages/FlightRecordPage";
import FlightRecordDetails from "../features/dashboard/workmanage/pages/FlightRecordDetailPage";
import FlightCountPage from "../features/dashboard/workmanage/components/FlightCount";
import PreFlightPage from "../features/dashboard/workmanage/components/PreFlight";
const flightrecordRoute = [
  {
    path: "flightrecord",
    element: <FlightRecordPage />,
  },
  {
    path: "flightrecorddetail/:id",
    element: <FlightRecordDetails />,
  },
  {
    path: "flightcount",
    element: <FlightCountPage />,
  },
  {
    path: "preflight",
    element: <PreFlightPage />,
  }
];

export default flightrecordRoute;