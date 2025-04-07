import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Search, Printer } from "lucide-react";
const ReportOverviewHeader = () => {
  const location = useLocation();
  const selectedItem = useSelector((state) => state.selectedItem); // Global state
  const [search, setSearch] = useState("");
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
            ? "Register"
            : "List"}
        </h1>
        <div className="flex justify-between">
          <div className="relative">
            <Search className="absolute right-5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Quick Search"
              className=" pl-3 pr-10 py-1.5 border rounded-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <a href="#" className="py-2 px-3 flex justify-between">
            <Printer className="text-gray-400 w-5 h-5" />
            <span className="text-gray-400 px-2 text-sm">Print</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default ReportOverviewHeader;
