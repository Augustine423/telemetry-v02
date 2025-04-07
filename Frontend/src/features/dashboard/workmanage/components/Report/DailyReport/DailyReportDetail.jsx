import React from "react";
import { FiDownload } from "react-icons/fi";
const DailyReportDetail = ({ report }) => {
  const totalFlightRange = report?.operation?.reduce(
    (sum, row) => sum + row.flightRange,
    0
  );
  const totalFlightTime = report?.operation?.reduce(
    (sum, row) => sum + row.flightTime,
    0
  );
  const totalFlightDistance = report?.operation?.reduce(
    (sum, row) => sum + row.flightDistance,
    0
  );
  const totalCoordinates =
    report?.operation?.filter((row) => row.coordinates)?.length || 0;
  const totalPadBuoy = report?.operation.reduce(
    (sum, row) => sum + row.padBuoy,
    0
  );
  const totalCatchQuantity = report?.operation.reduce(
    (sum, row) => sum + row.catchQuantity,
    0
  );
  const totalContributionToCatch = report?.operation.reduce(
    (sum, row) => sum + row.contributionToCatch,
    0
  );

  return (
    <>
      {/* Basic Info */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Basic Info.</h2>

        <div className="gap-3 py-5 border-b ">
          <div className="grid grid-cols-4">
            <div className="font-semibold text-slate-900">Report No.</div>
            <div className="text-gray-800">{report.reportNo}</div>
          </div>
          <div className="grid grid-cols-4 py-5">
            <div className="font-semibold text-slate-900">Date</div>
            <div className="text-gray-800">{report.date}</div>
          </div>
          <div className="grid grid-cols-4">
            <div className="font-semibold text-slate-900">Author</div>
            <div className="text-gray-800">{report.author}</div>
          </div>
          <div className="grid grid-cols-4 py-5">
            <div className="font-semibold text-slate-900">Vessel</div>
            <div className="text-gray-800">{report.vessel}</div>
          </div>
          <div className="grid grid-cols-4">
            <div className="font-semibold text-slate-900">Latitude</div>
            <div className="text-gray-800">{report.latitude}</div>
          </div>
          <div className="grid grid-cols-4 py-5">
            <div className="font-semibold text-slate-900">Longitude</div>
            <div className="text-gray-800">{report.longitude}</div>
          </div>
          <div className="grid grid-cols-4">
            <div className="font-semibold text-slate-900">Boat Count</div>
            <div className="text-gray-800">{report.boatCount}</div>
          </div>
          <div className="grid grid-cols-4 py-5">
            <div className="font-semibold text-slate-900">Fish Hold Status</div>
            <div className="text-gray-800">{report.fishHoldStatus}</div>
          </div>
          <div className="grid grid-cols-4 ">
            <div className="font-semibold text-slate-900">Pilot1</div>
            <div className="text-gray-800">{report.pilot1}</div>
          </div>
          <div className="grid grid-cols-4 py-5">
            <div className="font-semibold text-slate-900">Pilot2</div>
            <div className="text-gray-800">{report.pilot2}</div>
          </div>
          <div className="grid grid-cols-4 ">
            <div className="font-semibold text-slate-900">Checker</div>
            <div className="text-gray-800">{report.checker}</div>
          </div>
        </div>
      </div>
      {/* Drone Info */}
      <div className="mb-8 py-5">
        <div className="flex  justify-between  border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Drone Info.</h2>
          <label className=" block text-sm font-medium text-gray-700 mb-1">
            {report.date}
          </label>
        </div>
        <div className=" py-5">
          <div className="overflow-x-auto">
            <table className="min-w-full border-b table-fixed">
              <colgroup>
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[12%]" />
                <col className="w-[16%]" />
                <col className="w-[26%]" /> {/* Safety Notes - wider */}
                <col className="w-[26%]" /> {/* Remarks - wider */}
              </colgroup>
              <thead>
                <tr className="">
                  <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                    Drone No.
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                    Flight Count(No)
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                    Flight Time(m)
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                    Flight Distance(km)
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                    Safety Notes
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {report?.droneInfo?.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-3 px-4 ">{row.droneNo}</td>
                    <td className="py-3 px-4 ">{row.flightCount}</td>
                    <td className="py-3 px-4 ">{row.flightTime}</td>
                    <td className="py-3 px-4 ">{row.flightDistance}</td>
                    <td className="py-3 px-4 ">{row.safetyNotes}</td>
                    <td className="py-3 px-4 ">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Operation and Flight Results */}
      <div className="mb-8 py-5">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div className="flex items-center ">
            <h2 className="text-md font-medium text-gray-800">
              Operation and Flight Results
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-b table-fixed">
            <colgroup>
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
              <col className="w-[9%]" />
            </colgroup>
            <thead>
              <tr className="">
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Operation Drone
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Flight Distance(km)
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Flight Range(km)
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Flight Time(m)
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Coordinates
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Pad Buoy(No)
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Catch Quantity(t)
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Contribution to Catch(t)
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Battery
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Cruising Altitude(m)
                </th>
                <th className="py-3 px-2 border-b border-gray-200 text-left text-xs font-medium text-gray-700">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="border-b">
              {report?.operation?.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 px-4 ">{row.operatingDrone}</td>
                  <td className="py-3 px-4 ">{row.flightDistance}</td>
                  <td className="py-3 px-4 ">{row.flightRange}</td>
                  <td className="py-3 px-4 ">{row.flightTime}</td>
                  <td className="py-3 px-4 ">{row.coordinates}</td>
                  <td className="py-3 px-4 ">{row.padBuoy}</td>
                  <td className="py-3 px-4 ">{row.catchQuantity}</td>
                  <td className="py-3 px-4 ">{row.contributionToCatch}</td>
                  <td className="py-3 px-4 ">{row.battery}</td>
                  <td className="py-3 px-4 ">{row.cruisingAltitude}</td>
                  <td className="py-3 px-4 ">{row.notes}</td>
                </tr>
              ))}
              <tr className=" font-semibold">
                <td className="border-t px-4 py-2">Total</td>
                <td className=" border-t px-4 py-2">{totalFlightDistance}</td>
                <td className=" border-t px-4 py-2">{totalFlightRange}</td>
                <td className=" border-t px-4 py-2">{totalFlightTime}</td>
                <td className=" border-t px-4 py-2">{totalCoordinates}</td>
                <td className=" border-t px-4 py-2">{totalPadBuoy}</td>
                <td className=" border-t px-4 py-2">{totalCatchQuantity}</td>
                <td className=" border-t px-4 py-2">
                  {totalContributionToCatch}
                </td>
                <td className=" border-t px-4 py-2">-</td>
                <td className=" border-t px-4 py-2">-</td>
                <td className=" border-t px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Failure and Defects */}
      <div className="mb-8 py-5">
        <div className="flex items-center border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">
            Failure and Defects
          </h2>
        </div>
        <div className="py-5 border-b">
          <div className="mx-10 ">{report.failuresAndDefects}</div>
        </div>
      </div>
      {/* Issues */}
      <div className="mb-8 py-5">
        <div className="flex items-center border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Issues</h2>
        </div>
        <div className="py-5 border-b">
          <div className="mx-10 ">
            {report?.issue?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>
      </div>
      {/* Reference file Section */}
      <div className="mb-8 border-b pb-5">
        <div className="border-b pb-5 mb-4">
          <h2 className="text-md font-medium text-gray-800 ">Reference file</h2>
        </div>
        <div className="mx-10">
          <div className="flex gap-10 items-center mb-5">
            <label className="block text-sm font-medium text-gray-700">
              File
            </label>
            <div className="list-decimal pl-5">
            {report?.referenceFiles?.map((item, index) => {
              const fileName = item.split('/').pop().split('.').slice(0, -1).join('.');
              return <li key={index}>{fileName}
               <a href={item} download className="text-blue-500 hover:text-blue-700 ml-2">
                <FiDownload className="inline-block" />
              </a></li>;
            })}
            </div>
          </div>
        </div>
      </div>
      {/* Sign */}
      <div className="mb-8 border-b pb-5">
        <div className="border-b pb-5 mb-4">
          <h2 className="text-md font-medium text-gray-800 ">Sign</h2>
        </div>
        <div className="mx-10">
          <div className="w-2/5 flex justify-between items-center mb-5">
            <label htmlFor="">Team Leader</label>
            <div className="flex gap-3">
              <span className="bg-gray-200 px-1 rounded-full inline-block items-center text-center">Necessity</span>
              <span className=" text-gray-500">Approved Person</span>
            </div>
            </div>
            <div className="w-2/5  flex justify-between items-center mb-5">
            <label htmlFor="">Navigator</label>
            <div className="flex gap-3">
              <span className="bg-gray-200 px-1 rounded-full inline-block items-center text-center">Necessity</span>
              <span className=" text-gray-500">Approved Person</span>
            </div>
            </div>
            </div>
            </div>
    </>
  );
};

export default DailyReportDetail;
