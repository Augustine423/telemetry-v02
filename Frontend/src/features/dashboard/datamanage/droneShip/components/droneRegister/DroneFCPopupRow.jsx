import Link from "react-router-dom/Link";
import { Ellipsis } from "lucide-react";


const DroneFCPopupRow = () => {
  return (
    <tr  id="printArea" className="hover:bg-gray-100">
    <td className="px-4 py-3">
      <div className=" h-10 bg-gray-50 rounded flex items-center justify-center">
        <img
          src={company.coLogo}
          alt={company.coName}
          className="w-[69px] h-auto object-contain"
        />
      </div>
    </td>
    <td className="px-4 py-3 text-sm">{company.coName}</td>
    <td className="px-4 py-3 text-sm">{company.coRegisterNo}</td>
    <td className="px-4 py-3 text-sm">{company.coCountry}</td>
    <td className="px-4 py-3 text-sm">{company.coCeoName}</td>
    <td className="px-4 py-3 text-sm">{company.coTel}</td>

    <td className="px-4 py-3 text-sm">
      <Link
        to={`/dashboard/company-detail/${company.coId}`}
        className="text-gray-400 hover:text-gray-600"
      >
        <Ellipsis />
      </Link>
    </td>
  </tr>
  )
}

export default DroneFCPopupRow