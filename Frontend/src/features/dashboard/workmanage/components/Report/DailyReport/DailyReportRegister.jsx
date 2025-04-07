import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BsPlusCircleFill, BsFillFileEarmarkArrowUpFill,BsCalendar } from "react-icons/bs";
const DailyReportRegister = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [file, setFile] = useState(null);
  const [workItems, setWorkItems] = useState([{ id: 1 }]);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const addWorkItem = () => {
    const newId =
      workItems.length > 0
        ? Math.max(...workItems.map((item) => item.id)) + 1
        : 1;
    setWorkItems([...workItems, { id: newId }]);
  };
  const droneData = [
    {
      id: 1,
      droneNo: "",
      flightCount: "Auto",
      flightTime: "Auto",
      flightDistance: "Auto",
      safetyNotes: "",
      remarks: "",
    },
    {
      id: 2,
      droneNo: "",
      flightCount: "Auto",
      flightTime: "Auto",
      flightDistance: "Auto",
      safetyNotes: "",
      remarks: "",
    },
    {
      id: 3,
      droneNo: "",
      flightCount: "Auto",
      flightTime: "Auto",
      flightDistance: "Auto",
      safetyNotes: "",
      remarks: "",
    },
  ];
  const [drone, setDrone] = useState(droneData);
  const data = [
    {
      id: 1,
      operationgDrone: "",
      flightDistance: "Auto",
      flightRange: "Auto",
      flightTime: "Auto",
      coordinates: "",
      padBuoy: "",
      catchQuantity: "",
      contributionToCatch: "",
      battery: "",
      cruisingAltitude: "",
      notes: "",
    },
    {
      id: 2,
      operatingDrone: "",
      flightDistance: "Auto",
      flightRange: "Auto",
      flightTime: "Auto",
      coordinates: "",
      padBuoy: "",
      catchQuantity: "",
      contributionToCatch: "",
      battery: "",
      cruisingAltitude: "",
      notes: "",
    },
  ];
  const [rows, setRows] = useState(data);

  return (
    <>
      {/* Basic Info section */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Basic Info</h2>
          <span className="ml-2 text-xs text-gray-500">(Required)</span>
        </div>
        <div className="border-b ">
          <div className=" mx-10 ">
            <div className="w-2/3 flex justify-between items-center">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="text"
                placeholder="Fix to Today"
                className="w-2/3 bg-gray-200  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                placeholder="Fix to the logged-in user"
                className="w-2/3 px-3 bg-gray-200  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center ">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Vessel
              </label>
              <input
                type="text"
                placeholder="Fix to the connected vessel"
                className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Latitude
              </label>
              <input
                type="text"
                placeholder="Auto"
                className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center ">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Longitude
              </label>
              <input
                type="text"
                placeholder="Auto"
                className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Boat Count
              </label>
              <input
                type="text"
                placeholder="Auto"
                className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center ">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Fish Hold Status
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-2/3 px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Pilot1
              </label>
              <input
                type="text"
                placeholder="Fix to the connected Pilot"
                className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center ">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Pilot2
              </label>
              <input
                type="text"
                placeholder="Fix to the connected Pilot"
                className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Checker
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Drone Info section */}
      <div className="mb-8 py-5">
        <div className="flex items-center  border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Drone Info.</h2>
        </div>
        <div className="border-b py-5">
          <div className="w-2/3 flex justify-between items-center">
            <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
              Base Date
            </label>

            <div className="inline-block w-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={
                  <button
                    type="button"
                    className="flex items-center justify-between px-4 gap-32 py-2 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span>
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Select Date"}
                    </span>
                    <BsCalendar className="w-5 h-5 ml-2 text-gray-500" />
                  </button>
                }
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-b table-fixed">
            <colgroup>
              <col className="w-[14%]" />
              <col className="w-[12%]" />
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
              {drone.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-4 ">
                    <input
                      type="text"
                      placeholder="Auto"
                      className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4 ">
                    <input
                      type="text"
                      placeholder="Auto"
                      className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4 ">
                    <input
                      type="text"
                      placeholder="Auto"
                      className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-4 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          <button
            onClick={addWorkItem}
            className="flex items-center text-sm text-gray-400 hover:text-blue-800 mr-12"
          >
            <BsPlusCircleFill className="w-4 h-4 mr-1" />
            Add item
          </button>
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
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 ">
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 border text-xs border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Auto"
                      className="w-full px-2 py-2 text-xs bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Auto"
                      className="w-full px-2 py-2 text-xs bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Auto"
                      className="w-full px-2 py-2 text-xs bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-2 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                </tr>
              ))}
              <tr className=" text-sm font-medium border-y">
                <td className="py-2 px-2  border-gray-200">Total</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
                <td className="py-2 px-2  border-gray-200">Auto</td>
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
          <div className="mx-10 ">
            <textarea
              name=""
              id=""
              placeholder="Please Enter"
              className="w-full  px-2 py-5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </div>
      {/* Issues */}
      <div className="mb-8 py-5">
        <div className="flex items-center border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Issues</h2>
        </div>
        <div className="py-5 border-b">
          <div className="mx-10 ">
            <textarea
              name=""
              id=""
              placeholder="Please Enter"
              className="w-full  px-2 py-5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </div>
      {/* Reference file Section */}
      <div className="mb-8 border-b pb-5">
        <div className="border-b pb-5 mb-4">
          <h2 className="text-md font-medium text-gray-800 ">Reference file</h2>
        </div>
        <div className="mx-10">
          <div className="flex justify-between items-center mb-5">
            <label className="block text-sm font-medium text-gray-700">
              File
            </label>
            <button className="text-sm flex hover:text-blue-800 items-center text-center">
              <BsFillFileEarmarkArrowUpFill className="mr-1" />
              <span>Load from PC</span>
            </button>
          </div>
          <div
            className="border-2 border-gray-300 border-dashed rounded-md p-10 flex flex-row items-center justify-center bg-gray-50 cursor-pointer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <BsFillFileEarmarkArrowUpFill className="mr-1" />
              <span className="text-sm text-gray-500">
                {file ? file.name : "Drag the File or Click to Upload"}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </div>
      {/* Form Actions */}
      <div className="flex justify-end space-x-3">
        <button className="px-7 border py-2 text-sm font-medium text-gray-700  rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Cancel
        </button>
        <button className="px-7 py-2 text-sm font-medium text-blue-500 bg-blue-100 rounded-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Save
        </button>
      </div>
    </>
  );
};

export default DailyReportRegister;
