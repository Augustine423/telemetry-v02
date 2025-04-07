import { Edit, Ellipsis, Info, Trash2 } from "lucide-react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { usePopup } from "../../droneShip/hooks/usePopup";
import { useRef } from "react";
import { usePopupPosition } from "../../shipcompany/hooks/usePopupPosition";
import { deleteMechanic, fetchMechanics } from "../../../../../stores/informationData/mechanicSlice";


const MechanicRow = ({mechanic}) => {

  const dispatch = useDispatch();
  const popup = usePopup();
  const rowRef = useRef(null);

  // Use the custom hook for popup positioning
  const { popupRef, popupStyle } = usePopupPosition(
    popup.isOpen && popup.popupData === mechanic.mechanicId,
    rowRef
  );

  const handleDeleteBtn = async (mechanicsId) => {
    if (!mechanicsId) return;
    try {
      await dispatch(deleteMechanic(mechanicsId)).unwrap();
      dispatch(fetchMechanics());
    } catch (error) {
      console.error("Error while deleting pilot:", error);
    } finally {
      popup.close();
    }
  };

  return (
    <>
    <tr id="printArea" className="hover:bg-gray-100 border-b" ref={rowRef}>
      <td className="px-4 py-3">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={mechanic.mechanicImg}
            alt={mechanic.mechanicName}
            className="w-[69px] h-auto object-contain"
          />
        </div>
      </td>
      <td className="px-4 py-3 text-sm">{mechanic.mechanicName}</td>
      <td className="px-4 py-3 text-sm">text</td>
      <td className="px-4 py-3 text-sm">{mechanic.mechanicEmail}</td>
      <td className="px-4 py-3 text-sm">{mechanic.mechanicPosition}</td>
     

      {/* <td className="px-4 py-3 text-sm">
        <Link
          to={`/dashboard/mechanic-detail/${mechanic.mechanicId}`}
          className="text-gray-400 hover:text-gray-600"
        >
          <Ellipsis/>
        </Link>
      </td> */}
      <td className="px-4 py-3 text-sm relative">
        <button
          className="text-gray-400 hover:text-gray-600 p-1 rounded-full"
          onClick={() => popup.open(mechanic.mechanicId)}
          aria-label="More options"
        >
          <Ellipsis />
        </button>

        {popup.isOpen && popup.popupData === mechanic.mechanicId && (
          <>
            {/* Overlay that captures clicks outside the popup */}
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onClick={popup.close}
            />

            {/* Popup menu */}
            <div
              ref={popupRef}
              className="fixed w-40 bg-white shadow-lg rounded-md border border-gray-200 z-50"
              style={{
                top: popupStyle.top,
                right: popupStyle.right,
              }}
            >
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={() => handleDeleteBtn(mechanic.mechanicId)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </button>
              <Link
                to={`/dashboard/mechanic-edit/${mechanic.mechanicId}`}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={popup.close}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Link>
              <Link
                to={`/dashboard/mechanic-detail/${mechanic.mechanicId}`}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={popup.close}
              >
                <Info className="w-4 h-4 mr-2" /> Details
              </Link>
            </div>
          </>
        )}
      </td>
    </tr>
  </>
  )
}

export default MechanicRow