import React from "react";
import { FiDownload } from "react-icons/fi";
const IncidentReportDetail = ({ report }) => {
  const fileName = report.attachment
    .split("/")
    .pop()
    .split(".")
    .slice(0, -1)
    .join(".");
  return (
    <>
      {/* Basic Info */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Basic Info.</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Report No.</div>
            <div className="text-gray-800">{report.reportNo}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Date</div>
            <div className="text-gray-800">{report.date}</div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Author</div>
            <div className="text-gray-800">{report.author}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Vessel</div>
            <div className="text-gray-800">{report.vessel}</div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Machinery Info.</div>
            <div className="text-gray-800">{report.machineryInfo}</div>
          </div>
        </div>
      </div>
      {/* Incident Detail */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Incident Detail</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Date</div>
            <div className="text-gray-800">{report.detailDate}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Type</div>
            <div className="text-gray-800">{report.type}</div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Location</div>
            <div className="text-gray-800">{report.location}</div>
          </div>
          <div className="grid grid-cols-4 items-center pt-5">
            <div className="font-semibold text-slate-900">Detail</div>
            <div className="text-gray-800">{report.detail}</div>
          </div>
        </div>
      </div>
      {/* Flight Data */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Flight Data</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Altitude</div>
            <div className="text-gray-800">{report.altitude}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Speed</div>
            <div className="text-gray-800">{report.speed}</div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Communication</div>
            <div className="text-gray-800">{report.communication}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Battery</div>
            <div className="text-gray-800">{report.battery}</div>
          </div>
          <div className="grid grid-cols-4 items-center ">
            <div className="font-semibold text-slate-900">Remark</div>
            <div className="text-gray-800">{report.remark}</div>
          </div>
        </div>
      </div>
      {/* Environmental Info */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">
          Environmental Info
        </h2>
        <div className="gap-3 py-5 border-b ">
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Cloudiness</div>
            <div className="text-gray-800">{report.cloudiness}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Precipitation</div>
            <div className="text-gray-800">{report.precipitation}</div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Temperature</div>
            <div className="text-gray-800">{report.temperature}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Wind Speed</div>
            <div className="text-gray-800">{report.windSpeed}</div>
          </div>
          <div className="grid grid-cols-4 items-center ">
            <div className="font-semibold text-slate-900">
              Flight Environment
            </div>
            <div className="text-gray-800">{report.flightEnvironment}</div>
          </div>
          <div className="flex items-center py-5">
            <div className="w-1/4 font-semibold text-slate-900">
              GPS/Common Status
            </div>
            <div className="text-gray-800">{report.gpsCommStatus}</div>
          </div>
          <div className="flex items-center ">
            <div className="w-1/4 font-semibold text-slate-900">
              Nearby obstacles
            </div>
            <div className="text-gray-800">{report.nearbyObstacles}</div>
          </div>
        </div>
      </div>
      {/* Damage occurrence and details */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">
          Damage occurrence and details
        </h2>
        <div className="gap-3 py-5 border-b ">
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Occurrence</div>
            <div className="text-gray-800">{report.occurrence}</div>
          </div>
          <div className="grid grid-cols-4 items-center py-5">
            <div className="font-semibold text-slate-900">Damage Type</div>
            <div className="text-gray-800">{report.damageType}</div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div className="font-semibold text-slate-900">Extent</div>
            <div className="text-gray-800">{report.extent}</div>
          </div>
          <div className="flex items-center py-5">
            <div className="w-1/4 font-semibold text-slate-900">Detail</div>
            <div className="text-gray-800">{report.detail}</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-semibold text-slate-900">Target</div>
            <div className="text-gray-800">{report.target}</div>
          </div>
        </div>
      </div>
      {/* Incident/Defect Analysis */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">
          Incident/Defect Analysis
        </h2>
        <div className="gap-3 py-5 border-b ">
          <div className="flex items-center">
            <div className="w-1/4 font-semibold text-slate-900">
              Cause/Result
            </div>
            <div className="text-gray-800">{report.causeResult}</div>
          </div>
          <div className="flex items-center py-5">
            <div className="w-1/4 font-semibold text-slate-900">
              Location/Part
            </div>
            <div className="text-gray-800">{report.locationPart}</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-semibold text-slate-900">
              Log Analysis
            </div>
            <div className="text-gray-800">{report.logAnalysis}</div>
          </div>
          <div className="flex items-center pt-5">
            <div className="w-1/4 font-semibold text-slate-900">
              Additionality
            </div>
            <div className="text-gray-800">{report.additionality}</div>
          </div>
        </div>
      </div>
      {/* Action Terms */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Action Terms</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="flex items-center ">
            <div className="min-w-[25%] font-semibold text-slate-900">
              Flight restrictions
            </div>
            <div className="text-gray-800 w-full">
              {report.flightRestrictions}
            </div>
          </div>
          <div className="flex items-center pt-5">
            <div className="min-w-[25%] font-semibold text-slate-900">
              Action Items
            </div>
            <div className="w-full text-gray-800">{report.actionItems}</div>
          </div>
          <div className="flex items-center pt-5">
            <div className="min-w-[25%] font-semibold text-slate-900">
              Preventive Plan
            </div>
            <div className="text-gray-800 w-full">{report.preventivePlan}</div>
          </div>
        </div>
      </div>
      {/* Remark */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Remark</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="flex items-center ">
            <div className="min-w-[25%] font-semibold text-slate-900">
              Attachment
            </div>
            <div className="text-gray-800 w-full">
              <a href={fileName} download>
                {fileName}
                <FiDownload className="inline-block ml-2 text-blue-500 hover:text-blue-700" />
              </a>
            </div>
          </div>
          <div className="flex items-center pt-5">
            <div className="min-w-[25%] font-semibold text-slate-900">
              Reference
            </div>
            <div className="text-gray-800 w-full">{report.reference}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncidentReportDetail;
