import { MoreHorizontal } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MaterialListRow = ({
  material: { id, model, serialNo, manufacturer, useStatus, useTime },
}) => {
  console.log("material", id);
  return (
    <>
      <tr className=" border-b  hover:bg-gray-50">
        <td className="py-3 px-4 text-sm text-gray-700">{id}</td>
        <td className="py-3 px-4">
          <div className="w-16 h-12 bg-gray-100 rounded"></div>
        </td>
        <td className="py-3 px-4 text-sm text-gray-700">{model}</td>
        <td className="py-3 px-4 text-sm text-gray-700">{serialNo}</td>
        <td className="py-3 px-4 text-sm text-gray-700">{manufacturer}</td>
        <td className="py-3 px-4 text-sm text-gray-700">{useStatus}</td>
        <td className="py-3 px-4 text-sm text-gray-700">{useTime}</td>
        <td className="py-3 px-4 text-sm text-gray-700">
                    <Link to={`/dashboard/material-detail/${id}`} className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={16} />
                    </Link>
                  </td>
       
      </tr>
    </>
  );
};

export default MaterialListRow;
