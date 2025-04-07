import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { Search, Printer, Edit } from "lucide-react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { deleteWorkSchedule } from "../../../../../stores/informationData/workScheduleSlice";
const PilotWorkScheduleDetailHeader = () => {
  const location = useLocation();
  const selectedItem = useSelector((state) => state.selectedItem); // Global state
  const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate();

  const isWorkDetail = location.pathname.match(/\/dashboard\/work-detail\/\d+/);
  const handleDelete = async () => {
    console.log("Deleting schedule for ID :", id);
    try {
      const result = await dispatch(deleteWorkSchedule(id)).unwrap();
      console.log("Delete successful:", result);
      navigate("/dashboard/work-overview");
    } catch (error) {
      console.error("Error deleting work schedule:", error);
      alert(error || "Failed to delete work schedule.");
    }
  };
  return (
    <>
      {/* Navigation Tabs */}
      <div className="flex gap-8 pt-6 px-8 pb-4">
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
          to="/dashboard/"
          className={`pb-3 text-lg font-medium transition-all ${
            isWorkDetail
              ? "text-primary border-b-4 border-primary font-semibold"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Work Schedule Detail
        </Link>
      </div>
      <header className="flex flex-col lg:flex-row items-center justify-between py-6 lg:gap-4 pl-10">
        <h1 className="text-2xl font-semibold text-black">
          {selectedItem.selectedItem}
          {location.pathname === "/dashboard/pilot-register"
            ? " Register"
            : " Detail"}
        </h1>
        <div className="flex justify-between">
          <a href="#" className="py-2 px-3 flex justify-between">
            <Printer className="text-gray-400 w-5 h-5 hover:text-blue-500" />
            <span className="text-gray-400 px-2 text-sm hover:text-blue-500">
              Print
            </span>
          </a>
          <div className="py-2">
            <button className="flex " onClick={handleDelete}>
              <BsFillTrash3Fill className="text-gray-400 w-5 h-5 hover:text-blue-500" />
              <span className="text-gray-400 px-2 text-sm hover:text-blue-500">
                Delete
              </span>
            </button>
          </div>
          <div className="py-2 px-3">
            <Link to={`/dashboard/work-edit/${id}`} className="flex ">
              <Edit className="text-gray-400 w-5 h-5 hover:text-blue-500" />
              <span className="text-gray-400 px-2 text-sm hover:text-blue-500">
                Edit
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
export default PilotWorkScheduleDetailHeader;
