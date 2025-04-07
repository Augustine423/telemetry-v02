import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Pencil,
  FileText,
  AlertCircle,
  Edit3,
  Trash2,
  Printer,
} from "lucide-react";
import { Paperclip } from "lucide-react";
import NecessityPopup from "./NecessityPopup";
import FlightNav from "./FlightNav";

const FlightRecordDetail = () => {
  const { id } = useParams();
  const { records } = useSelector((state) => state.records || {});

  // Find the specific record by id
  const record = records.find((record) => record.id === id);

  if (!record) {
    return <div className="p-4 text-red-500">Record not found</div>;
  }

  const todaydate = new Date(record.date);
  // Extract individual parts
  const day = todaydate.getDate(); // 31
  const month = todaydate.getMonth() + 1; // 3 (getMonth() is 0-based, so +1)
  const year = todaydate.getFullYear(); // 2025
  const weekday = todaydate.toLocaleDateString("en-US", { weekday: "short" }); // 'Mon'
  // Format the date
  const formattedDate = `${day}/${month}/${year},${weekday}`;

  return (
    <>
    <div className="flex px-4">
    <FlightNav />
    </div>
      {/* Page Title & Search */}
      <div className="flex justify-between items-center mb-4 border-b pb-2 p-6">
        <h1 className="px-4 mb-3 text-2xl flex font-bold  text-gray-800">
          {formattedDate}
        </h1>
        <div className="flex space-x-6 text-gray-600">
          <button className="flex items-center space-x-2 hover:text-gray-800 text-sm">
            <Printer className="w-5 h-5" />
            <span>Print</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-800 text-sm">
            <Trash2 className="w-5 h-5" />
            <span>Delete</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-800 text-sm">
            <Edit3 className="w-5 h-5" />
            <span>Edit</span>
          </button>
        </div>
      </div>
      <div className="p-4 mx-6 mb-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 border-b pb-2">
          Flight Record
        </h2>

        <div className="grid grid-cols-3 gap-5 mb-[60px] border-gray-300">
          {/* Row 1 */}
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Vessels</span>
            <span className="text-gray-500">text</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Serial No</span>
            <span className="text-gray-500">text</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Pilot</span>
            <span className="text-gray-500">text</span>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Boat Count</span>
            <span className="text-gray-500">text</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Total Count</span>
            <span className="text-gray-500">text</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Total Detection No</span>
            <span className="text-gray-500">text</span>
          </div>

          {/* Row 3 */}
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Total Fishing Mount</span>
            <span className="text-gray-500">text</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Total Flight Time</span>
            <span className="text-gray-500">text</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span className="font-semibold">Total Flight Distance</span>
            <span className="text-gray-500">text</span>
          </div>

          {/* Row 4 */}
          <div className="flex justify-between p-2">
            <span className="font-semibold">All Fishing Current</span>
            <span className="text-gray-500">text</span>
          </div>
          <div className="flex p-2 border-r items-center">
            <p className="font-semibold ">Pilot Sign</p>
            <NecessityPopup />
            <span className="text-gray-500 gap-3">Pilot Sign</span>
          </div>
          <div className="flex p-2 border-r items-center">
            <span className="font-semibold">Vessels Sign</span>
            <NecessityPopup />
            <span className="text-gray-500 gap-3">Captain/Mate Sign</span>
          </div>
        </div>

        {/* DetailWork Section */}
        <div className="mt-5 py-4 mb-8">
          <div className="flex justify-between items-center mb-4 border-gray-400 border-b pb-2">
            <h2 className="text-xl font-semibold text-gray-900">Detail Work</h2>
            <button className="text-gray-500 flex">
              <Pencil className="w-5 h-5 " />
              <span className="ml-2 flex">Edit</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-gray-500 w-16">
                    No
                  </td>
                  <td className="py-2 px-4 border-b font-medium text-gray-500">
                    Remark
                  </td>
                  <td className="py-2 px-4 border-b font-medium text-gray-500 text-center">
                    Reference Report
                  </td>
                  <td className="py-2 px-4 border-b font-medium text-gray-500 text-center">
                    <Paperclip className="w-5 h-5 text-blue-600" />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-gray-700">
                    Work Text
                  </td>
                  <td className="py-2 px-4 border-b text-gray-700">Text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* No Flight Record Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            No Flight Record
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left border">Count</th>
                  <th className="py-2 px-4 text-left border">Author</th>
                  <th className="py-2 px-4 text-left border">Serial No</th>
                  <th className="py-2 px-4 text-left border">Detection No</th>
                  <th className="py-2 px-4 text-left border">Flight Time</th>
                  <th className="py-2 px-4 text-left border">Pre</th>
                  <th className="py-2 px-4 text-left border">In</th>
                  <th className="py-2 px-4 text-left border">Post</th>
                  <th className="py-2 px-4 text-left border">Logs</th>
                  <th className="py-2 px-4 text-left border"></th>
                </tr>
              </thead>
              <tbody>
                {[6, 5, 4, 3, 2, 1].map((count) => (
                  <tr key={count}>
                    <td className="py-2 px-4 ">{count}</td>
                    <td className="py-2 px-4 ">text</td>
                    <td className="py-2 px-4 ">text</td>
                    <td className="py-2 px-4 ">text</td>
                    <td className="py-2 px-4 ">text</td>
                    <td className="py-2 px-4 ">✓</td>
                    <td className="py-2 px-4 ">✓</td>
                    <td className="py-2 px-4 ">✓</td>
                    <td className="py-2 px-4 ">
                      <FileText className="inline w-5 h-5" />
                    </td>
                    <td className="py-2 px-4 ">
                    <Link
                        to={`/dashboard/flightcount`}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <AlertCircle className="inline w-5 h-5 text-red-600" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightRecordDetail;
