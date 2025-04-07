import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import DailyReportDetail from "./DailyReport/DailyReportDetail";
import IncidentReportDetail from "./IncidentReport/IncidentReportDetail";
import MaintenanceReportDetail from "./MaintenanceReport/MaintenanceReportDetail";
import ItemRequestReportDetail from "./ItemRequestReport/ItemRequestReportDetail";
import HandoverReportDetail from "./HandoverReport/HandoverReportDetail";
import TakeoverReportDetail from "./TakeoverReport/TakeoverReportDetail";
import { fetchReportById } from "../../../../../stores/reportData/reportSlice";
import { useDispatch, useSelector  } from "react-redux";
const ReportDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const report = location.state?.report;
  console.log("report location:",location.state);
//   const dispatch= useDispatch();
//   const currentReport = useSelector((state)=>state.reports.currentReport);
//   const loading = useSelector((state)=>state.reports.loading);
//   const error = useSelector((state)=>state.reports.error);
//   useEffect(()=>{
//     if(id){
//         console.log(`Fetching data for ID: ${id}`);
//         dispatch(fetchReportById(id))
//     }
//   },[dispatch,id])
//   console.log("report data:",currentReport)
  if (!report) {
    return <p className="text-red-500">No report data found.</p>;
  }
  const renderReportDetail = () => {
    switch (report.type) {
      case "Daily Report":
        return <DailyReportDetail report={report} />;
      case "Incident Report":
        return <IncidentReportDetail report={report} />;
      case "Maintenance Report":
        return <MaintenanceReportDetail report={report} />;
      case "Item Request Report":
        return <ItemRequestReportDetail report={report} />;
      case "Handover Report":
        return <HandoverReportDetail report={report} />;
      case "Takeover Report":
        return <TakeoverReportDetail report={report} />;
      default:
        <p className="text-gray-700">No report available.</p>;
    }
  };

  return (
    <div className="mx-5">
      <div className="bg-white p-5 rounded-md shadow-md w-full px-10">
        <h2 className="text-xl font-semibold ">{report.type}</h2>
        <div className="py-5">{renderReportDetail()}</div>
      </div>
    </div>
  );
};

export default ReportDetail;
