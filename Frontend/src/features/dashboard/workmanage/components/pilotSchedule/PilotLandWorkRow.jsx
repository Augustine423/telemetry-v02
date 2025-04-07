import { Link } from "react-router-dom";
import { Ellipsis } from "lucide-react";
const PilotLandWorkRow = ({ pilot }) => {
  
    return (
      <>
        {pilot.landWork.map((work) => (
          <tr className="border " key={work.id}>
            <td className="text-center py-3">{work.pilot}</td>
            <td className="text-center py-3">{work.landWorkPeriod}</td>
            <td className="text-center py-3">{work.beLeftDay}</td>
            <td className="text-center py-3">
              <Link to={`/dashboard/work-detail/${work.id}`} className="text-gray-400 hover:text-blue-500"><Ellipsis /></Link>
            </td>
          </tr>
        ))}
      </>
    );
  };
  
  export default PilotLandWorkRow;
  