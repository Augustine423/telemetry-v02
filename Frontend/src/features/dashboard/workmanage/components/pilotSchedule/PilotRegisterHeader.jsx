import { useState } from "react";
import { useSelector } from "react-redux";
import { Link , useLocation} from "react-router-dom";
import { Search, Printer} from "lucide-react"
const PilotRegisterHeader = () => {
  const location =useLocation();
  const selectedItem = useSelector((state) => state.selectedItem); // Global state
  const [search, setSearch] = useState("");
  return (
    <>
      {/* Navigation Tabs */}
      <div className="flex gap-8 pt-6 px-8  pb-4">
        <Link
          to="/dashboard/work-overview"
          className={`pb-3 text-lg font-medium transition-all ${
            location.pathname === "/dashboard/work-overview"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Overview

        </Link>
        <Link
          to="/dashboard/pilot-register"
          className={`pb-3 text-lg font-medium transition-all ${
            location.pathname === "/dashboard/pilot-register"
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Register
        </Link>
      </div>
      <header className="flex flex-col lg:flex-row items-center justify-between py-6 lg:gap-4 pl-10">
        <h1 className="text-2xl font-semibold text-black">
          {selectedItem.selectedItem}
          {location.pathname === "/dashboard/pilot-register" ? " Register" : " List"}
        </h1>
        </header>
      </>
  )
}
export default PilotRegisterHeader;