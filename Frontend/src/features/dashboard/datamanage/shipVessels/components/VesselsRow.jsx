


import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const VesselsRow = ({ vessel }) => {

  console.log(vessel)

  return (
    <>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-3">
          <div className=" h-10 bg-gray-50 rounded flex items-center justify-center">
            <img
                // eslint-disable-next-line react/prop-types
                src={vessel.image}
              alt={vessel.coName}
              className="w-[69px] h-auto object-contain"
            />
          </div>
        </td>
        <td className="px-4 py-3 text-sm">{vessel.shipName}</td>
        <td className="px-4 py-3 text-sm">{vessel.shipCountry}</td>
        <td className="px-4 py-3 text-sm">{vessel.shipImono}</td>
        <td className="px-4 py-3 text-sm">{vessel.shipMmsi}</td>
        <td className="px-4 py-3 text-sm">{vessel.shipCallSign}</td>

        <td className="px-4 py-3 text-sm">
          <Link
            to={`/dashboard/vessel-detail/${vessel.shipId}`}
            className="text-gray-400 hover:text-gray-600"
          >
            <Ellipsis />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default VesselsRow;
