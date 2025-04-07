import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsFillCaretDownFill, BsPlusCircleFill } from "react-icons/bs";
const HandoverReportRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [workItems, setWorkItems] = useState([{ id: 1 }]);

  const addWorkItem = () => {
    const newId =
      workItems.length > 0
        ? Math.max(...workItems.map((item) => item.id)) + 1
        : 1;
    setWorkItems([...workItems, { id: newId }]);
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
              <label className="w-1/3 block text-sm font-medium c mb-1">
                Vessel
              </label>
              <input
                type="text"
                placeholder="Fix to the connected vessel"
                className="w-2/3 px-3 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-2/3 py-5 flex flex-row justify-between">
              <label
                htmlFor="startDate"
                className="w-1/3 text-gray-700 font-semibold text-base"
              >
                Handover Date
              </label>
              <div className="flex justify-between items-start text-gray-400 w-2/3">
                <div className="">
                  <input
                    type="date"
                    placeholder="Select Date"
                    {...register("startDate", {
                      required: "Start date is required.",
                    })}
                    className="px-3 appearance-none border border-gray-400  rounded-md flex-1"
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
                    className=" px-3 appearance-none border border-gray-400 rounded-md flex-1"
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
            <div className="w-2/3 flex justify-between items-center ">
              <label className="w-1/3 block text-sm font-medium text-gray-700 mb-1">
                Team Name
              </label>
              <div className="relative w-2/3">
                <select
                  name="vesselInfo"
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm appearance-none text-gray-700"
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
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium c mb-1">
                Transferor
              </label>
              <div className="flex justify-between w-2/3 gap-5">
                <input
                  type="text"
                  placeholder="Internal Pilot"
                  className="w-2/3 px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="External Pilot"
                  className="w-2/3 px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="w-2/3 flex justify-between items-center ">
              <label className="w-1/3 block text-sm font-medium c mb-1">
                Transferee
              </label>
              <div className="flex justify-between w-2/3 gap-5">
                <input
                  type="text"
                  placeholder="Internal Pilot"
                  className="w-2/3 px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="External Pilot"
                  className="w-2/3 px-3 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="w-2/3 flex justify-between items-center py-5">
              <label className="w-1/3 block text-sm font-medium c mb-1">
                Manager
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full flex justify-between items-center ">
              <label className="w-[29%] block text-sm font-medium c mb-1">
                Remarks
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
      {/* Handover detail  */}
      <div className="mb-8 py-5">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div className="flex items-center ">
            <h2 className="text-md font-medium text-gray-800">
              Handover Detail
            </h2>
            <span className="ml-2 text-xs text-gray-500">(Required)</span>
          </div>
          <button
            onClick={addWorkItem}
            className="flex items-center text-sm text-gray-400 hover:text-blue-800 mr-12"
          >
            <BsPlusCircleFill className="w-4 h-4 mr-1" />
            Add item
          </button>
        </div>
        <div className="border-b pb-3">
          <div className=" mx-10 ">
            <table className="w-full">
              <tr className="border-b">
                <th className="text-gray-700 text-center text-base w-20">No</th>
                <th className="text-gray-700 text-start text-base w-44">
                  Work detail
                </th>
                <th className="text-gray-700 text-start text-base w-3 px-5">
                  Remarks
                </th>
              </tr>
              <tr className="w-full py-5">
                <td className="text-center py-5">1</td>
                <td className="py-5 ">
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </td>
                <td className="py-5 px-5">
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </td>
              </tr>
              <tr className="w-full ">
                <td className="text-center ">2</td>
                <td className=" ">
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </td>
                <td className=" px-5">
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </td>
              </tr>
              <tr className="w-full py-5 border-b">
                <td className="text-center py-5">3</td>
                <td className="py-5 ">
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </td>
                <td className="py-5 px-5">
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </td>
              </tr>
              <tr className="w-full ">
                <td className="text-center pt-3">Reference</td>
                <td className="pt-3" colSpan={2}>
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="mb-8 py-5">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div className="flex items-center ">
            <h2 className="text-md font-medium text-gray-800">Item Detail</h2>
            <span className="ml-2 text-xs text-gray-500">(Required)</span>
          </div>
          <button
            onClick={addWorkItem}
            className="flex items-center text-sm text-gray-400 hover:text-blue-800 mr-12"
          >
            <BsPlusCircleFill className="w-4 h-4 mr-1" />
            Add item
          </button>
        </div>
        <div className="border-b pb-3">
          <div className=" mx-10 ">
            <div className=" w-full flex justify-between gap-5">
              <div className="w-2/3 flex justify-between items-center">
                <label className="w-1/3 block text-sm font-medium mb-1">
                  Classification
                </label>
                <input
                  type="text"
                  placeholder="Please Enter"
                  className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-2/3 flex justify-between items-center">
                <label className="w-1/3 block text-sm font-medium mb-1">
                  Item Name
                </label>
                <input
                  type="text"
                  placeholder="Please Enter"
                  className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            {workItems.map((item) => (
              <div
                key={item.id}
                className=" w-full flex justify-between gap-5 py-5"
              >
                <div className="w-2/3 flex justify-between items-center">
                  <label className="w-1/3 block text-sm font-medium mb-1">
                    Status
                  </label>
                  <div className="flex space-x-4 w-2/3">
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                        defaultChecked
                      />
                      <span className="ml-2 text-sm text-gray-700">Unused</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">None</span>
                    </label>
                    <label className="inline-flex items-center ">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Repair Needed
                      </span>
                    </label>
                  </div>
                </div>
                <div className="w-2/3 flex justify-between items-center">
                  <label className="w-1/3 block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}
            <div className=" w-full flex justify-between gap-5">
              <div className="w-2/3 flex justify-between items-center">
                <label className="w-1/3 block text-sm font-medium mb-1">
                  Reference
                </label>
                <input
                  type="text"
                  placeholder="Please Enter"
                  className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-2/3 flex justify-between items-center">
                <label className="w-1/3 block text-sm font-medium mb-1">
                  Required Actions
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
      </div>
      {/* Unresolved Tasks */}
      <div className="mb-8 py-5">
        <div className="flex items-center mb-4 border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">
            Unresolved Tasks
          </h2>
          <span className="ml-2 text-xs text-gray-500">(Required)</span>
        </div>
        <div className="border-b pb-3">
          <div className=" mx-10 ">
            <div className="w-full flex justify-between items-center">
              <label className="w-[29%] block text-sm font-medium  mb-1">
                Unresolved Tasks
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {workItems.map((item) => (
              <div
                key={item.id}
                className=" w-full flex justify-between gap-5 py-5 items-center"
              >
                <label className="w-[27%] block text-sm font-medium mb-1 ">
                  Progress Status
                </label>
                <div className="flex gap-4 w-full">
                  <label className="inline-flex items-center w-40">
                    <input
                      type="radio"
                      name={`progress-${item.id}`}
                      className="form-radio h-4 w-4 text-blue-600"
                      defaultChecked
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Pre-Start
                    </span>
                  </label>

                  <label className="inline-flex items-center w-40">
                    <input
                      type="radio"
                      name={`progress-${item.id}`}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Ongoing</span>
                  </label>

                  <label className="inline-flex items-center w-40">
                    <input
                      type="radio"
                      name={`progress-${item.id}`}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Unconfirmed
                    </span>
                  </label>

                  {/* Input box full width */}
                  <label className="flex items-center w-full">
                    <input
                      type="radio"
                      name={`progress-${item.id}`}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="flex-1 ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </label>
                </div>
              </div>
            ))}
            <div className="w-full flex justify-between items-center">
              <label className="w-[29%] block text-sm font-medium  mb-1">
                Planned Tasks
              </label>
              <input
                type="text"
                placeholder="Please Enter"
                className="w-full   px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full flex justify-between items-center py-5">
              <label className="w-[29%] block text-sm font-medium  mb-1">
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
      {/* Message */}
      <div className="mb-8 py-5">
        <div className="flex items-center border-b pb-3">
          <h2 className="text-md font-medium text-gray-800">Message</h2>
        </div>
        <div className="border-b ">
          <div className=" mx-10 ">
            <div className="w-full flex justify-between items-center py-5">
              <label className="w-[29%] block text-sm font-medium  mb-1">
                Message
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

export default HandoverReportRegister;
