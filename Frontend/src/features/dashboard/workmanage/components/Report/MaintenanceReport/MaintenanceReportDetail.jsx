import React from "react";

const MaintenanceReportDetail = ({ report }) => {
  return (
    <>
      {/* Basic Info */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Basic Info.</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="flex items-center">
            <div className="w-1/4 font-semibold text-slate-900">Report No.</div>
            <div className="text-gray-800">{report.reportNo}</div>
          </div>
          <div className="flex items-center py-5">
            <div className="w-1/4 font-semibold text-slate-900">Date</div>
            <div className="text-gray-800">{report.date}</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-semibold text-slate-900">Vessel</div>
            <div className="text-gray-800">{report.vessel}</div>
          </div>
          <div className="flex items-center py-5">
            <div className="w-1/4 font-semibold text-slate-900">Author</div>
            <div className="text-gray-800">{report.date}</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-semibold text-slate-900">
              Drone Info.
            </div>
            <div className="text-gray-800">{report.droneInfo}</div>
          </div>
          <div className="flex items-center py-5">
            <div className="w-1/4 font-semibold text-slate-900">
              Maintenance date
            </div>
            <div className="text-gray-800 flex">
              {report?.maintenanceDate && (
                <span>
                  <span className="mr-1">Start date</span>
                  {report.maintenanceDate.startDate} ~{" "}
                  <span className="mr-1">End date</span>
                  {report.maintenanceDate.endDate}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center ">
            <div className="w-1/4 font-semibold text-slate-900">
             Lead mechanic
            </div>
            <div className="text-gray-800 flex">{report.leadMechanic}</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default MaintenanceReportDetail;
