
import PilotOverViewHeader from "../components/pilotSchedule/PilotOverViewHeader";
import PilotOverviewTable from "../components/pilotSchedule/PilotOverviewTable";
import PilotSeaWorkTable from "../components/pilotSchedule/PilotSeaWorkTable";
import PilotVacationTable from "../components/pilotSchedule/PilotVacationTable";
import PilotLandWorkTable from "../components/pilotSchedule/PilotLandWorkTable";
const PilotOverViewPage = () => {
  return (
    <div className="container mx-auto px-4">
      <PilotOverViewHeader/>
        <PilotOverviewTable/>
        <PilotSeaWorkTable/>
        <PilotVacationTable/>
        <PilotLandWorkTable/>
    </div>
  )
}

export default PilotOverViewPage;