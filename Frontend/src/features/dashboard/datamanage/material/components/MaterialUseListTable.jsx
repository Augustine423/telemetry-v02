







import Pagination from "../../../../../components/Pagination";
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import MechanicRow from "../../mechanic/components/MechanicRow";
import { useSelector } from "react-redux";
const MaterialUseListTable = () => {
  const { mechanics, loading, error } = useSelector(
    (state) => state.mechanics || {}
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  

  return (
    <>
      <div className="  rounded-md w-full py-8">
        <div
          id="printArea"
          className="overflow-x-auto bg-white border-b rounded-md"
        >
          <table className="w-full">
            <thead className="bg-gray-50 m-4">
              <tr className=" bg-gray-200 p-6 mx-4">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 pl-7">
                Use Drone Serial No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Date of Manufacture
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Use Time
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                QA Document No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Material Rest Time
                </th>
                
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className=" ">
              {loading ? (
                <PageLoading />
              ) : mechanics?.length === 0 ? (
                <NotFound />
              ) : (
                mechanics.map((mechanic) => (
                  <MechanicRow mechanic={mechanic} key={mechanic.id} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default MaterialUseListTable;
