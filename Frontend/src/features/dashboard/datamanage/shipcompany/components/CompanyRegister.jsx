import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addCompany,
  fetchCompanies,
} from "../../../../../stores/informationData/companySlice";
import { useState } from "react";

const CompanyRegister = () => {
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

      await dispatch(addCompany(formData)).unwrap();
      dispatch(fetchCompanies());
      navigate("/dashboard/company-overview");
      reset();
      setSelectedImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error while saving company:", error);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo Upload */}

            <div className="col-span-1 h-36 mt-10 md:mt-20">
              <div className="w-64 relative">
                <div className="bg-gray-300 rounded-md h-36 flex flex-col items-center justify-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-full w-full object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-gray-500" />
                      <div className="text-center mt-2 text-gray-600">
                        <div>Upload Logo Image</div>
                        <div className="text-xs">(jpeg, bmp, png)</div>
                      </div>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    {...register("company_logo")}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        setSelectedImage(file);
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                    className=" inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {/* Companies Name */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Companies Name
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coName", {
                        required: "Company Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Business No */}
                <div className="flex items-start">
                  <label className="w-40 text-sm font-medium mt-2">
                    Business No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coRegisterNo", {
                        required: "number is required",
                      })}
                      placeholder="Please Enter"
                      className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coRegisterNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coRegisterNo.message}
                      </p>
                    )}
                  </div>
                  {/* prepare from become api */}
                  <div className="flex items-center col-span-1 w-full">
                    <label className="w-24 text-sm font-medium mb-2">
                      File No
                    </label>
                    <div className="flex-1">
                      <input
                        type="text"
                        {...register("coRegisterFile", {
                          required: "Home Link is required",
                        })}
                        placeholder="Please Enter"
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div className="flex items-center">
                  <label className="w-32 text-sm font-medium">Country</label>

                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coCountry", {
                        required: "Country  is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coCountry && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coCountry.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Homepage */}
                <div className="flex items-center col-span-1 w-full">
                  <label className="w-24 text-sm font-medium mb-2">
                    Homepage
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coHomePage", {
                        required: "Home Link is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coHomePage && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coHomePage.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Establishment Year */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Establishment Year
                  </label>
                  <div className="flex-1">
                    <input
                      type="date"
                      {...register("established_year", {
                        required: "EstablishmentYear is required",
                      })}
                      placeholder="establishment_yearPlease Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.established_year && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.established_year.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Employees */}
                <div className="flex items-center col-span-1 w-full">
                  <label className="w-24 text-sm font-medium mt-2">
                    Employees
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coEmployees", {
                        required: "Employees is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coEmployees && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coEmployees.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center col-span-2 w-full">
                  <label className="w-32 text-sm font-medium">Address</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coAddress", {
                        required: "Address is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coAddress && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coAddress.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*Company  Phone No */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Phone No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coTel", {
                        required: "Company Phone is required",
                        pattern: {
                          value: /^\+\d{1}-\d{3}-\d{3}-\d{4}$/, // Regex for +<countryCode>-XXX-XXX-XXXX
                          message:
                            "Phone number must follow the format: +<countryCode>-XXX-XXXX-XXXX",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coTel && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coTel.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* FAX No */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    FAX No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coFax", {
                        required: "FAX number is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coFax && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coFax.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Representative */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Representative
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coCeoName", {
                        required: "Representative is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.representative && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.representative.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Second Phone No */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    CEO Phone No
                  </label>

                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coUserPhone", {
                        required: "Company Phone is required",
                        pattern: {
                          value: /^\+\d{1}-\d{3}-\d{3}-\d{4}$/, // Regex for +<countryCode>-XXX-XXX-XXXX
                          message:
                            "Phone number must follow the format: +<countryCode>-XXX-XXXX-XXXX",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coUserPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coUserPhone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("coUserEmail", {
                        required: "Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coUserEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coUserEmail.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-24">
            <button
              onClick={() => navigate("/dashboard/company-overview")}
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

export default CompanyRegister;
