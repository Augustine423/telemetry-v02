import Pagination from "../../../../../components/Pagination"


const DroneTableView = () => {
  return (
    <>
    <div className=" shadow-xl rounded-md w-full py-8">
      <div
        id="printArea"
        className="overflow-x-auto bg-white border rounded-md"
      >
        <table className="w-full">
          <thead className="bg-gray-50 m-4">
            <tr className=" bg-gray-200 p-6 mx-4">
            
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Image
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Model
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              Serial No
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Drone ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                FC
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                GPS
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody className=" ">
            {/* {loading ? (
              <PageLoading />
            ) : companies?.length === 0 ? (
              <NotFound />
            ) : (
              companies.map((company) => (
                <CompanyInformationRow company={company} key={company.id} />
              ))
            )} */}Drone Row
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  </>
  )
}

export default DroneTableView