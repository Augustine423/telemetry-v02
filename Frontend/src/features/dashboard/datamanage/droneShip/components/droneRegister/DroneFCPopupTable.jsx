// import { useState } from "react";
// import Pagination from "../../../../../../components/Pagination";
// import { X } from "lucide-react";
// import { CheckSquare, Square } from "lucide-react";

// // eslint-disable-next-line react/prop-types
// const DroneFCPopupTable = ( { onClose, data }) => {
//   const [checked, setChecked] = useState(false);

//   const closePopup = () => {
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">FC Select</h2>
//           <button
//             onClick={closePopup}
//             className=" hover:text-red-700 text-blue-500"
//           >
//             <X className="size-6 " />
//           </button>
//         </div>

//         {/* Table */}
//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 m-4 ">
//               <tr className=" bg-gray-200 p-6 mx-4 ">
//                 <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
//                 <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
//                   Serial No
//                 </th>
//                 <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
//                   Stock Date
//                 </th>
//                 <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
//                   Life Time
//                 </th>
//                 <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
//                   Use Time
//                 </th>
//                 <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
//               </tr>
//             </thead>
//             <tbody>
              // <tr>
              //   <td className="px-4 py-3 text-sm text-gray-700">
              //     <button
              //       onClick={() => setChecked(!checked)}
              //       className="flex items-center space-x-2"
              //     >
              //       {checked ? (
              //         <CheckSquare className="w-5 h-5 text-blue-500" />
              //       ) : (
              //         <Square className="w-5 h-5 text-gray-400" />
              //       )}
              //     </button>
              //   </td>
              //   <td className="px-4 py-3 text-sm text-gray-700">F12345</td>
              //   <td className="px-4 py-3 text-sm text-gray-700">2023-10-01</td>
              //   <td className="px-4 py-3 text-sm text-gray-700">5 years</td>
              //   <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
              //   <td className="px-4 py-3 text-sm text-gray-700"></td>
              // </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Buttons (Moved Outside Table) */}
//         <div className="flex justify-end gap-4 mt-4">
//           <button
//             onClick={() => navigate("/dashboard/company-overview")}
//             type="button"
//             className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-gray-300 rounded-md text-primary hover:bg-primary hover:text-white"
//           >
//             Save
//           </button>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-4">
//           <Pagination />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DroneFCPopupTable;


import { useState } from "react";
import { useForm } from "react-hook-form";
import Pagination from "../../../../../../components/Pagination";
import { X, CheckSquare, Square } from "lucide-react";

// eslint-disable-next-line react/prop-types
const DroneFCPopupTable = ({ onClose, data }) => {

  const droneData = [
    {
      id: "1",
      serialNo: "F12345",
      stockDate: "2023-10-01",
      lifeTime: "5 years",
      useTime: "2 years",
    },
    {
      id: "2",
      serialNo: "F67890",
      stockDate: "2022-05-15",
      lifeTime: "3 years",
      useTime: "1 year",
    },
  ];
  // Track which rows are checked
  const [checkedRows, setCheckedRows] = useState({});

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // Prevent validation when clicking the checkbox
  });

  // Toggle checkbox for a row
  const toggleCheck = (id) => {
    setCheckedRows((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle specific row's checkbox
    }));
  };

  // Close popup
  const closePopup = () => {
    onClose();
  };

  const onSubmit=(data)=>{  
    console.log(data);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">FC Select</h2>
          <button
            onClick={closePopup}
            className="hover:text-red-700 text-blue-500"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Form for validation */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="bg-gray-200">
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
                </tr>
              </thead>
              <tbody>
                {droneData.map((row) => (
                  <tr key={row.id} className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <button
                        onClick={() => toggleCheck(row.id)}
                        className="flex items-center space-x-2"
                        type="button"
                      >
                        {checkedRows[row.id] ? (
                          <CheckSquare className="w-5 h-5 text-blue-500" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {row.serialNo}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {row.stockDate}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {row.lifeTime}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {row.useTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={closePopup}
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-300 rounded-md text-primary hover:bg-primary hover:text-white"
            >
              Save
            </button>
          </div>
        </form>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default DroneFCPopupTable;
