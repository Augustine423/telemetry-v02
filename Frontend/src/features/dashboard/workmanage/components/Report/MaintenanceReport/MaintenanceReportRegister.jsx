import React from "react";
import {
  BsFillFileEarmarkArrowUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";

const MaintenanceReportRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const watchStartDate = watch("startDate");

  const [inspectionItems, setInspectionItems] = useState({
    motor: { status: "none", text: "", status1: "Wrong" },
    propeller: { status: "none", text: "", status1: "Damage" },
    esc: { status: "none", text: "", status1: "Malfunction" },
    battery: { status: "none", text: "", status1: "abnormality" },
    sensor: { status: "none", text: "", status1: "Replacement" },
    gpsComm: { status: "none", text: "", status1: "Signal Weakness" },
    beacon: { status: "none", text: "", status1: "Replacement" },
    flightController: { status: "none", text: "", status1: "Error" },
    gcs: { status: "none", text: "", status1: "Error" },
    remark: { status: "none", text: "", status1: "Problem" },
  });

  const handleInspectionChange = (part, field, value) => {
    setInspectionItems({
      ...inspectionItems,
      [part]: {
        ...inspectionItems[part],
        [field]: value,
      },
    });
  };
  const [workItems, setWorkItems] = useState([{ id: 1 }]);
  const [subItems, setSubItems] = useState([{ id: 2 }]);
  const [planItems, setPlanItems] = useState([{ id: 3 }]);
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
  return (
    <>
      {/* Basic Info Section */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Basic Info</h2>
          <span className="ml-2 text-xs text-gray-500">(Required)</span>
        </div>
        <div className="border-b pb-3">
          <div className=" mx-10 ">
            <div className="w-2/3 flex justify-between items-center">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="text"
                placeholder="Fix to today"
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
                Work for Creation
              </label>
              <div className="relative w-2/3">
                <select
                  name="vesselInfo"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm appearance-none"
                >
                  <option value="">Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <BsFillCaretDownFill className="w-4 h-4 " />
                </div>
              </div>
            </div>
            <div className="w-2/3 flex flex-row justify-between items-center">
              <label
                htmlFor="startDate"
                className="w-1/3 text-sm font-medium  text-gray-700"
              >
                Maintenance Date
              </label>
              <div className="flex justify-between items-start text-gray-400 w-2/3">
                <div className="">
                  <input
                    type="date"
                    placeholder="Select Date"
                    {...register("startDate", {
                      required: "Start date is required.",
                    })}
                    className="w-full py-2 px-3 appearance-none border border-gray-400  rounded-md flex-1"
                  />
                  {errors.startDate && (
                    <div className="mt-1">
                      {" "}
                      <p className="text-red-500 text-sm">
                        {errors.startDate.message}
                      </p>{" "}
                    </div>
                  )}
                </div>
                <span className="text-center py-1">-</span>
                <div className="">
                  <input
                    type="date"
                    placeholder="Select Date"
                    {...register("endDate", {
                      required: "End date is required.",

                      validate: (value) => {
                        // Check if the end date is after the start date
                        if (
                          watchStartDate &&
                          new Date(value) <= new Date(watchStartDate)
                        ) {
                          return "End date must be after the start date";
                        }
                        return true;
                      },
                    })}
                    className="py-2 px-3 appearance-none border border-gray-400 rounded-md flex-1"
                  />
                  {errors.endDate && (
                    <div className="mt-1">
                      {" "}
                      <p className="text-red-500 text-sm">
                        {errors.endDate.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Lead mechanic
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 flex justify-between items-center">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Date of Occurrence
              </label>
              <input
                type="date"
                placeholder="Select Date"
                className="w-2/3 px-3 py-2 appearance-none border border-gray-400 rounded-md flex-1"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Maintenance and Repair Items */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">
            Maintenance and Repair Items
          </h2>
          <span className="ml-2 text-xs text-gray-500">(Required)</span>
        </div>
        <div className="border-b">
          <div className="overflow-x-auto mx-10">
            <table className="min-w-full ">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-1/4">
                    Part
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-1/3">
                    Inspection results
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-1/2">
                    Text
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {Object.entries(inspectionItems).map(([part, item]) => (
                  <tr key={part} className="border-none ">
                    <td className="px-4 py-3 text-left text-sm text-gray-900 capitalize">
                      {part === "gpsComm"
                        ? "GPS/Comm status"
                        : part === "esc"
                        ? "ESC"
                        : part === "gcs"
                        ? "GCS (option)"
                        : part}
                    </td>
                    <td className=" py-3 items-center text-left">
                      <div className="flex items-center gap-14">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name={`${part}-status`}
                            checked={item.status === "none"}
                            onChange={() =>
                              handleInspectionChange(part, "status", "none")
                            }
                            className="h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label
                            htmlFor={`${part}-none`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            None
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name={`${part}-status`}
                            checked={
                              item.status1 === item.status1 &&
                              item.status !== "none"
                            }
                            onChange={() =>
                              handleInspectionChange(
                                part,
                                "status",
                                `${item.status1}`
                              )
                            }
                            className="h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label
                            htmlFor={`${part}-status1`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {item.status1}
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-left">
                      <input
                        type="text"
                        value={item.text}
                        onChange={(e) =>
                          handleInspectionChange(part, "text", e.target.value)
                        }
                        placeholder="Please Enter"
                        className="w-2/3 p-2 border border-gray-300 rounded-md text-sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Used Parts/ Materials */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">
            Used Parts/Materials
          </h2>
          <span className="ml-2 text-xs text-gray-500">(Required)</span>
        </div>
        <div className="border-b pb-3">
          <div className=" mx-10 ">
            <div className="w-full flex justify-between items-center">
              <label className="w-[28%] block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full flex justify-between items-center py-5">
              <label className="w-[28%] block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <label className="w-[28%] block text-sm font-medium text-gray-700 mb-1">
                Serial No.
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full flex justify-between items-center py-5">
              <label className="w-[28%] block text-sm font-medium text-gray-700 mb-1">
                Remarks
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Test Results */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Test results</h2>
          <span className="ml-2 text-xs text-gray-500">(Required)</span>
        </div>
        <div className="border-b pb-5">
          <div className=" mx-10 ">
            {workItems.map((item) => (
              <div key={item.id} className="">
                <div className=" w-full flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700 w-[29%] mb-1">
                    Operation Test
                  </label>
                  <div className="flex space-x-4 w-full">
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Necessary
                      </span>
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
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">Rework</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
            {subItems.map((item) => (
              <div key={item.id} className="">
                <div className="py-7 w-full flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700 w-[29%] mb-1">
                    Flight Test
                  </label>
                  <div className="flex space-x-4 w-full">
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Necessary
                      </span>
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
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">Rework</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-full flex justify-between items-center">
              <label className="block w-[29%] text-sm font-medium text-gray-700 mb-1">
                Detail Info.
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
      {/* Planned Tasks */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Planned tasks</h2>
          <span className="ml-2 text-xs text-gray-500">(Required)</span>
        </div>
        <div className="border-b pb-3">
          <div className=" mx-10 ">
            {planItems.map((item) => (
              <div key={item.id} className="">
                <div className=" w-full flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700 w-[29%] mb-1">
                    Necessary tasks
                  </label>
                  <div className="flex space-x-4 w-full">
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Necessary
                      </span>
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
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">Rework</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full flex justify-between items-center py-5">
              <label className="block w-[29%] text-sm font-medium text-gray-700 mb-1">
                Detail Info.
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
      {/* Remark */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Remark</h2>
        </div>
        <div className="border-b pb-8">
          <div className=" mx-10 ">
            <div className="w-full flex justify-between items-center ">
              <label className="block w-[29%] text-sm font-medium text-gray-700 mb-1">
                Detail Info.
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-between items-center py-5">
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

export default MaintenanceReportRegister;
