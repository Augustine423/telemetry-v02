import React from "react";
import { useState } from "react";
import {
  BsFillCaretDownFill,
  BsPlusCircleFill,
  BsFillFileEarmarkArrowUpFill,
} from "react-icons/bs";
import ReportSelectBox from "./ReportSelectBox";
const WorkReportRegister = () => {
  
  const [workItems, setWorkItems] = useState([{ id: 1 }]);
  const [subItems, setSubItems] =useState([{id:2}]);
  const [file, setFile] = useState(null);
  const addWorkItem = () => {
    const newId =
      workItems.length > 0
        ? Math.max(...workItems.map((item) => item.id)) + 1
        : 1;
    setWorkItems([...workItems, { id: newId }]);
  };
  
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
                <div className="w-full flex justify-between items-center py-5">
                  <label className="w-[29%] block text-sm font-medium text-gray-700 mb-1">
                    Work for Creation
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

          {/* Work for Creation Section */}
          <div className="mb-8 border-b">
            <div className="flex items-center justify-between mb-4 border-b py-3 ">
              <div className="flex items-center ">
                <h2 className="text-md font-medium text-gray-800">
                  Work for Creation
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
            <div className="mx-10 ">
              {workItems.map((item) => (
                <div key={item.id} className="py-5 border-b">
                  <div className="mb-4 w-full flex justify-between items-center">
                    <label className="block w-[29%] text-sm font-medium text-gray-700 mb-1">
                      Work detail
                    </label>
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="mb-4 w-full flex justify-between items-center">
                    <label className="block text-sm font-medium text-gray-700 w-[29%] mb-1">
                      Progress
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
                          Complete
                        </span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`progress-${item.id}`}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Ongoing
                        </span>
                      </label>
                      <label className="inline-flex items-center ">
                        <input
                          type="radio"
                          name={`progress-${item.id}`}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Rework
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <label className="block w-[29%] text-sm font-medium text-gray-700 mb-1">
                      Result
                    </label>
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
              {/* {subItems.map((item) => (
                <div key={item.id} className="py-5 ">
                  <div className="mb-4 w-full flex justify-between items-center">
                    <label className="block w-[29%] text-sm font-medium text-gray-700 mb-1">
                      Work detail
                    </label>
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="mb-4 w-full flex justify-between items-center">
                    <label className="block text-sm font-medium text-gray-700 w-[29%] mb-1">
                      Progress
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
                          Complete
                        </span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`progress-${item.id}`}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Ongoing
                        </span>
                      </label>
                      <label className="inline-flex items-center ">
                        <input
                          type="radio"
                          name={`progress-${item.id}`}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Rework
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <label className="block w-[29%] text-sm font-medium text-gray-700 mb-1">
                      Result
                    </label>
                    <input
                      type="text"
                      placeholder="Please Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              ))} */}
            </div>
          </div>

          {/* Issues and obstacles Section */}
          <div className="mb-8 border-b pb-5">
            <div className="border-b py-3 mb-4">
              <h2 className="text-md font-medium text-gray-800 ">
                Issues and obstacles
              </h2>
            </div>
            <div className="mx-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="w-[29%] block text-sm font-medium text-gray-700 mb-1">
                    problem
                  </label>
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <label className="w-[29%] block text-sm font-medium text-gray-700 mb-1">
                    Cause
                  </label>
                  <input
                    type="text"
                    placeholder="Please Enter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <label className="w-[29%] block text-sm font-medium text-gray-700 mb-1">
                    Sign
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

          {/* Other Report Section */}
          <div className="mb-8 border-b pb-5">
            <div className="border-b pb-5 mb-4">
              <h2 className="text-md font-medium text-gray-800 ">
                Other Report
              </h2>
            </div>
            <div className="space-y-4 mx-10">
              <div className="flex justify-between items-center">
                <label className="w-[29%] block text-sm font-medium text-gray-700 mb-1">
                  Cause
                </label>
                <input
                  type="text"
                  placeholder="Please Enter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="w-[29%] block text-sm font-medium text-gray-700 mb-1">
                  Detail
                </label>
                <input
                  type="text"
                  placeholder="Please Enter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Reference file Section */}
          <div className="mb-8 border-b pb-5">
            <div className="border-b pb-5 mb-4">
              <h2 className="text-md font-medium text-gray-800 ">
                Reference file
              </h2>
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

export default WorkReportRegister;
