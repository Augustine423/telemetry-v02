import React from 'react'
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const ReportRegisterHeader = () => {
     const location = useLocation();
      const selectedItem = useSelector((state) => state.selectedItem); // Global state
  return (
    <div>
         <div className="flex gap-8 pt-6 px-8 pb-4">
        <Link
          to="/dashboard/report-overview"
          className={`pb-3 text-lg font-medium transition-all ${
            location.pathname === "/dashboard/report-overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview
        </Link>
        <Link
          to="/dashboard/report-register"
          className={`pb-3 text-lg font-medium transition-all ${
            location.pathname === "/dashboard/report-register"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Register
        </Link>
      </div>
      <header className="flex flex-col lg:flex-row items-center justify-between py-6 lg:gap-4 pl-10">
        <h1 className="text-2xl font-semibold text-black">
          {selectedItem.selectedItem}
          {location.pathname === "/dashboard/report-register"
            ? " Register"
            : "List"}
        </h1>
        </header>
    </div>
  )
}

export default ReportRegisterHeader