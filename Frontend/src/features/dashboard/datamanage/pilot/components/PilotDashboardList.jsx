
import { LayoutGrid, Menu, Printer, Search } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PilotRegisterPage from "../pages/PilotRegisterPage";
import PilotTableView from "./PilotTableView";
import PilotGridView from "./PilotGridView";

const PilotDashboardList = () => {
  const selectedItem = useSelector((state) => state.selectedItem); // Global state

  const [activeButton] = useState("overview");
  const [activeButton2, setActiveButton2] = useState("grid");

  const handleGridClick = (button) => {
    setActiveButton2(button);
  };

  const handlePrint = () => {
    const printElement = document.getElementById("printArea");

    if (!printElement) {
        console.error("Error: printArea element not found!");
        return;
    }

    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printElement.outerHTML;

    window.print();
    document.body.innerHTML = originalContent; // Restore the original content

    // Timeout သုံးပြီး Original Content ကို Restore ပြန်လုပ်
    setTimeout(() => {
      document.body.innerHTML = originalContent;
      window.location.reload(); // မလိုရင် ဒီလို Refresh လုပ်ပါ
  }, 100);
};

  return (
    <>
      {/* Navigation Tabs */}
      <div className="flex gap-8 pt-6 pb-4 pl-7 border-b border-gray-200">
        <Link
          to="/dashboard/pilot-overview"
          className={`pb-3 text-lg font-medium transition-all ${
            activeButton === "overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview
        </Link>
        <Link
          to="/dashboard/pilot-register"
          className={`pb-3 text-lg font-medium transition-all ${
            activeButton === "register"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Register
        </Link>
      </div>

      {/* Header */}
      <header className="flex flex-col gap-6 lg:flex-row items-center justify-between py-8 px-6 lg:px-12 ">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-gray-900">
          {selectedItem.selectedItem}{" "}
          {activeButton === "register" ? "Register" : "List"}
        </h1>

        {/* Search & View Toggle Section */}
        {activeButton !== "register" && (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder={`Search ${selectedItem.selectedItem}...`}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
              <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>

            {/* View Toggle Buttons */}
            <div className="flex items-center bg-gray-50 p-2 rounded-lg shadow-inner">
              <button
                onClick={() => handleGridClick("table")}
                className={`p-2.5 rounded-md transition-all ${
                  activeButton2 === "table"
                    ? "text-primary bg-white shadow-md"
                    : "text-gray-500 hover:bg-white hover:text-gray-700"
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleGridClick("grid")}
                className={`p-2.5 rounded-md transition-all ${
                  activeButton2 === "grid"
                    ? "text-primary bg-white shadow-md"
                    : "text-gray-500 hover:bg-white hover:text-gray-700"
                }`}
              >
                <LayoutGrid className="w-6 h-6" />
              </button>
            </div>

            <button
                className=" flex justify-center items-center gap-3 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                onClick={handlePrint}
              >
                <Printer className="text-gray-400" /> <p>Print</p>
              </button>
          </div>
        )}
      </header>
      {/* Content Section */}
      <main className="p-10">
        {selectedItem.selectedItem === "Pilot" ? (
          activeButton === "register" ? (
            <PilotRegisterPage/>
          ) : activeButton2 === "table" ? (
            <PilotTableView />
          ) : (
            <PilotGridView />
          )
        ) : (
          <div className="text-center text-gray-600">
            Please choose a valid item
          </div>
        )}
      </main>
    
    </>
  );
};

export default PilotDashboardList;
