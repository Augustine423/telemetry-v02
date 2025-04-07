import { Link } from "react-router-dom";
import { Ellipsis } from "lucide-react";
const PilotVacationRow = ({ pilot }) => {
  return (
    <>
      {pilot.vacation.map((work) => (
        <tr className="border " key={work.id}>
          <td className="text-center py-3">{work.pilot}</td>
          <td className="text-center py-3">{work.vacationPeriod}</td>
          <td className="text-center py-3">{work.beLeftDay}</td>
          <td className="text-center py-3">
            <Link to={`/dashboard/work-detail/${work.id}`}><Ellipsis /></Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default PilotVacationRow;
