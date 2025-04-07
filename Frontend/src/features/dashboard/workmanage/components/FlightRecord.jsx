import { useState, useEffect } from "react";
import { Search, Printer,  CircleAlert } from "lucide-react";
import Pagination from "../../../../components/Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords } from "../../../../stores/informationData/flightrecordSlice";
import FlightNav from "./FlightNav";

const FlightRecords = () => {
  // const [flightRecords, setFlightRecords] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [activeTab] = useState("overview");

  const dispatch = useDispatch();

  const { records } = useSelector((state) => state.records || {});

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);

  console.log(records);
  return (
    <>
      {/* Tab Navigation */}
      <div className="flex gap-4 border-b">
        <FlightNav/>
      </div>
      <div className="px-4 md:px-6 py-2 shadow-md rounded-lg bg-white mt-3">
        {/* Page Title & Search */}
        <div className="flex justify-between items-center mb-5 border-b pb-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            Flight Records Lists
          </h2>

          <div className="flex items-center space-x-4">
            <div className="relative flex items-center border border-gray-300 bg-white px-4 py-2 w-full max-w-sm shadow-sm rounded-md">
              <input
                type="text"
                placeholder="Quick Search"
                className="flex-grow outline-none bg-transparent text-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="h-5 w-5 text-gray-400 cursor-pointer" />
            </div>

            <button className="bg-gray-100 text-black px-3 py-2 rounded-md flex items-center hover:bg-gray-200 transition">
              <Printer className="w-5 h-5 mr-2" />
              Print
            </button>
          </div>
        </div>

        {/* Table */}
        {activeTab === "overview" ? (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100 text-gray-600 text-sm font-medium">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Total count</th>
                  <th className="py-3 px-4 text-left">Vessel</th>
                  <th className="py-3 px-4 text-left">Pilot</th>
                  <th className="py-3 px-4 text-left">Drone</th>
                  <th className="py-3 px-4 text-right"></th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {records.map((record, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3 px-4">{record.date}</td>
                    <td className="py-3 px-4">{record.title}</td>
                    <td className="py-3 px-4">{record.total_count}</td>
                    <td className="py-3 px-4">{record.vessel}</td>
                    <td className="py-3 px-4">{record.drone}</td>
                    <td className="py-3 px-4">{record.pilot}</td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        to={`/dashboard/flightrecorddetail/${record.id}`}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <CircleAlert className="size-5 text-red-600"/>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>please try again</p>
        )}

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default FlightRecords;
