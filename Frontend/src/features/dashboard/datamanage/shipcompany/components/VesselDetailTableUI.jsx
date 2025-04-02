


import { useDispatch, useSelector } from "react-redux";
import VesselDetailRowUI from "./VesselDetailRowUI";
import { useEffect } from "react";
import { fetchVesselsByCompanyId } from "../../../../../stores/informationData/vesselSlice";

// eslint-disable-next-line react/prop-types
const VesselDetailTableUI = ({ companyId}) => {
  console.log(companyId)
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (companyId) {
      dispatch(fetchVesselsByCompanyId(companyId)); // Fetch vessels for the company
    }
  }, [dispatch, companyId]);

  const { vessels = [], loading, error } = useSelector((state) => state.vessels);

 

  // Display loading or error states
  
  if (loading) {
    return <p>Loading vessels...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-medium text-gray-600">
              <th className="px-4 py-3 rounded-tl-lg">Image</th>
              <th className="px-4 py-3">Vessels</th>
              <th className="px-4 py-3">Flag</th>
              <th className="px-4 py-3">IMO</th>
              <th className="px-4 py-3">MMSI</th>
              <th className="px-4 py-3 rounded-tr-lg">Call Sign</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-y-2">
          {vessels?.length > 0 ? (
              vessels.map((vessel) => (
                <VesselDetailRowUI key={vessel.shipId} vessel={vessel} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No vessels found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VesselDetailTableUI;