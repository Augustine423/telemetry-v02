import { useState } from "react";
import { useForm } from "react-hook-form";
import Pagination from "../../../../components/Pagination";
import { Link } from "react-router-dom"; // Import Pagination component

const ScheduleRegister = () => {
  const { register, handleSubmit } = useForm();
  const [currentPageCompanies, setCurrentPageCompanies] = useState(1);
  const [currentPageVessel, setCurrentPageVessel] = useState(1);
  const [currentPageDrone, setCurrentPageDrone] = useState(1);
  const [currentPagePilot, setCurrentPagePilot] = useState(1);
  const [currentPageSpareMaterial, setCurrentPageSpareMaterial] = useState(1);
  const itemsPerPage = 5;
  const [activeTab, setActiveTab] = useState("register");
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const sections = [
    { title: "Period of Business", id: "periodBusiness", isTable: false },
    { title: "Companies Select", id: "companies", isTable: true },
    { title: "Vessel Select", id: "vesselSelect", isTable: true },
    { title: "Drone Select (Select 2)", id: "droneSelect", isTable: true },
    { title: "Pilot Select ( Select 2)", id: "pilotSelect", isTable: true },
    {
      title: "Spare Material Select (Multiple)",
      id: "spareMaterials",
      isTable: true,
      hasCheckboxes: true,
    },
  ];

  const spareMaterialCategories = [
    "FC",
    "GPS",
    "RC",
    "Converter",
    "UBC",
    "ESC",
    "Air Speed Sensor",
    "Camera",
    "Data Link Air",
    "Data Link Ground",
    "Servo Left Aileron",
    "Servo Right Aileron",
    "Servo Elevator",
    "Servo Rudder",
    "ESC",
    "Propellers",
  ];

  const companiesData = [...Array(20)].map((_, index) => ({
    id: index + 1,
    logo: "",
    companies: `Company ${index + 1}`,
    businessNo: `BN${index + 1}`,
    country: "Country",
    representative: `Rep ${index + 1}`,
    phoneNo: `+123-456-789${index}`,
  }));

  const vesselData = [...Array(20)].map((_, index) => ({
    id: index + 1,
    image: "",
    vessel: `Vessel ${index + 1}`,
    flag: "Flag",
    imo: `IMO${index + 1}`,
    mmsi: `MMSI${index + 1}`,
    category: "Category",
  }));

  const droneData = [...Array(20)].map((_, index) => ({
    id: index + 1,
    image: "",
    model: `Model ${index + 1}`,
    serialNo: `SN${index + 1}`,
    droneId: `DR${index + 1}`,
    fc: "FC",
    gps: "GPS",
  }));

  const pilotData = [...Array(20)].map((_, index) => ({
    id: index + 1,
    image: "",
    pilot: `Pilot ${index + 1}`,
    employeeNo: `EMP${index + 1}`,
    certificateNo: `CERT${index + 1}`,
    flightNo: `FL${index + 1}`,
    flightTime: `${(index + 1) * 10} hrs`,
  }));

  const spareMaterialData = [...Array(20)].map((_, index) => ({
    id: index + 1,
    image: "",
    model: `Model ${index + 1}`,
    serialNo: `SN${index + 1}`,
    manufacturer: `Manufacturer ${index + 1}`,
    usability: "Usable",
    stockDate: `2025-03-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
  }));

  return (
    <>
      <div className="flex gap-4 border-b">
        <Link to="/dashboard/schedule">
          <button
            className={`px-4 py-4 ${
              activeTab === "overview"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
        </Link>

        <Link to="/dashboard/schedule-register">
          <button
            className={`px-4 py-4 ${
              activeTab === "register"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </Link>
      </div>
      <h2 className=" px-2 mt-4 justify-between items-center  mb-2  pb-3 text-2xl font-semibold text-gray-900">
        Schedule Register
      </h2>
      <div className="px-3 py-2 shadow-md rounded-lg bg-white">
        <div className="bg-white rounded-lg ">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-black mt-2">
              Work Assign Register
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {sections.map((section) => (
              <div key={section.id} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>

                {section.isTable ? (
                  <>
                    {/* Render Checkboxes for Spare Material Section */}
                    {section.hasCheckboxes && (
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        {spareMaterialCategories.map((category, index) => (
                          <label
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              {...register(`spareMaterials.${category}`)}
                            />
                            <span className="text-gray-600">
                              {category} (00)
                            </span>
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Render Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm bg-white">
                        <thead className="bg-gray-300  text-gray-900">
                          <tr>
                            <th className="py-1 px-2  w-10 text-left"></th>{" "}
                            {/* Empty header for checkbox column */}
                            {section.id === "companies" && (
                              <>
                                <th className="py-1 px-2  w-12 text-left">
                                  Logo
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Companies
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Business No
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Country
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Representative
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Phone No
                                </th>
                              </>
                            )}
                            {section.id === "vesselSelect" && (
                              <>
                                <th className="py-1 px-2  w-10 text-left">
                                  Image
                                </th>
                                <th className="py-1 px-2  text-left">Vessel</th>
                                <th className="py-1 px-2  text-left">Flag</th>
                                <th className="py-1 px-2  text-left">IMO</th>
                                <th className="py-1 px-2  text-left">MMSI</th>
                                <th className="py-1 px-2  text-left">
                                  Category
                                </th>
                              </>
                            )}
                            {section.id === "droneSelect" && (
                              <>
                                <th className="py-1 px-2  w-10 text-left">
                                  Image
                                </th>
                                <th className="py-1 px-2  text-left">Model</th>
                                <th className="py-1 px-2  text-left">
                                  Serial No
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Drone ID
                                </th>
                                <th className="py-1 px-2  text-left">FC</th>
                                <th className="py-1 px-2  text-left">GPS</th>
                              </>
                            )}
                            {section.id === "pilotSelect" && (
                              <>
                                <th className="py-1 px-2  w-10 text-left">
                                  Image
                                </th>
                                <th className="py-1 px-2  text-left">Pilot</th>
                                <th className="py-1 px-2  text-left">
                                  Employee No
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Certificate No
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Flight No
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Flight Time
                                </th>
                              </>
                            )}
                            {section.id === "spareMaterials" && (
                              <>
                                <th className="py-1 px-2  w-10 text-left">
                                  Image
                                </th>
                                <th className="py-1 px-2  text-left">Model</th>
                                <th className="py-1 px-2  text-left">
                                  Serial No
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Manufacturer
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Usability
                                </th>
                                <th className="py-1 px-2  text-left">
                                  Stock Date
                                </th>
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {section.id === "companies" &&
                            companiesData
                              .slice(
                                (currentPageCompanies - 1) * itemsPerPage,
                                currentPageCompanies * itemsPerPage
                              )
                              .map((item, index) => (
                                <tr
                                  key={index}
                                  className="border-t border-gray-200"
                                >
                                  <td className="py-1 px-2  w-10">
                                    <input
                                      type="checkbox"
                                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                      {...register(
                                        `${section.id}.selected.${item.id}`
                                      )}
                                    />
                                  </td>
                                  <td className="py-1 px-2  w-12">
                                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.companies}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.businessNo}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.country}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.representative}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.phoneNo}
                                  </td>
                                </tr>
                              ))}
                          {section.id === "vesselSelect" &&
                            vesselData
                              .slice(
                                (currentPageVessel - 1) * itemsPerPage,
                                currentPageVessel * itemsPerPage
                              )
                              .map((item, index) => (
                                <tr
                                  key={index}
                                  className="border-t border-gray-200"
                                >
                                  <td className="py-1 px-2  w-10">
                                    <input
                                      type="checkbox"
                                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                      {...register(
                                        `${section.id}.selected.${item.id}`
                                      )}
                                    />
                                  </td>
                                  <td className="py-1 px-2  w-12">
                                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.vessel}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.flag}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.imo}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.mmsi}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.category}
                                  </td>
                                </tr>
                              ))}
                          {section.id === "droneSelect" &&
                            droneData
                              .slice(
                                (currentPageDrone - 1) * itemsPerPage,
                                currentPageDrone * itemsPerPage
                              )
                              .map((item, index) => (
                                <tr
                                  key={index}
                                  className="border-t border-gray-200"
                                >
                                  <td className="py-1 px-2  w-10">
                                    <input
                                      type="checkbox"
                                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                      {...register(
                                        `${section.id}.selected.${item.id}`
                                      )}
                                    />
                                  </td>
                                  <td className="py-1 px-2  w-12">
                                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.model}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.serialNo}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.droneId}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.fc}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.gps}
                                  </td>
                                </tr>
                              ))}
                          {section.id === "pilotSelect" &&
                            pilotData
                              .slice(
                                (currentPagePilot - 1) * itemsPerPage,
                                currentPagePilot * itemsPerPage
                              )
                              .map((item, index) => (
                                <tr
                                  key={index}
                                  className="border-t border-gray-200"
                                >
                                  <td className="py-1 px-2  w-10">
                                    <input
                                      type="checkbox"
                                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                      {...register(
                                        `${section.id}.selected.${item.id}`
                                      )}
                                    />
                                  </td>
                                  <td className="py-1 px-2  w-12">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.pilot}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.employeeNo}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.certificateNo}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.flightNo}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.flightTime}
                                  </td>
                                </tr>
                              ))}
                          {section.id === "spareMaterials" &&
                            spareMaterialData
                              .slice(
                                (currentPageSpareMaterial - 1) * itemsPerPage,
                                currentPageSpareMaterial * itemsPerPage
                              )
                              .map((item, index) => (
                                <tr
                                  key={index}
                                  className="border-t border-gray-200"
                                >
                                  <td className="py-1 px-2  w-10">
                                    <input
                                      type="checkbox"
                                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                      {...register(
                                        `${section.id}.selected.${item.id}`
                                      )}
                                    />
                                  </td>
                                  <td className="py-1 px-2  w-12">
                                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.model}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.serialNo}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.manufacturer}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.usability}
                                  </td>
                                  <td className="py-1 px-2  text-gray-600 text-left">
                                    {item.stockDate}
                                  </td>
                                </tr>
                              ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex justify-center">
                      {section.id === "companies" && (
                        <Pagination
                          currentPage={currentPageCompanies}
                          totalItems={companiesData.length}
                          itemsPerPage={itemsPerPage}
                          onPageChange={setCurrentPageCompanies}
                        />
                      )}
                      {section.id === "vesselSelect" && (
                        <Pagination
                          currentPage={currentPageVessel}
                          totalItems={vesselData.length}
                          itemsPerPage={itemsPerPage}
                          onPageChange={setCurrentPageVessel}
                        />
                      )}
                      {section.id === "droneSelect" && (
                        <Pagination
                          currentPage={currentPageDrone}
                          totalItems={droneData.length}
                          itemsPerPage={itemsPerPage}
                          onPageChange={setCurrentPageDrone}
                        />
                      )}
                      {section.id === "pilotSelect" && (
                        <Pagination
                          currentPage={currentPagePilot}
                          totalItems={pilotData.length}
                          itemsPerPage={itemsPerPage}
                          onPageChange={setCurrentPagePilot}
                        />
                      )}
                      {section.id === "spareMaterials" && (
                        <Pagination
                          currentPage={currentPageSpareMaterial}
                          totalItems={spareMaterialData.length}
                          itemsPerPage={itemsPerPage}
                          onPageChange={setCurrentPageSpareMaterial}
                        />
                      )}
                    </div>
                  </>
                ) : (
                  // Render Period of Business Section
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex">
                      <input
                        type="date"
                        placeholder="Select Date"
                        className="w-full py-2 px-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        {...register("periodBusiness.startDate")}
                      />
                    </div>
                    <span className="text-gray-600">-</span>
                    <div className="flex">
                      <input
                        type="date"
                        placeholder="Select Date"
                        className="w-full py-2 px-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        {...register("periodBusiness.endDate")}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Submit and Cancel Buttons */}
            <div className="flex justify-end my-6 space-x-4">
              <button
                type="button"
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ScheduleRegister;
