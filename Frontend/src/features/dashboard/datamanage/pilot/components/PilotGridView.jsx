import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pagination from "../../../../../components/Pagination";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import PilotEmptyStage from "./PilotEmptyStage";
import { deletePilot, fetchPilots } from "../../../../../stores/informationData/pilotSlice";
import { usePopup } from "../../droneShip/hooks/usePopup";

const PilotGridView = () => {
  const dispatch = useDispatch();

    const popup = usePopup();

  const { pilots, loading, error } = useSelector((state) => state.pilots || {});

  useEffect(() => {
    dispatch(fetchPilots());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pilots)
    return (
      <div className=" h-40 flex justify-center items-center bg-gray-400 rounded-lg">
        <p className="text-white">
          <PilotEmptyStage />
        </p>
      </div>
    );

      const handleDeleteBtn = async (pilotsId) => {
        if (!pilotsId) return;
        try {
          await dispatch(deletePilot(pilotsId)).unwrap();
          dispatch(fetchPilots());
        } catch (error) {
          console.error("Error while deleting company:", error);
        }
      };

  console.log("this is pilots", pilots);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        {/* Grid Content */}
        
          <div
            id="printArea"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {pilots.map((pilot, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden w-full max-w-sm bg-[#FFFFFF] border"
              >
                <div className="p-4 flex items-start justify-between border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      src={pilot.pilotImg}
                      // alt={pilot.pilotName}
                      className="w-28 h-28 object-cover bg-[#EEEEEE] rounded-full"
                    />
                    <h3 className="text-[#111111] text-md">
                      {pilot.pilotName}
                    </h3>
                  </div>
                  
                  <div className="relative">
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => popup.open(pilot.pilotId)}
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
                {popup.isOpen && popup.popupData === pilot.pilotId && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDeleteBtn(pilot.pilotId)}
                    >
                      <div className="flex items-center gap-3">
                        <Trash className="size-5" />
                        <span className=" text-md">Delete</span>
                      </div>
                    </button>
                    <Link
                      to={`/dashboard/pilot-edit/${pilot.pilotId}`}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={popup.close}
                    >
                      <div className="flex items-center gap-3">
                        <Edit className="size-5" />
                        <span className=" text-md">Edit</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {popup.isOpen && popup.popupData === pilot.pilotId && <div className="fixed inset-0 z-0" onClick={popup.close} />}
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Employee No:</span>
                    <span className="text-black">{pilot.pilotId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Certificate No:</span>
                    <span className="text-black">{pilot.pilotCerNo}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Flight No:</span>
                    <span className="text-black">Flight No</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Flight Time:</span>
                    <span className="text-black">48</span>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    // eslint-disable-next-line no-undef
                    to={`/dashboard/pilot-detail/${pilot.pilotId}`}
                    className="block w-full py-2 text-center text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-700 hover:text-white transition-colors"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Pagination />
       
      </div>
    </>
  );
};

export default PilotGridView;
