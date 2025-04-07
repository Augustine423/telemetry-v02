

import { Download, Ellipsis, Mail } from "lucide-react"
import { Link } from "react-router-dom"


const FlightLogListRow = ({mechanic}) => {
  return (
    <>
    <tr id="printArea" className="hover:bg-gray-100 border-b">
      {/* Occurrence Time */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap ">
        2025. 2. 11{mechanic.mechanicName}
      </td>
  
      {/* No */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        101
      </td>
  
      {/* File Name */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        text
      </td>
  
      {/* Author */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        David
      </td>
  
      {/* Date */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        2025.03.25
      </td>
  
      {/* Action Buttons */}
      <td className=" py-4 text-sm">
        <div className="flex justify-center items-center gap-6">
          {/* Mail Icon */}
          <Mail className="size-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
  
          {/* Download Icon */}
          <Download className="size-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
  
          {/* Details Link */}
          <Link
            to={`/dashboard/mechanic-detail/${mechanic.mechanicId}`}
            className="text-gray-400 hover:text-gray-600"
          >
            <Ellipsis className="size-6" />
          </Link>
        </div>
      </td>
    </tr>
  </>
  
  )
}

export default FlightLogListRow