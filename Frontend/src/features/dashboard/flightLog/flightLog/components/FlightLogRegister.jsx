

import { FileUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const FlightLogRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission logic here
  };

  const navigate=useNavigate();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
    <form onSubmit={handleSubmit(onSubmit)} className="h-full p-10 ">
      <h2 className="text-lg font-semibold mb-6 border-b">Info Register</h2>

      {/* Arisen Date */}
      <div className="flex items-center mb-5 gap-6">
        <label className="block text-sm font-medium mb-1">Arisen Date</label>
        <div className="flex-1 pl-10">
        <input
          type="date"
          {...register("arisenDate", { required: "Date is required" })}
          className="w-2/5 border border-gray-300 rounded px-3 py-2"
        />
        {errors.arisenDate && (
          <p className="text-red-500 text-sm mt-1">{errors.arisenDate.message}</p>
        )}
      </div>
      </div>

      {/* Flight No */}
      <div className="flex items-center mb-5 gap-6">
        <label className="block text-sm font-medium mb-1">Flight No</label>
        <div className="flex-1 pl-14">
        <select
          {...register("flightNo", { required: "Flight No is required" })}
          className="w-2/5 border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Please Select</option>
          <option value="AA123">AA123</option>
          <option value="BA456">BA456</option>
          <option value="CA789">CA789</option>
        </select>
        {errors.flightNo && (
          <p className="text-red-500 text-sm mt-1">{errors.flightNo.message}</p>
        )}
      </div>
      </div>

      {/* File Upload */}
      <div className="mb-8">
       
        <div className="flex justify-between items-center text-sm  mb-2">
        <label className="block text-sm font-medium mb-1">Insert File</label>
          <span className="flex items-center gap-1"><FileUp className="size-5"/> My PC File</span>
        </div>
        <label
          htmlFor="fileUpload"
          className="w-full border-2 border-dashed border-gray-300 rounded p-6 flex items-center justify-center cursor-pointer hover:bg-gray-50"
        >
          <span className="text-gray-500 flex items-center gap-2">📄 Upload File</span>
        </label>
        <input
          type="file"
          id="fileUpload"
          {...register("file")}
          className="hidden"
        />
      </div>

      {/* Buttons */}
       {/* Buttons */}
       <div className="flex justify-end gap-4 mt-24">
            <button
              onClick={() => navigate("/dashboard/flightLog-overview")}
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-300 rounded-md text-primary hover:bg-primary hover:text-white"
            >
              Save
            </button>
          </div>
    </form>
    </div>
  );
}

export default FlightLogRegister;
