// import React from 'react'

// const VesselEmptyStage = () => {
//   return (
//     <div>VesselEmptyStage</div>
//   )
// }

// export default VesselEmptyStage

import { Link } from "react-router-dom";

const VesselEmptyStage = () => {
  return (
    <tr className="  border-b dark:border-gray-700 ">
      <td colSpan={8} className="px-6 py-4 text-center">
        There is no Vessel .{" "}
        <Link
          to="/dashboard/vessel-register"
          className=" text-primary-700 underline"
        >
          Please create Vessel
        </Link>
      </td>
    </tr>
  );
};

export default VesselEmptyStage;