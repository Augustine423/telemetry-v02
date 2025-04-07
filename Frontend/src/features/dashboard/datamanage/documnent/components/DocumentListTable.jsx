
import NotFound from "../../../../../components/NotFound";
import PageLoading from "../../../../../components/PageLoading";
import Pagination from "../../../../../components/Pagination";
import DocumentListRow from "./DocumentListRow";
// import PageLoading from "../../../../../components/PageLoading";
// import NotFound from "../../../../../components/NotFound";
// import { useSelector } from "react-redux";


const DocumentListTable = () => {
  // const { vessels, loading, error } = useSelector(
  //   (state) => state.vessels || {}
  // );

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  

  const documentData=[
    {
      id: 1,
      no: 1,
      documentName: "Document 1",
      author: "John Doe",
      date: "2023-05-01",
    },
    {
      id: 2,
      no: 2,
      documentName: "Document 2",
      author: "Jane Smith",
      date: "2023-05-02",
    },
  ]

  return (
    <>
      <div className=" shadow-xl rounded-md w-full py-8">
        <div id="printArea" className="overflow-x-auto bg-white border rounded-md">
          <table className="w-full">
            <thead className="bg-gray-50 m-4">
              <tr className=" bg-gray-200 p-6 mx-4">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  No
                </th>
                <th  className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Documents Name
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
              ) : documentData?.length === 0 ? (
                <NotFound />
              ) : ( */}
              {
                documentData.map((document) => (
                  <DocumentListRow document={document} key={document.id} />
                ))
              }
            
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

export default DocumentListTable;
