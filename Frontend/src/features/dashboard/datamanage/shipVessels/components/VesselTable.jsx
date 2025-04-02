import Pagination from "../../../../../components/Pagination";
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import { useSelector } from "react-redux";
import VesselsRow from "./VesselsRow";

const VesselTable = () => {
  const { vessels, loading, error } = useSelector(
    (state) => state.vessels || {}
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className=" shadow-xl rounded-md w-full py-8">
        <div className="overflow-x-auto bg-white border rounded-md">
          <table className="w-full">
            <thead className="bg-gray-50 m-4">
              <tr className=" bg-gray-200 p-6 mx-4">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Vessels
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Flag
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  IMO
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  MMSI
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Call Sign
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className=" ">
              {loading ? (
                <PageLoading />
              ) : vessels?.length === 0 ? (
                <NotFound />
              ) : (
                vessels.map((vessel) => (
                  <VesselsRow vessel={vessel} key={vessel.id} />
                ))
              )}
            </tbody>
          </table>
        </div>

      {/* Pagination Section */}
      <div className="mb-8">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default VesselTable;
