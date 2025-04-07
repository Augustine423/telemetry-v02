import React from "react";
import { useState } from "react";

import { X } from "lucide-react";
import { CheckSquare, Square } from "lucide-react";
import Pagination from "../../../../../../components/Pagination";
const DroneConverterPopupTable = ({ onClose }) => {
  const [checked, setChecked] = useState(false);

  const closePopup = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Converter Select</h2>
          <button
            onClick={closePopup}
            className=" hover:text-red-700 text-blue-500"
          >
            <X className="size-6 " />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 m-4 ">
              <tr className=" bg-gray-200 p-6 mx-4 ">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Serial No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Stock Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Life Time
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Use Time
                </th>

                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className=" ">
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700">
                  <button
                    onClick={() => setChecked(!checked)}
                    className="flex items-center space-x-2"
                  >
                    {checked ? (
                      <CheckSquare className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-400" />
                    )}
                    {/* <span className="text-sm">I agree to the terms</span> */}
                  </button>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">C13589</td>
                <td className="px-4 py-3 text-sm text-gray-700">2023-10-20</td>
                <td className="px-4 py-3 text-sm text-gray-700">1 years</td>
                <td className="px-4 py-3 text-sm text-gray-700">5 years</td>
                <td className="px-4 py-3 text-sm text-gray-700"></td>
              </tr>
              {/* {loading ? (
                <PageLoading />
              ) : companies?.length === 0 ? (
                <NotFound />
              ) : (
                companies.map((company) => (
                  <CompanyInformationRow company={company} key={company.id} />
                ))
              )} */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default DroneConverterPopupTable;
