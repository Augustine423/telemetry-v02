import React from 'react'
import { Link , useLocation} from "react-router-dom";

const WorkEditHeader = () => {

    const location = useLocation();
    const isWorkEdit = location.pathname.match(/\/dashboard\/work-edit\/\d+/);
  return (
    <div className="flex gap-8 pt-6 px-8 pb-4">
        <Link
          to="/dashboard/work-overview"
          className={`pb-3 text-lg font-medium transition-all ${
            location.pathname === "/dashboard/work-overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview

        </Link>
        <Link
          to="/dashboard/work-edit/:id"
          className={`pb-3 text-lg font-medium transition-all ${
            isWorkEdit
            ? "text-primary border-b-4 border-primary font-semibold"
            : "text-gray-500 hover:text-primary"
          }`}
        >
          Work Schedule Edit
        </Link>
      </div>
  )
}

export default WorkEditHeader