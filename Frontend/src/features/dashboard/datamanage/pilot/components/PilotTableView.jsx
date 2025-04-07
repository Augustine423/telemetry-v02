import { useSelector } from "react-redux"
import NotFound from "../../../../../components/NotFound"
import PageLoading from "../../../../../components/PageLoading"
import Pagination from "../../../../../components/Pagination"
import PilotRowView from "./PilotRowView"


const PilotTableView = () => {

  const { pilots, loading, error } = useSelector(
    (state) => state.pilots|| {}
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div className="bg-white rounded-lg shadow-md px-6  md:p-8 h-full xl:mb-10 w-full ">
        <div
          id="printArea"
          className="overflow-x-auto bg-white  rounded-lg "
        >
          <table className="w-full">
            <thead className="bg-gray-50 m-4">
              <tr className=" bg-gray-200 p-6 mx-4">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Pilot Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Employee No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Certificate No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Flight No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Flight Time
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className=" ">
              {loading ? (
                <PageLoading />
              ) : pilots?.length === 0 ? (
                <NotFound />
              ) : (
                pilots.map((pilot) => (
                  <PilotRowView pilot={pilot} key={pilot.id} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
  )
}

export default PilotTableView