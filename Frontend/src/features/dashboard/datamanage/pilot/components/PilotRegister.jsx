import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addPilot,
  fetchPilots,
} from "../../../../../stores/informationData/pilotSlice";

const PilotRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setSubmitError(null); // Clear previous errors
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      // Append the selected file if available
      if (selectedImage) {
        formData.append("company_logo", selectedImage);
      }

      await dispatch(addPilot(formData)).unwrap();
      dispatch(fetchPilots());
      navigate("/dashboard/pilot-overview");
      reset();
      setSelectedImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error while saving Pilot:", error);
      setSubmitError(error.message || "Failed to save Pilot"); // Set error message
    }
  };

  return (
    <>
     <div className="bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full pt-10 flex flex-col">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
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
                    accept="image/*"
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
            <div className="col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {/* Pilot Name*/}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Piolet Name
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("pilotName", {
                        required: "Pilot Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pilot ID Sign */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Employee No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("pilotId", {
                        required: "PilotID is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotId && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotId.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Certificate No */}
                <div className="flex items-center">
                  <label className="w-32 text-sm font-medium">
                    Certificate No
                  </label>

                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("pilotCerNo", {
                        required: "Certificate No  is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotCerNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotCerNo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Passport No*/}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Passport No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("pilotPassport", {
                        required: "Passport No is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotPassport && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotPassport.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pilot E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Pilot E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("pilotEmail", {
                        required: "Pilot Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*Pilot Phone No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Pilot Phone No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("pilotPhone", {
                        required: "Pilot Phone is required",
                        pattern: {
                          value: /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/, // Regex for +<countryCode>-XXX-XXX-XXXX
                          message:
                            "Phone number must follow the format: +<countryCode>-XXX-XXXX-XXXX",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotPhone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*pilotStatus */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Pilot Status
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("pilotStatus", {
                        required: "pilotStatus is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotStatus && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotStatus.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*   pilotCountry*/}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    PilotCountry
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("pilotCountry", {
                        required: "PilotCountry is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.pilotCountry && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pilotCountry.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-auto">
            <button
              onClick={() => navigate("/dashboard/pilot-overview")}
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

export default PilotRegister;
