
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import Pagination from "../../../../../components/Pagination";
// import { MoreHorizontal } from "lucide-react";
// import { Link } from "react-router-dom";
// import { fetchMechanics } from "../../../../../stores/informationData/mechanicSlice";

// // import image from "../../../../../assets/vesselPhoto/shipimage.jpg"


// const MechanicGridView = () => {
//   const dispatch = useDispatch();

  // const { mechanics, loading, error } = useSelector(
  //   (state) => state.mechanics|| {}
  // );

  

//   useEffect(() => {
//     dispatch(fetchMechanics());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if(!mechanics) return <div className=" h-40 flex justify-center items-center bg-gray-400 rounded-lg">
//   <p className="text-white">Empty Mechanic</p>
// </div>

//   console.log(mechanics);

//   return (
    
//     <>
  
//      {/* Grid Content */}
//      <div id="printArea" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//      {mechanics.map((mechanic, i) => (
//        <div key={i} className="rounded-xl overflow-hidden w-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
//          {/* Header Section */}
//          <div className="p-4 flex items-center justify-between ">
//            <h3 className="text-lg font-semibold text-gray-800">{mechanic.mechanicName}</h3>
//            <button className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200">
//              <MoreHorizontal className="w-5 h-5 text-gray-600" />
//            </button>
//          </div>

//          {/* Image Section */}
//          <div className="aspect-[3/2] w-full h-[166px] p-4 flex items-center ">
//            <img src={mechanic.mechanicImg} alt={mechanic.mechanicName} className="w-full h-full object-contain bg-[#EEEEEE] rounded-lg" />
//          </div>

//          {/* Details Section */}
//          <div className="p-4 space-y-3">
//            <div className="flex justify-between items-center">
//              <span className="text-sm text-gray-500">Employee No:</span>
//              {/* <span className="text-sm font-medium text-gray-800">{mechanic.coRegisterNo}</span> */}
//            </div>
//            <div className="flex justify-between items-center">
//              <span className="text-sm text-gray-500">E-mail:</span>
//              <span className="text-sm font-medium text-gray-800">{mechanic.mechanicEmail}</span>
//            </div>
//            <div className="flex justify-between items-center">
//              <span className="text-sm text-gray-500">Position:</span>
//              <span className="text-sm font-medium text-gray-800">{mechanic.mechanicPosition}</span>
//            </div>
          
//          </div>

//          {/* Detail Button Section */}
//          <div className="p-4 pt-0">
//            <Link
//              to={`/dashboard/mechanic-detail/${mechanic.mechanicId}`}
//              className="block w-full py-2 text-center text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200 font-medium"
//            >
//              Detail
//            </Link>
//          </div>
//        </div>
//      ))}
//    </div>

//    {/* Pagination Section */}
//    <div className="mt-8">
//      <Pagination />
//    </div>
//     </>
//   )
// }

// export default MechanicGridView

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pagination from "../../../../../components/Pagination";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { deleteMechanic, fetchMechanics } from "../../../../../stores/informationData/mechanicSlice";

import { usePopup } from "../../droneShip/hooks/usePopup";
import PilotEmptyStage from "../../pilot/components/PilotEmptyStage";

const MechanicGridView = () => {
  const dispatch = useDispatch();

    const popup = usePopup();

    const { mechanics, loading, error } = useSelector(
      (state) => state.mechanics|| {}
    );

  useEffect(() => {
    dispatch(fetchMechanics());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!mechanics)
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
          await dispatch(deleteMechanic(pilotsId)).unwrap();
          dispatch(fetchMechanics());
        } catch (error) {
          console.error("Error while deleting company:", error);
        }
      };

  console.log("this is pilots", mechanics);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        {/* Grid Content */}
        
          <div
            id="printArea"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {mechanics.map((mechanic, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden w-full max-w-sm bg-[#FFFFFF] border"
              >
                <div className="p-4 flex items-start justify-between border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      src={mechanic.mechanicImg}
                      // alt={pilot.pilotName}
                      className="w-28 h-28 object-cover bg-[#EEEEEE] rounded-full"
                    />
                    <h3 className="text-[#111111] text-md">
                      {mechanic.mechanicName}
                    </h3>
                  </div>
                  
                  <div className="relative">
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => popup.open(mechanic.mechanicId)}
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
                {popup.isOpen && popup.popupData === mechanic.mechanicId && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDeleteBtn(mechanic.mechanicId)}
                    >
                      <div className="flex items-center gap-3">
                        <Trash className="size-5" />
                        <span className=" text-md">Delete</span>
                      </div>
                    </button>
                    <Link
                      to={`/dashboard/mechanic-edit/${mechanic.mechanicId}`}
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
              {popup.isOpen && popup.popupData === mechanic.mechanicId && <div className="fixed inset-0 z-0" onClick={popup.close} />}
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Employee No:</span>
                    <span className="text-black">{mechanic.mechanicId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">E-mail:</span>
                    <span className="text-black text-sm">{mechanic.mechanicEmail}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Position:</span>
                    <span className="text-black text-sm">{mechanic.mechanicPosition}</span>
                  </div>
                  
                </div>

                <div className="p-4 pt-0">
                  <Link
                    // eslint-disable-next-line no-undef
                    to={`/dashboard/mechanic-detail/${mechanic.mechanicId}`}
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

export default MechanicGridView;
