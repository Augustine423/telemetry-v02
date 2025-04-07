import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, Printer, Edit } from "lucide-react";
import { BsFillTrash3Fill, BsPenFill } from "react-icons/bs";
import { usePopup } from "../../../datamanage/droneShip/hooks/usePopup";
import ReportPopup from "./ReportPopup";

const ReportDetailHeader = () => {
  const location = useLocation();
  const selectedItem = useSelector((state) => state.selectedItem); // Global state
  const { id } = useParams();
  const isReportDetail = location.pathname.match(
    /\/dashboard\/report-detail\/\d+/
  );

  const reportPopup = usePopup();
  const handleReportPopup = () => {
    reportPopup.open();
  };

  return (
    <div>
      <div className="flex gap-8 pt-6 px-8 pb-4">
        <Link
          to="/dashboard/report-overview"
          className={`pb-3 text-lg font-medium transition-all ${
            location.pathname === "/dashboard/work-overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview
        </Link>
        <Link
          to="/dashboard/"
          className={`pb-3 text-lg font-medium transition-all ${
            isReportDetail
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Report Detail
        </Link>
      </div>
      <header className="flex flex-col lg:flex-row items-center justify-between py-6 lg:gap-4 pl-10">
        <h1 className="text-2xl font-semibold text-black">
          {selectedItem.selectedItem}
          {location.pathname === "/dashboard/report-register"
            ? " Register"
            : " Detail"}
        </h1>
        <div className="flex justify-between">
          <button
            onClick={handleReportPopup}
            className="py-2 px-3 flex justify-between"
          >
            <BsPenFill className="text-gray-400 w-5 h-5 hover:text-blue-500" />
            <span className="text-gray-400 px-2 text-sm hover:text-blue-500">
              Sign
            </span>
          </button>
          {reportPopup.isOpen && <ReportPopup onClose={reportPopup.close} />}

          <a href="#" className="py-2 px-3 flex justify-between">
            <Printer className="text-gray-400 w-5 h-5 hover:text-blue-500" />
            <span className="text-gray-400 px-2 text-sm hover:text-blue-500">
              Print
            </span>
          </a>
          <div className="py-2">
            <button className="flex ">
              <BsFillTrash3Fill className="text-gray-400 w-5 h-5 hover:text-blue-500" />
              <span className="text-gray-400 px-2 text-sm hover:text-blue-500">
                Delete
              </span>
            </button>
          </div>
          <div className="py-2 px-3">
            <Link to={`/dashboard/report-edit/${id}`} className="flex ">
              <Edit className="text-gray-400 w-5 h-5 hover:text-blue-500" />
              <span className="text-gray-400 px-2 text-sm hover:text-blue-500">
                Edit
              </span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ReportDetailHeader;
