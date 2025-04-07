
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FlightLogRegister from "./FlightLogRegister";

const FlightLogRegisterHeader = () => {

  const selectedItem = useSelector((state) => state.selectedItem); // Global state
  const [activeButton] = useState("register");
  return (
    <>
    {/* Navigation Tabs */}
    <div className="flex gap-8 pt-6 px-8 border-b border-gray-200 pb-4">
      <Link
        to="/dashboard/flightLog-overview"
        className={`pb-3 text-lg font-medium transition-all ${
          activeButton === "overview"
            ? "text-primary border-b-4 border-primary font-semibold"
            : "text-gray-500 hover:text-primary"
        }`}
      >
        Overview
      </Link>
      <Link
        to="/dashboard/flightLog-register"
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

    <header className="flex flex-col lg:flex-row items-center justify-between py-6 lg:gap-4 pl-10">
      <h1 className="text-2xl font-semibold text-black">
        {selectedItem.selectedItem}{" "}
        {activeButton === "register" ? "Register" : ""}
      </h1>
    </header>
     {/* Content */}
     <main className="p-6 ">
        {/* <DroneRegister/> */}
        <FlightLogRegister/>
      </main>
  </>
  )
}

export default FlightLogRegisterHeader