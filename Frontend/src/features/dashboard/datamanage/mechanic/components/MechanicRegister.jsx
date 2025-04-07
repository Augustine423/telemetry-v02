import { Camera,  ChevronDown,  FileUp, } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMechanic, fetchMechanics } from "../../../../../stores/informationData/mechanicSlice";

const MechanicRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const formData = new FormData();

      // Convert date format
      if (data.established_year) {
        data.established_year = new Date(data.established_year)
          .toISOString()
          .split("T")[0];
      }

      // Append all form fields
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      // Append the selected file if available
      if (selectedImage) {
        formData.append("company_logo", selectedImage);
      }

      console.log("Submitting FormData:", formData);

      await dispatch(addMechanic(formData)).unwrap();
      dispatch(fetchMechanics());
      navigate("/dashboard/mechanic-overview");
      reset();
      setSelectedImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error while saving company:", error);
    }
  };

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Logo Upload */}

             <div className="col-span-1 flex flex-col items-center justify-center h-full">
              <div className="w-64">
                <div className="bg-[#BBBBBB] rounded-full h-36 w-36 flex items-center justify-center overflow-hidden relative mx-auto">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <>
                     <div className="flex flex-col items-center justify-center">
                     <Camera className="w-8 h-8 text-white" />
                      <div className="text-center mt-2 text-gray-600">
                        <p className="text-white">Image Upload</p>
                        <p className="text-xs text-white">(jpeg, bmp, png)</p>
                      </div>
                     </div>
                    </>
                  )}
                  <input
                    type="file"
                   
                    {...register("pilotImg")}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        setSelectedImage(file);
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Mechanic Name", name: "mechanicName", type: "text" },
                { label: "Employee No", name: "employeeNo", type: "text" },
                { label: "Phone No", name: "pilotPhone", type: "text" },
                { label: "E-mail", name: "email", type: "email" },
              ].map((field) => (
                <div
                  key={field.name}
                  className="flex flex-col md:flex-row items-center"
                >
                  <label className="w-32 text-sm font-medium">
                    {field.label}
                  </label>
                  <input
                    {...register(field.name, { required: true })}
                    type={field.type}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Please Enter"
                  />
                </div>
              ))}

              {/* Position Select */}
              <div className="flex flex-col md:flex-row items-center">
                <label className="w-32 text-sm font-medium">Position</label>
                <div className="relative">
                <select
                  {...register("position", { required: true })}
                  className="flex-1 px-14 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="mechanic">Mechanic</option>
                  <option value="senior_mechanic">Senior Mechanic</option>
                  <option value="supervisor">Supervisor</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="size-6"/>
              </div>
              </div>
              </div>

              {/* Signature File Upload */}

              <div className="flex items-center">
                  {/* <label className="w-36 text-sm font-medium mt-2">
                  Sign File
                </label>
                <div className="flex gap-6">
                  <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white overflow-hidden whitespace-nowrap overflow-ellipsis">
                    <p>File Name</p>
                  </div> */}
                   <div className="flex items-center gap-2">
                  <label className="w-32 text-sm font-medium mt-2">
                  Sign File
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mechanicSign", {
                        required: "file sign is required",
                      })}
                      placeholder="file name"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mechanicSign && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mechanicSign.message}
                      </p>
                    )}
                  </div>
                
                  <button
                    type="button"
                    className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 flex items-center gap-1"
                    
                  >
                    <FileUp className="w-4 h-4" />
                    Image
                  </button>
                  <div className="flex">
                  <input
                    type="file"
                   placeholder="Please Enter"
                      className="w-full border rounded px-6 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 hidden"
                   
                    {...register("signFile")}
                    
                    accept="image/*"
                  />
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-28">
            <button
              onClick={() => navigate("/dashboard/mechanic-overview")}
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
    </>
  );
};

export default MechanicRegister;
