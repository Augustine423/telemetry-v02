import { CheckCircle, Info } from "lucide-react";
import { usePopup } from "../hooks/usePopup";
import DroneFCPopupTable from "./droneRegister/DroneFCPopupTable";
import DroneModelDetailPopupTable from "./DroneModelDetailPopupTable";
import DroneModelDetailEditForm from "./DroneModelDetailEditForm";
const DroneDetail = () => {
  const servoData = [
    {
      name: "Left Aileron",
      data: ["text", "text", "text", "text", "text"],
      status: "yellow",
    },
    {
      name: "Right Aileron",
      data: ["text", "text", "text", "text", "text"],
      status: "red",
    },
    {
      name: "Elevator",
      data: ["text", "text", "text", "text", "text"],
      status: "green",
    },
    {
      name: "Rudder",
      data: ["text", "text", "text", "text", "text"],
      status: "yellow",
    },
  ];

  const materials = [
    {
      name: "FC",
      batchNo: "CF-2023-001",
      stockDate: "2023-01-15",
      mfgDate: "120 days",
      description: "45 days",
      materialRestTime: "20 days",
      status: "good",
      isSubItem: false,
    },
    {
      name: "GPS",
      batchNo: "CF-2023-001-B1",
      stockDate: "2023-01-15",
      mfgDate: "120 days",
      description: "30 days",
      materialRestTime: "40 days",
      status: "good",
      isSubItem: true,
    },
    {
      name: "Camera",
      batchNo: "CF-2023-001-B2",
      stockDate: "2023-01-20",
      mfgDate: "115 days",
      description: "35 days",
      status: "warning",
      materialRestTime: "30 days",
      isSubItem: true,
    },
    {
      name: "RC",
      batchNo: "AL-2023-042",
      stockDate: "2023-02-10",
      mfgDate: "90 days",
      description: "60 days",
      status: "warning",
      materialRestTime: "20 days",
      isSubItem: false,
    },
    {
      name: "Converter",
      batchNo: "CR-2023-118",
      stockDate: "2023-03-05",
      mfgDate: "45 days",
      description: "40 days",
      status: "danger",
      materialRestTime: "20 days",
      isSubItem: false,
    },
    {
      name: "Powerboard",
      batchNo: "CR-2023-118-A",
      stockDate: "2023-03-05",
      mfgDate: "45 days",
      description: "42 days",
      status: "danger",
      materialRestTime: "20 days",
      isSubItem: true,
    },

    {
      name: "UBC",
      batchNo: "CR-2023-118",
      stockDate: "2023-03-05",
      mfgDate: "45 days",
      description: "40 days",
      status: "danger",
      materialRestTime: "20 days",
      isSubItem: false,
    },
    {
      name: "Air Speed Sensor",
      batchNo: "CR-2023-118-A",
      stockDate: "2023-03-05",
      mfgDate: "45 days",
      description: "42 days",
      status: "danger",
      materialRestTime: "20 days",
      isSubItem: true,
    },
  ];
  const modelinfoPopup = usePopup();

  const handleModelInfo = () => {
    modelinfoPopup.open(); // Open the model info popup
  };

  return (
    <>
      {/* Header Section */}

      <div className="bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
        {/* Drone Image Upload Section */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-black-700">
            Model : Serial No
          </h2>
          <div className="grid grid-cols-3 my-6">
            {/* Model Logo Upload */}
            <div className="col-span-1 h-36">
              <div className="w-64 relative">
                <div className="bg-gray-300 rounded-md h-36 flex flex-col items-center justify-center relative">
                  <div className="w-[280px] h-[150px] bg-gray-100 rounded-md flex items-center justify-center">
                    <img
                      src="serial image"
                      alt="serial image"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Drone Details Section */}
            <div className="grid grid-cols-2 gap-4 mb-6 mt-4 col-span-2 border-b">
              {/* Left Column */}
              <div className="col-span-2">
                {/* First Row: Model and Serial No */}
                <div className="flex items-center mb-6 border-b">
                  <div className="flex items-center gap-3 w-1/2">
                    <label className="w-32 text-sm font-medium mt-2">
                      Model
                    </label>
                    <span className="text-gray-500">V290</span>
                    <Info
                      className="size-5 text-gray-500"
                      onClick={handleModelInfo}
                    />
                    {modelinfoPopup.isOpen && !modelinfoPopup.isEditMode && (
                      <DroneModelDetailPopupTable
                        onClose={modelinfoPopup.close}
                        onEdit={modelinfoPopup.openEdit} // Pass edit handler
                      />
                    )}
                    {modelinfoPopup.isOpen && modelinfoPopup.isEditMode && (
                      <DroneModelDetailEditForm
                        onClose={modelinfoPopup.close}
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-3 w-1/2">
                    <label className="w-32 text-sm font-medium mt-2">
                      Serial No
                    </label>
                    <span className="text-gray-500">Serial No text</span>
                  </div>
                </div>

                {/* Second Row: Drone ID */}
                <div className="flex items-center">
                  <label className="w-32 text-sm font-medium mt-2">
                    Drone ID
                  </label>
                  <span className="text-gray-500">Drone ID text</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material Info Section */}
        <div className="mt-12">
          <h2 className="text-lg font-medium text-black mb-2">Material Info</h2>
          <div
            id="printArea"
            className="overflow-x-auto bg-white border-y rounded-md"
          >
            <table className="w-full ">
              {/* Table Head */}
              <thead className="bg-gray-300 text-left">
                <tr>
                  <th
                    colSpan={2}
                    className="px-4 py-3 text-md font-medium text-gray-600"
                  >
                    Model
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-600">
                    Serial No
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-600">
                    Stock Date
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-600">
                    Estimate Rest Time
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-600">
                    Use Time
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-600">
                    Material Rest Time
                  </th>
                  <th className="px-4 py-3 text-md font-medium text-gray-600"></th>
                </tr>
              </thead>

              {/* Table Body */}

              <tbody>
                {materials.map((row, index) => (
                  <tr key={index} className="border-b bg-white">
                    {/* Model Name */}
                    <td className={`px-4 py-3 font-semibold   `}>{row.name}</td>
                    <td
                      className={`px-4 py-3 ${
                        row.isSubItem ? "pl-8 text-gray-400" : "font-semibold"
                      }`}
                    ></td>

                    {/* Batch No */}
                    <td className={`px-4 py-3 font-semibold `}>
                      {row.batchNo}
                    </td>

                    {/* Stock Date */}
                    <td className="px-4 py-3">{row.stockDate || "text"}</td>

                    {/* Estimate Rest Time */}
                    <td className="px-4 py-3">{row.mfgDate || "text"}</td>

                    {/* Use Time */}
                    <td className="px-4 py-3">{row.description || "text"}</td>

                    {/* Material Rest Time */}
                    <td className="px-4 py-3">
                      {row.materialRestTime || "text"}
                    </td>

                    {/* Status Indicator */}
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          row.status === "good"
                            ? "bg-green-500"
                            : row.status === "warning"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      ></span>
                    </td>
                  </tr>
                ))}
                {servoData.map((servo, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-100 transition-colors  
              `}
                  >
                    {index === 0 && (
                      <td
                        rowSpan={4}
                        className="align-middle font-bold text-start  px-6 py-4 border-b border-gray-200"
                      >
                        <span className="font-semibold  ">Servo</span>
                      </td>
                    )}

                    <td className="font-medium border-r-2   border-l-blue-100 px-6 py-4 text-gray-500">
                      {servo.name}
                    </td>

                    {servo.data.map((text, i) => (
                      <td key={i} className="px-6 py-4 ">
                        {text}
                      </td>
                    ))}
                    <td className="text-center px-6 py-4 ">
                      <span className="relative inline-flex">
                        <span
                          className={`
                      w-3 h-3 rounded-full inline-block 
                      ${
                        servo.status === "red"
                          ? "bg-red-500"
                          : servo.status === "yellow"
                          ? "bg-amber-400"
                          : "bg-emerald-500"
                      }
                    `}
                        />
                        <span
                          className={`
                      animate-ping absolute inline-flex h-full w-full rounded-full opacity-50
                      ${
                        servo.status === "red"
                          ? "bg-red-400"
                          : servo.status === "yellow"
                          ? "bg-amber-300"
                          : "bg-emerald-400"
                      }
                    `}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DroneDetail;
