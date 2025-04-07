import { useParams } from "react-router-dom";
import Pagination from "../../../../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVesselById } from "../../../../../stores/informationData/vesselSlice";
import NotFound from "../../../../../components/NotFound";
import VesselRecordTable from "./VesselRecordTable";

const VesselDetailUI = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  // Fetch company details when the component mounts
  useEffect(() => {
    dispatch(fetchVesselById(id));
  }, [dispatch, id]);

  // Access the fetched company details from the Redux store
  const currentVessel = useSelector((state) => state.vessels.currentVessel);

  const loading = useSelector((state) => state.vessels.loading);
  const error = useSelector((state) => state.vessels.error);

  // Display loading or error states
  if (loading) {
    return <p>Loading Vessel details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Prevent rendering if currentCompany is undefined
  if (!currentVessel) {
    return (
      <p className="text-red-500">
        <NotFound />
      </p>
    );
  }

  console.log("Company ID:", currentVessel); //localhost:8080/aioceaneye/companies/10
  return (
    <>
      {/* Company Details Card */}
      <div id="printArea" className="bg-white rounded-md shadow-md p-6 mb-6">
        <h2 className="text-lg font-bold mb-6">Vessels name</h2>

        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          {/* Company Logo */}
          <div className="col-span-1 flex items-center">
            <div className="w-[280px] h-[150px] bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src={currentVessel.shipLogo}
                alt={currentVessel.shipName}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Company Details */}
          <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-4 border-b border-gray-300">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-sm font-medium">Vessels</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipName}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">Call Sign</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipCallSign}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-sm font-medium">Companies</span>
              <span className="text-sm text-gray-600">
                {currentVessel.companyName}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">Country</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipCountry}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-sm font-medium">Office No</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipOfficeNo}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">IMO No</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipImono}
              </span>
            </div>

            <div className="col-span-2 flex justify-between  items-center  pb-2 border-b border-gray-300">
              <span className="text-sm font-medium">Address</span>
              <span className="text-sm text-gray-600 text-center w-full">
                {currentVessel.shipAddress}
              </span>
            </div>

            <div className="flex justify-between items-center border-b  border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Phone No</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipPhone}
              </span>
            </div>
            <div className="flex justify-between items-center border-b   border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Email</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipEmail}
              </span>
            </div>

            <div className="flex justify-between items-center border-b  border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Captain</span>
              <span className="text-sm text-gray-600">
                {currentVessel.captainName}
              </span>
            </div>
            <div className="flex justify-between items-center border-b   border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Captain Email</span>
              <span className="text-sm text-gray-600">
                {currentVessel.captainEmail}
              </span>
            </div>

            <div className="flex justify-between items-center border-b  border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Mate1</span>
              <span className="text-sm text-gray-600">
                {currentVessel.mate1Name}
              </span>
            </div>
            <div className="flex justify-between items-center border-b   border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Mate1 Email</span>
              <span className="text-sm text-gray-600">
                {currentVessel.mate1Email}
              </span>
            </div>
            <div className="flex justify-between items-center border-b  border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Mate2</span>
              <span className="text-sm text-gray-600">
                {currentVessel.mate2Name}
              </span>
            </div>
            <div className="flex justify-between items-center border-b   border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Mate2 Email</span>
              <span className="text-sm text-gray-600">
                {currentVessel.mate2Email}
              </span>
            </div>

            <div className="flex justify-between items-center border-b  border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Mate3</span>
              <span className="text-sm text-gray-600">
                {currentVessel.mate3Name}
              </span>
            </div>
            <div className="flex justify-between items-center border-b   border-gray-300 pb-2 pr-4 ">
              <span className="text-sm font-medium">Mate3 Email</span>
              <span className="text-sm text-gray-600">
                {currentVessel.mate3Email}
              </span>
            </div>

            <div className="flex justify-between items-center  border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">MMSI</span>
              <span className="text-sm text-gray-600">
                {currentVessel.shipMmsi}
              </span>
            </div>
            <div className="flex justify-between items-center  border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">YEID</span>
              <span className="text-sm text-gray-600">
                {currentVessel.yield}
              </span>
            </div>
            <div className="flex justify-between items-center  border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">Build Year</span>
              <span className="text-sm text-gray-600">
                {currentVessel.buildYear}
              </span>
            </div>
          </div>
        </div>
        {/* Vessels List */}
        <div className="pt-12">
          <h2 className="text-lg font-bold mb-4">Vessels Record</h2>

          {/* <VesselDetailTableUI companyId={id} /> */}
          <VesselRecordTable/>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default VesselDetailUI;
