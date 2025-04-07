import FlightNav from "./FlightNav";
import RecordTable from "./RecordTable";

const PreFlightPage = () => {
    return (
      <>
        <div className="bg-gray-100 min-h-screen font-sans">
          {/* Navbar */}
          <div className="flex gap-2 border-b px-2">
            <FlightNav />
          </div>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl px-2 font-bold mb-4 mt-4">
              Pre Flight Record
            </h1>

            {/* Header Section */}
            <div className="bg-white rounded-md shadow-sm p-4 mb-4">
              <div className="grid grid-cols-6 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter title"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Parking Spot
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter parking spot"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Shift Start
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Flight Length
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter flight length"
                  />
                </div>
              </div>
            </div>

            {/* ID Section */}
            <div className="bg-white rounded-md shadow-sm p-4 mb-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    ID
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter ID"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Tail
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter tail number"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Call
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter call sign"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Flight
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter flight number"
                  />
                </div>
              </div>
            </div>

            {/* Records Table */}
            <div className="bg-white rounded-md shadow-sm p-4 mb-4">
              <RecordTable />
            </div>
          </div>
        </div>
      </>
    );
};

export default PreFlightPage;
