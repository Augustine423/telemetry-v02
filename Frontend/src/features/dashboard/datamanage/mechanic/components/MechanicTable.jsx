



import Pagination from "../../../../../components/Pagination";
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import MechanicRow from "../../mechanic/components/MechanicRow";
import { useSelector } from "react-redux";
const MechanicTable = () => {
  const { mechanics, loading, error } = useSelector(
    (state) => state.mechanics || {}
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  

  return (
    <>
       <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        <div
          id="printArea"
          className="overflow-x-auto bg-white  rounded-md"
        >
          <table className="w-full">
            <thead className="bg-gray-50 m-4">
              <tr className=" bg-gray-200 p-6 mx-4">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 pl-7">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Mechanic
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Employee No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                E-mail
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Position
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

export default MechanicTable;
