import { Printer, Trash2, Edit3 } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedules } from "../../../../stores/informationData/scheduleSlice";

const ScheduleDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { schedules, loading, error } = useSelector(
    (state) => state.schedules || {}
  );

  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);

  const schedule = schedules.find((item) => item.id.toString() === id);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500 text-sm">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center mt-10 text-red-500 text-sm">Error: {error}</p>
    );
  if (!schedule)
    return (
      <p className="text-center mt-10 text-gray-500 text-sm">
        Schedule not found
      </p>
    );

  return (
    <div className="p-14 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Page Header */}
      <div className="w-full max-w-[1600px] mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Schedule Detail</h2>
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
      </div>

      {/* Detail Card */}
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-[1600px]">
        {/* Vessels Info */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold mb-3">Vessels Info</h3>
          <table className="w-full border-collapse text-xs">
            <thead className="border-b">
              <tr className="text-gray-800 font-normal">
                <th className="py-2 px-4 text-left">Companies</th>
                <td className="py-2 px-4">text</td>
                <th className="py-2 px-4 text-left">Vessels</th>
                <td className="py-2 px-4">text</td>
                <th className="py-2 px-4 text-left">Captain</th>
                <td className="py-2 px-4">text</td>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-t">
                <th className="py-2 px-4 text-left">1Mate</th>
                <td className="py-2 px-4">text</td>
                <th className="py-2 px-4 text-left">2Mate</th>
                <td className="py-2 px-4">text</td>
                <th className="py-2 px-4 text-left">3Mate</th>
                <td className="py-2 px-4">text</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Drone */}
        <div className="mb-12">
          <h3 className="text-md font-semibold mb-4">Drone</h3>
          <table className="w-full border-collapse text-sm">
            <tbody className="text-gray-800">
              <tr className="border-t">
                <td className="py-4 px-5">Serial No</td>
                <td className="py-4 px-5">text</td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-5">Serial No</td>
                <td className="py-4 px-5">text</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pilot */}
        <div className="mb-12">
          <h3 className="text-md font-semibold mb-4">Pilot</h3>
          <table className="w-full border-collapse text-sm">
            <tbody className="text-gray-800">
              <tr className="border-t">
                <td className="py-4 px-5 flex items-center">
                  <span className="font-medium">Internal Pilot</span>
                  <span className="ml-3 w-5 h-5 border rounded-full inline-block"></span>
                </td>
                <td className="py-4 px-5">text</td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-5 flex items-center">
                  <span className="font-medium">Outside Pilot</span>
                  <span className="ml-3 w-5 h-5 border rounded-full inline-block"></span>
                </td>
                <td className="py-4 px-5">text</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Spare Material */}
        <div className="mb-16">
          <h3 className="text-md font-semibold mb-4">Spare Material</h3>
          <table className="w-full border-collapse text-sm">
            <thead className="border-b">
              <tr className="text-gray-400 font-medium">
                <th className="py-3 px-5">Material Serial No</th>
                <th className="py-3 px-5">Material Serial No</th>
                <th className="py-3 px-5">Material Serial No</th>
              </tr>
            </thead>
            <thead className="border-b">
              <tr className="text-gray-400 font-medium">
                <th className="py-3 px-5">Material Serial No</th>
                <th className="py-3 px-5">Material Serial No</th>
                <th className="py-3 px-5">Material Serial No</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Period of Business */}
        <div>
          <h3 className="text-md font-semibold mb-4">Period of Business</h3>
          <p className="text-gray-800 font-semibold text-sm">
            2025. 02. 18 - 2025. 8. 18
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetail;
