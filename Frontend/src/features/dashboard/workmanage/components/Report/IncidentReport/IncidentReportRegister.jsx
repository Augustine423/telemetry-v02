import React from "react";
import ReportSelectBox from "../ReportSelectBox";
import { useState, useRef, useEffect } from "react";
import {
  BsFillCaretDownFill,
  BsPlusCircleFill,
  BsFillFileEarmarkArrowUpFill,
} from "react-icons/bs";
const IncidentReportRegister = () => {
  const [workItems, setWorkItems] = useState([{ id: 1 }]);
  const [preItems, setPreItems] = useState([{ id: 4 }]);
  const [subItems, setSubItems] = useState([{ id: 2 }]);
  const [gpsItems, setGpsItems] = useState([{ id: 3 }]);
  const [obstacleItems, setObstacleItems] = useState([{ id: 5 }]);
  const [occurrenceItems, setoccurrenceItems] = useState([{ id: 6 }]);
  const [extentItems, setextentItems] = useState([{ id: 7 }]);
  const [damageItems, setdamageItems] = useState([{ id: 8 }]);
  const [addItems, setaddItems] = useState([{ id: 9 }]);
  const [restrictItems, setrestrictItems] = useState([{ id: 10 }]);
  const [date, setDate] = useState("");
  const [timeFormat, setTimeFormat] = useState("AM");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [workType, setWorkType] = useState("Maintenance");
  const datePickerRef = (useRef < HTMLDivElement) | (null > null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [file, setFile] = useState(null);
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
  // Close date picker when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [datePickerRef]);

  // Handle hours input with validation
  const handleHoursChange = (e) => {
    const value = e.target.value;
    if (
      value === "" ||
      (/^\d+$/.test(value) &&
        Number.parseInt(value) >= 0 &&
        Number.parseInt(value) <= 12)
    ) {
      setHours(value);
    }
  };

  // Handle minutes input with validation
  const handleMinutesChange = (e) => {
    const value = e.target.value;
    if (
      value === "" ||
      (/^\d+$/.test(value) &&
        Number.parseInt(value) >= 0 &&
        Number.parseInt(value) <= 59)
    ) {
      setMinutes(value);
    }
  };

  // Simple date picker functionality
  const handleDateSelect = (e) => {
    setDate(e.target.value);
    setShowDatePicker(false);
  };
  return (
    <>
      {/* Basic Info Section */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-base font-medium text-gray-800">Basic Info.</h2>
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
            <div className="w-full flex justify-between items-center py-5">
              <label className="w-[29%] block text-sm font-medium text-gray-700 mb-1">
                Machinery Info.
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Incident Detail */}
      <div className="mx-auto border-b  mb-8">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-base font-semibold text-gray-800">
            Incident Detail
          </h2>
          <span className="text-sm text-gray-500 ml-2">(Required)</span>
        </div>

        <div className="mx-10">
          {/* Date and Time */}
          <div className="flex justify-between items-center w-2/3">
            <label
              htmlFor="date"
              className="text-sm font-medium text-gray-700 w-1/3"
            >
              Date
            </label>
            <div className="w-2/3 flex items-center gap-2">
              {/* Date input */}
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  value={date}
                  placeholder="Select Date"
                  className="w-[180px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                />
              </div>

              {/* Time format selector */}
              <select
                value={timeFormat}
                onChange={(e) => setTimeFormat(e.target.value)}
                className="w-[80px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>

              {/* Time inputs */}
              <div className="flex items-center">
                <input
                  type="text"
                  value={hours}
                  onChange={handleHoursChange}
                  placeholder="h"
                  maxLength={2}
                  className="w-12 py-2 px-3 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="mx-1 text-gray-500">:</span>
                <input
                  type="text"
                  value={minutes}
                  onChange={handleMinutesChange}
                  placeholder="m"
                  maxLength={2}
                  className="w-12 py-2 px-3 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Work Type */}

          <div className="w-full flex justify-between items-center py-5">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Type
            </label>
            {workItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    System Defect
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Mechanical Damage
                  </span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Common Failure
                  </span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remark</span>
                </label>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="w-full flex justify-between items-center ">
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div className="w-full flex justify-between items-center py-5">
            <label
              htmlFor="detail"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Detail
            </label>
            <input
              id="detail"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      {/* Flight Data */}
      <div className="mx-auto border-b mb-8 pb-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-base font-semibold text-gray-800">Flight Data</h2>
          <span className="text-sm text-gray-500 ml-2">(Required)</span>
        </div>
        <div className="mx-10">
          <div className="w-full flex justify-between items-center ">
            <label
              htmlFor="altitude"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Altitude
            </label>
            <input
              id="altitude"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex justify-between items-center py-5">
            <label
              htmlFor="speed"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Speed
            </label>
            <input
              id="speed"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label
              htmlFor="communication"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Communication
            </label>
            <input
              id="communication"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex justify-between items-center py-5">
            <label
              htmlFor="battery"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Battery
            </label>
            <input
              id="battery"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex justify-between items-center ">
            <label
              htmlFor="remark"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Remark
            </label>
            <input
              id="remark"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      {/* Environmental Info */}
      <div className="mx-auto border-b pb-5 mb-8">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-base font-semibold text-gray-800">
            Environmental Info
          </h2>
          <span className="text-sm text-gray-500 ml-2">(Required)</span>
        </div>
        <div className="mx-10">
          <div className="w-full flex justify-between items-center py-5">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Type
            </label>
            {subItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">Clear(0~2)</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Partly cloudy(3~5)
                  </span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Mostly cloudy(6~8)
                  </span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Cloudy(9~10)
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center py-5">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Precipitation
            </label>
            {preItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">Clear</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Few</span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Many</span>
                </label>
              </div>
            ))}
          </div>
          <div className="w-2/3 flex  items-center">
            <label
              htmlFor="temperature"
              className="text-sm font-medium text-gray-700 w-1/3"
            >
              Temperature
            </label>
            <div className="relative w-1/3">
              <input
                id="temperature"
                placeholder="Temperature"
                className="w-full py-2 pr-8 pl-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                °C
              </span>
            </div>
          </div>

          <div className="w-2/3 flex  items-center py-5">
            <label
              htmlFor="temperature"
              className="text-sm font-medium text-gray-700 w-1/3"
            >
              Wind Speed
            </label>
            <div className="relative  w-1/3">
              <input
                id="wind"
                placeholder="Wind Speed"
                className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute  top-1/2 right-2 -translate-y-1/2 text-gray-400">
                m/s
              </span>
            </div>
          </div>
          <div className="w-full flex  justify-between items-center ">
            <label
              htmlFor="environment"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Flight environment
            </label>

            <input
              id="environment"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex justify-between items-center py-5">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              GPS/Common status
            </label>
            {gpsItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">Normal</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Weak Signal
                  </span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">No Signal</span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remark</span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-between items-center">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Nearby obstacles
            </label>
            {obstacleItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">None</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Present</span>
                </label>
                <input
                  type="text"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please Enter"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Damage occurrence and details */}
      <div className="mx-auto border-b mb-8">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-base font-semibold text-gray-800">
            Damage occurrence and details
          </h2>
          <span className="text-sm text-gray-500 ml-2">(Required)</span>
        </div>
        <div className="mx-10">
          <div className="w-full flex justify-between items-center py-10">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Occurrence
            </label>
            {occurrenceItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">No damage</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Damage present
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center ">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Damage Type
            </label>
            {damageItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">Personal</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Material</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Environmental
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remark</span>
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center py-10">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Extent
            </label>
            {extentItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">Minor</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Serious</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Fatal</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remark</span>
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex  justify-between items-center ">
            <label
              htmlFor="detail"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Detail
            </label>

            <input
              id="detail"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex  justify-between items-center py-5">
            <label
              htmlFor="target"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Target
            </label>

            <input
              id="target"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      {/* Incident/Defect Analysis */}

      <div className="mx-auto border-b pb-5 mb-8">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-base font-semibold text-gray-800">
            Incident/Defect Analysis
          </h2>
          <span className="text-sm text-gray-500 ml-2">(Required)</span>
        </div>
        <div className="mx-10">
          <div className="w-full flex  justify-between items-center py-5">
            <label
              htmlFor="cause"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Cause/Result
            </label>

            <input
              id="cause"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex  justify-between items-center ">
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Location/Part
            </label>

            <input
              id="location"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex  justify-between items-center py-5">
            <label
              htmlFor="log"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Log Analysis
            </label>

            <input
              id="log"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex  justify-between items-center ">
            <label
              htmlFor="log"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Additionality
            </label>
            {addItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">Necessary</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Unnecessary
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Action temson terms */}

      <div className="mx-auto border-b pb-5 mb-8">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-base font-semibold text-gray-800">
            Action Temson Tems
          </h2>
          <span className="text-sm text-gray-500 ml-2">(Required)</span>
        </div>
        <div className="mx-10">
          <div className="w-full flex  justify-between items-center ">
            <label
              htmlFor="log"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Flight restrictions
            </label>
            {restrictItems.map((item) => (
              <div key={item.id} className="flex space-x-4 w-full">
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600 checked:border-blue-600 checked:bg-blue-500 "
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">Necessary</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`progress-${item.id}`}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Unnecessary
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex  justify-between items-center py-5">
            <label
              htmlFor="action"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Action items
            </label>

            <input
              id="action"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex  justify-between items-center ">
            <label
              htmlFor="preventive"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Preventive plan
            </label>

            <input
              id="preventive"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
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
              Attachment
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
        <div className="mx-10">
          <div className="w-full flex  justify-between items-center py-5">
            <label
              htmlFor="reference"
              className="text-sm font-medium text-gray-700 w-[28%]"
            >
              Reference
            </label>

            <input
              id="reference"
              placeholder="Please Enter"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
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

export default IncidentReportRegister;
