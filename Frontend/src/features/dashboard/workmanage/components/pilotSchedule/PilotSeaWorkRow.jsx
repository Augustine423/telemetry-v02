import { Link } from "react-router-dom";
import { Ellipsis } from "lucide-react";
const PilotOverviewRow = ({pilot}) => {
  return (
   
  <>
  {pilot.seaWork.map((work)=>(
    <tr className="border " key={work.id}>
    <td className="text-center py-3">{work.pilot}</td>
    <td className="text-center py-3">{work.boardingPeriod}</td>
    <td className="text-center py-3">{work.boardDays}</td>
    <td className="text-center py-3">{work.vacationDays}</td>
    <td className="text-center py-3">{work.landDays}</td>
    <td className="text-center py-3">
      <Link to={`/dashboard/work-detail/${work.id}`}><Ellipsis /></Link>
    </td>
  </tr>
  ))}
  
  </>
  )
}

export default PilotOverviewRow