import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../components/Pagination";
import { useParams } from "react-router-dom";
import { fetchCompanyById } from "../../../../../stores/informationData/companySlice";
import { useEffect } from "react";
import VesselDetailTableUI from "./VesselDetailTableUI";
import { fetchVesselsByCompanyId } from "../../../../../stores/informationData/vesselSlice";


const CompanyDetailUI = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  // Fetch company details when the component mounts
  useEffect(() => {
    dispatch(fetchCompanyById(id),fetchVesselsByCompanyId(id));
  }, [dispatch, id]);

  // Access the fetched company details from the Redux store
  const currentCompany = useSelector((state) => state.companies.currentCompany);

  const loading = useSelector((state) => state.companies.loading);
  const error = useSelector((state) => state.companies.error);

  // Display loading or error states
  if (loading) {
    return <p>Loading company details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Prevent rendering if currentCompany is undefined
  if (!currentCompany) {
    return <p className="text-red-500">Company not found.</p>;
  }

  console.log("Company ID:", currentCompany);//localhost:8080/aioceaneye/companies/10


  return (
    <>
      

      {/* Company Details Card */}
      <div className="bg-white rounded-md shadow-md p-6 mb-6">
        <h2 className="text-lg font-bold mb-6">Companies name</h2>

        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          {/* Company Logo */}
          <div className="col-span-1 flex items-center">
            <div className="w-[280px] h-[150px] bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src={currentCompany.coLogo}
                alt={currentCompany.coName}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Company Details */}
          <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-4 border-b border-gray-300">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-sm font-medium">Companies</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coName}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">Business No</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coRegisterNo}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-sm font-medium">Country</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coCountry}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">Homepage</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coHomePage}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span className="text-sm font-medium">Establishment Year</span>
              <span className="text-sm text-gray-600">
                {currentCompany.established_year}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">Employees</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coEmployees}
              </span>
            </div>

            <div className="col-span-2 flex justify-between  items-center  pb-2 border-b border-gray-300">
              <span className="text-sm font-medium">Address</span>
              <span className="text-sm text-gray-600 text-center w-full">
                {currentCompany.coAddress}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2 ">
              <span className="text-sm font-medium">Phone No</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coTel}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">FAX No</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coFax}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-2 ">
              <span className="text-sm font-medium">Representative</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coCeoName}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 pr-4">
              <span className="text-sm font-medium">Phone No</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coUserPhone}
              </span>
            </div>

            <div className=" flex justify-between  items-center  pb-2">
              <span className="text-sm font-medium">E-mail</span>
              <span className="text-sm text-gray-600">
                {currentCompany.coUserEmail}
              </span>
            </div>
          </div>
        </div>
        {/* Vessels List */}
        <div className="pt-12">
          <h2 className="text-lg font-bold mb-4">Vessels List</h2>

          <VesselDetailTableUI  companyId={id} />

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailUI;
