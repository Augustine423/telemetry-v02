import { X, Edit } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DroneModelDetailPopupTable = ({ onClose, data, onEdit }) => {
  const modelData = [
    {
      id: "1",
      model: "F12345",
      kind: "Kind text",
      weight: "weight text",
      maxradius: "Max Radous text",
      flighttime: "flighttime text",
      manufacturer: "manufacturer text",
      size: "size text",
      maxaltitude: "maxaltitude text",
      flightspeed: "flightspeed text",
    },
  ];

  // Close popup
  const closePopup = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          {/* Left Side: Title & Edit Button */}
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">MDT-V290 Specifications</h2>
            <Link className="p-2 text-gray-500 hover:text-gray-700">
              <Edit className="w-5 h-5" onClick={onEdit} />
            </Link>
          </div>

          {/* Right Side: Close Button */}
          <button
            onClick={closePopup}
            className="hover:text-red-700 text-blue-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form for validation */}
        {modelData.map((item) => (
          <div className="grid grid-cols-2 gap-4 mt-4" key={item.id}>
            {/* Each Row */}
            <div className="col-span-2 grid grid-cols-2 border-b border-gray-300 py-2">
              {/* Left Column (Model) */}
              <div className="flex justify-between pr-4">
                <span className="text-sm font-medium">Model:</span>
                <span className="text-sm text-gray-600">{item.model}</span>
              </div>

              {/* Right Column (Manufacturer) */}
              <div className="flex justify-between pl-4">
                <span className="text-sm font-medium">Manufacturer:</span>
                <span className="text-sm text-gray-600">
                  {item.manufacturer}
                </span>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 border-b border-gray-300 py-2">
              {/* Left Column (Model) */}
              <div className="flex justify-between pr-4">
                <span className="text-sm font-medium">Kind:</span>
                <span className="text-sm text-gray-600">{item.kind}</span>
              </div>

              {/* Right Column (Manufacturer) */}
              <div className="flex justify-between pl-4">
                <span className="text-sm font-medium">Size:</span>
                <span className="text-sm text-gray-600">{item.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneModelDetailPopupTable;
