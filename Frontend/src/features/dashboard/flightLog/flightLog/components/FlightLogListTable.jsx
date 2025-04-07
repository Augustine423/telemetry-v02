
import { Download, Ellipsis, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import Pagination from "../../../../../components/Pagination";
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import { useSelector } from "react-redux";
import FlightLogListRow from "./FlightLogListRow";
const FlightLogListTable = () => {
  // const { mechanics, loading, error } = useSelector(
  //   (state) => state.mechanics || {}
  // );

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  
// console.log(mechanics)
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
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 pl-7">
                Occurrence time
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                File Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Author
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
               Date
                </th>
                
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className=" ">
              {/* {loading ? (
                <PageLoading />
              ) : mechanics?.length === 0 ? (
                <NotFound />
              ) : (
                mechanics.map((mechanic) => (
                  <FlightLogListRow mechanic={mechanic} key={mechanic.id} />
                ))
              )} */}
               <tr id="printArea" className="hover:bg-gray-100 border-b">
      {/* Occurrence Time */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap ">
        2025. 2. 11
      </td>
  
      {/* No */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        101
      </td>
  
      {/* File Name */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        text
      </td>
  
      {/* Author */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        David
      </td>
  
      {/* Date */}
      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
        2025.03.25
      </td>
  
      {/* Action Buttons */}
      <td className=" py-4 text-sm">
        <div className="flex justify-center items-center gap-6">
          {/* Mail Icon */}
          <Mail className="size-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
  
          {/* Download Icon */}
          <Download className="size-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
  
          {/* Details Link */}
          <Link
            className="text-gray-400 hover:text-gray-600"
          >
            <Ellipsis className="size-6" />
          </Link>
        </div>
      </td>
    </tr>
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default FlightLogListTable;
