import { useEffect, useRef, useState } from "react";
import { Edit, Info, MoreHorizontal, Trash2 } from "lucide-react";
import Pagination from "../../../../../components/Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usePopup } from "../../droneShip/hooks/usePopup";
import { usePopupPosition } from "../../shipcompany/hooks/usePopupPosition";
import { fetchMaterials } from "../../../../../stores/informationData/materialSlice";
import MaterialListRow from "./MaterialListRow";

const MaterialList = () => {
  const [isChecked, setIsChecked] = useState();
const dispatch=useDispatch();

const { materials, loading, error } = useSelector(
  (state) => state.materials || {}
);

console.log("materials",materials);

useEffect(() => {
  dispatch(fetchMaterials());
}, [dispatch]);

  
  const popup = usePopup();
  const rowRef = useRef(null);
  
  // Use the custom hook for popup positioning
  const { popupRef, popupStyle } = usePopupPosition(
    popup.isOpen && popup.popupData === materials.id,
    rowRef
  );



  return (
    <>
    <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
      <div
        id="printArea"
        className="bg-white X-6  mx-auto rounded-md w-full py-8 "
      >
        <div className="mb-6">
          <h2 className="text-lg font-medium  border-b">
            Detail Material Select
          </h2>

          {/* Filter Options */}
          <div className="grid grid-cols-7 gap-4 mb-12">
            {[
              "FC (00)",
              "GPS (00)",
              "RC (00)",
              "Converter (00)",
              "UBC (00)",
              "Air Speed Sensor (00)",
              "Camera (00)",
              "Data Link Air (00)",
              "Data Link Ground (00)",
              "Smart Flight Adapter (00)",
              "Servo Elevator (00)",
              "Servo Rudder (00)",
              "ESC (00)",
              "Propellers (00)",
              "Propellers (00)0"
            ].map((item, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 text-md text-gray-500"
              >
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Materials Table */}
        <div className="overflow-x-auto  rounded-md mt-6">
          <table className="w-full">
            <thead className=" m-4">
              <tr className=" bg-gray-200 X-6 mx-4" >
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  No
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  Image
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  Model
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  Serial No
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  Manufacturer
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  Use Status
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  Use Time/Life Time
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material, index) => (
                <MaterialListRow key={index} material={material}/>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="mt-8">
          <Pagination />
        </div>
      </div>
      </div>
    </>
  );
};

export default MaterialList;
