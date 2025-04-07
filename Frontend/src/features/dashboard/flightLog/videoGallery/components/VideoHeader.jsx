import { Search } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoHeader = () => {

    const selectedItem = useSelector((state) => state.selectedItem); // Global state

    const [activeButton] = useState("overview");
  return (
    <>
     {/* Navigation Tabs */}
     <div className="flex gap-8 pt-6 pb-4 pl-7 border-b border-gray-200">
        <Link
          to="/dashboard/videogallery-overview"
          className={`pb-3 text-lg font-medium transition-all ${
            activeButton === "overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview
        </Link>
        <Link
          to="/dashboard/videogallery-register"
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
          </div>
        )}
      </header>
    </>
  )
}

export default VideoHeader