





import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../components/Pagination";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchMechanicById } from "../../../../../stores/informationData/mechanicSlice";
import MaterialUseListTable from "./MaterialUseListTable";

const MaterialDetailUI = () => {
  const { id } = useParams();
  console.log(id);

  // const dispatch = useDispatch();

  // // Fetch company details when the component mounts
  // useEffect(() => {
  //   dispatch(fetchMechanicById(id));
  // }, [dispatch, id]);

  // // Access the fetched company details from the Redux store
  // const currentMechanic = useSelector((state) => state.mechanics.currentMechanic);

  // const loading = useSelector((state) => state.mechanics.loading);
  // const error = useSelector((state) => state.mechanics.error);

  // // Display loading or error states
  // if (loading) {
  //   return <p>Loading mechanic details...</p>;
  // }

  // if (error) {
  //   return <p className="text-red-500">Error: {error}</p>;
  // }

  // // Prevent rendering if currentMechanic is undefined
  // if (!currentMechanic) {
  //   return <p className="text-red-500">Mechanic not found.</p>;
  // }

  // console.log("Mechanic ID:", currentMechanic); //localhost:8080/aioceaneye/mechanics/10

  return (
    <>
      {/* Material Details Card */}
      <div id="printArea" className="bg-white rounded-md shadow-md p-6 mb-6">
        <h2 className="text-lg font-bold mb-6">Material Name</h2>

        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
  {/* Material Image */}
  <div className="col-span-1 flex items-center">
    <div className="w-[280px] h-[150px] bg-gray-100 rounded-md flex items-center justify-center">
      <img
        src="images/mechanic.jpg"
        alt="Mechanic Image"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  </div>

  {/* Material Details */}
  <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-4 border-b border-gray-300">
    
    {/* ModelName & Manufacturer */}
    <div className="col-span-2 flex justify-between items-center border-y border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
          <span className="text-sm font-medium">Model</span>
          {/* <span className="text-sm text-gray-600">{currentMechanic.mechanicName}</span> */}
          <span className="text-sm text-gray-600">Motel text</span>
        </div>
        <div className="flex-1 flex justify-between">
          <span className="text-sm font-medium">Manufacturer</span>
          <span className="text-sm text-gray-600">Manufacturer text</span>
        </div>
      </div>
    </div>

 {/* Storage  Area */} {/* Place of Buy */}
    <div className="col-span-2 flex justify-between items-center border-b border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
          <span className="text-sm font-medium">Storage  Area</span>
          <span className="text-sm text-gray-600">Storage Area text</span>
        </div>
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Place of Buy</span>
        <span className="text-sm text-gray-600">Place of Buy text</span>
        </div>
      </div>
    </div>

 {/* Serial No */}{/* Stock Date */}
    <div className="col-span-2 flex justify-between items-center border-b border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Serial No</span>
        <span className="text-sm text-gray-600">Serial No text</span>
        </div>
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Stock Date</span>
      <span className="text-sm text-gray-600">Stock Date text</span>
        </div>
      </div>
    </div>
 {/* Life Time */} {/* Use Time */}
 <div className="col-span-2 flex justify-between items-center border-b border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
          <span className="text-sm font-medium">Life Time</span>
          <span className="text-sm text-gray-600">Life Time text</span>
        </div>
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Use Time</span>
        <span className="text-sm text-gray-600">Use Time text</span>
        </div>
      </div>
    </div>

 {/* Use No */}{/* Expected
replacement Time*/}
    <div className="col-span-2 flex justify-between items-center border-b border-gray-300 pb-2">
      <div className="flex gap-10 w-full">
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Use No</span>
        <span className="text-sm text-gray-600">Use No text</span>
        </div>
        <div className="flex-1 flex justify-between">
        <span className="text-sm font-medium">Expected
        replacement Time</span>
      <span className="text-sm text-gray-600">Expected
      replacement Time text</span>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Vessels List */}
        <div className="pt-12">
          <h2 className="text-lg font-bold mb-4">Use List</h2>

          <MaterialUseListTable  />
        </div>
        
      </div>
    </>
  );
};

export default MaterialDetailUI;
