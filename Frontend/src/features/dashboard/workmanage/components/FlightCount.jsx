import { useSelector } from "react-redux";
import { Edit3, Trash2, Printer } from "lucide-react";
import FlightNav from "./FlightNav";

const FlightCountPage = () => {
  const { records } = useSelector((state) => state.records || {});
  const todaydate = new Date(records.date);
  // Extract individual parts
  const day = todaydate.getDate(); // 31
  const month = todaydate.getMonth() + 1; // 3 (getMonth() is 0-based, so +1)
  const year = todaydate.getFullYear(); // 2025
  const weekday = todaydate.toLocaleDateString("en-US", { weekday: "short" }); // 'Mon'
  // Format the date
  const formattedDate = `${day}/${month}/${year},${weekday}`;
  return (
    <>
    <div className="mb-4 max-w mx-auto">
        <div className="flex gap-2 border-b">
        <FlightNav/>
      </div>
      {/* Page Title & Search */}
      <div className="flex justify-between items-center mt-4 mb-4 border-b">
        <div className="flex space-x-6 border-b border-b-gray-600 text-gray-600">
        <h1 className="mb-3 text-2xl flex font-bold text-gray-800">
          {formattedDate}
        </h1>
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

      {/* Flight Record Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-b-gray-600">Flight Record</h2>
        <div className="grid grid-cols-6 gap-0 border-b ">
          {/* Header Row */}
          <div className="col-span-6 grid grid-cols-6 border-b ">
            <div className="p-2 font-medium border-b ">
              Vessels
            </div>
            <div className="p-2">text</div>
            <div className="p-2 font-medium border-b ">
              Serial No
            </div>
            <div className="p-2 ">text</div>
            <div className="p-2 font-medium border-b ">
              Pilot
            </div>
            <div className="p-2">text</div>
          </div>

          {/* Data Rows */}
          {[
            ["Takeoff Time", "Takeoff Latitude", "Takeoff Longitude"],
            ["Landing Time", "Landing Latitude", "Landing Longitude"],
            ["Flight Time", "Flight Distance", "Battery"],
            ["Fishing Area", "Detection No", "Fishing Mount"],
            ["Flight Time", "Flight Distance", "Fishing Current"],
          ].map(([label1, label2, label3], index) => (
            <div
              key={index}
              className="col-span-6 grid grid-cols-6 border-b  last:border-b-0"
            >
              <div className="p-2 font-medium  ">
                {label1}
              </div>
              <div className="p-2  ">text</div>
              <div className="p-2 font-medium  ">
                {label2}
              </div>
              <div className="p-2  ">text</div>
              <div className="p-2 font-medium  ">
                {label3}
              </div>
              <div className="p-2">text</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fish Detection Data Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b border-b-gray-600 mb-4">Fish Detection Data</h2>
        <div className="grid grid-cols-7 gap-0 border border-gray-300">
          {/* Header Row */}
          <div className="col-span-7 grid grid-cols-7 bg-gray-100 border-b border-gray-300">
            {[
              "Detection",
              "Latitude",
              "Longitude",
              "Explanation Volume",
              "Fish Kind",
              "Fishing Mount",
              "Fishing Current",
            ].map((header) => (
              <div
                key={header}
                className="p-2 border-r border-gray-300 last:border-r-0"
              >
                {header}
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {[1, 2].map((row) => (
            <div
              key={row}
              className="col-span-7 grid grid-cols-7 border-b border-gray-300 last:border-b-0"
            >
              <div className="p-2 ">{row}</div>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="p-2 "
                >
                  text
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Write Record Reading Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 border-b border-b-gray-300">Write Record Reading</h2>
        <div className="space-y-2 ">
          {["Pre Flight Record", "Post Flight Record"].map((item) => (
            <label key={item} className="flex items-center border-b gap-4 border-b-gray-300">
              <input type="checkbox" className="mr-2 mt-4" />
              <span className="text-sm gap-4 mt-4">{item}</span>
            </label>
          ))}
        </div>
      </section>
    </div></>
  );
};

export default FlightCountPage;
