


import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MaterialRegister from "./MaterialRegister";

const MaterialRegisterHeader = () => {

  const selectedItem = useSelector((state) => state.selectedItem); // Global state
  const [activeButton] = useState("register");
  return (
    <>
    {/* Navigation Tabs */}
    <div className="flex gap-8 pt-6 px-8 border-b border-gray-200 pb-4">
      <Link
        to="/dashboard/material-overview"
        className={`pb-3 text-lg font-medium transition-all ${
          activeButton === "overview"
            ? "text-primary border-b-4 border-primary font-semibold"
            : "text-gray-500 hover:text-primary"
        }`}
      >
        Overview
      </Link>
      <Link
        to="/dashboard/material-register"
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
        <h1 className="text-3xl font-bold">
          {selectedItem.selectedItem}{" "}
          {activeButton === "register" ? "Register" : "Detail Info"}
        </h1>
      </header>
     {/* Content */}
     <main className="p-6 ">
        {/* <MaterialRegister/> */}
        <MaterialRegister/>
      </main>
  </>
  )
}

export default MaterialRegisterHeader