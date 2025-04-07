import { useState, useEffect } from "react";
import { Search, Printer, Ellipsis } from "lucide-react";
import Pagination from "../../../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedules } from "../../../../stores/informationData/scheduleSlice";
import { Link } from "react-router-dom";

const Schedule = () => {
  const dispatch = useDispatch();
  const {
    schedules = [],
    loading,
    error,
  } = useSelector((state) => state.schedules || {});

  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <>
    
     {/* Tab Navigation */}
     <div className="flex gap-4 border-b">
     <Link to="/dashboard/schedule">
       <button
         className={`px-4 py-4 ${activeTab === "overview"
             ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
             : "text-gray-500"
           }`}
       >
         Overview
       </button>
     </Link>

     <Link to="/dashboard/schedule-register">
       <button
         className={`px-4 py-4 ${activeTab === "register"
             ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
             : "text-gray-500"
           }`}
         onClick={() => setActiveTab("register")}
       >
         Register
       </button>
     </Link>
   </div>
    <div className="px-8 md:px-14 py-8 shadow-md rounded-lg bg-white">
      
      <div>

        {/* Page Title & Search Bar */}
        <div className="flex justify-between items-center mb-5 border-b pb-3">
          {/* Page Title */}
          <h2 className="text-2xl font-semibold text-gray-800">
            Schedule List
          </h2>

          {/* Search Bar & Printer Button */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
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

            {/* Printer Button */}
            <button className="bg-gray-100 text-black px-3 py-2 rounded-md flex items-center hover:bg-gray-200 transition">
              <Printer className="w-5 h-5 mr-2" />
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering for Tabs */}
      {activeTab === "overview" ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100 text-gray-600 text-sm font-medium">
              <tr>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Companies</th>
                <th className="py-3 px-4 text-left">Vessels</th>
                <th className="py-3 px-4 text-left">Drone</th>
                <th className="py-3 px-4 text-left">Pilot</th>
                <th className="py-3 px-4 text-right"></th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {Array.isArray(schedules) &&
                schedules.map((schedule, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3 px-4">{schedule.date}</td>
                    <td className="py-3 px-4">{schedule.company}</td>
                    <td className="py-3 px-4">{schedule.vessel}</td>
                    <td className="py-3 px-4">{schedule.drone}</td>
                    <td className="py-3 px-4">{schedule.pilot}</td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        to={`/dashboard/schedule-detail/${schedule.id}`}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Ellipsis />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-600 py-10">
          Register Page Content
        </div>
      )}

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination />
      </div>
    </div>
    
    </>
  );
};

export default Schedule;
