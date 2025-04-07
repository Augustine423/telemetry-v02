
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Camera, Upload } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchVesselById, fetchVessels, updateVessel } from "../../../../../stores/informationData/vesselSlice.js";


const VesselEditForm = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the company ID from the URL

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [vessel, setUpdatedVessel] = useState(null); // State to hold updated company data

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const currentVessel = useSelector((state) => state.vessels.currentVessel); // Access the current company data

  console.log(currentVessel)

  // Fetch the company data when the component mounts
  useEffect(() => {
    if (id) {
      dispatch(fetchVesselById(id)); // Fetch the company data by ID
    }
  }, [id, dispatch]);

  // Pre-fill the form with the current company data
  useEffect(() => {
    if (currentVessel) {
      reset(currentVessel); // Reset the form with the fetched company data
    }
  }, [currentVessel, reset]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const updatedVessel= await dispatch(
        updateVessel({ id, vesselData: data })
      ).unwrap();
      setUpdatedVessel(updatedVessel); // Update state with the latest data
      dispatch(fetchVessels()); // Refresh the list of companies
      navigate("/dashboard/vessel-overview");
    } catch (error) {
      console.error("Error while updating Vessel:", error);
    }
  };


  return (
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
                    {...register("shipLogo")}
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
                {/*  Vessels Name*/}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessels Name
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("shipName", {
                        required: "Ship Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Call Sign */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Call Sign
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("shipCallSign", {
                        required: "Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipCallSign && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipCallSign.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Companies */}
                <div className="flex items-center">
                  <label className="w-32 text-sm font-medium">Companies ID</label>

                  <div className="flex-1">
                    <input
                      type="number"
                      {...register("coId", {
                        valueAsNumber: true,
                        // required: "CompanyId is required",
                        min: {
                          value: 0,
                          message:
                            "CompanyId must be greater than or equal to 0",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* {errors.coId && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coId.message}
                      </p>
                    )} */}
                  </div>
                </div>

                {/*  Country*/}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Country
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("shipCountry", {
                        required: "ShipCountry is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipCountry && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipCountry.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vessel Office No */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessel Office No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("shipOfficeNo", {
                        required: " vessel Office No is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipOfficeNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipOfficeNo.message}
                      </p>
                    )}
                  </div>
                </div>
                {/*   IMO No*/}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessel IMO No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("shipImono", {
                        required: "Vessel IMO No is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipImono && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipImono.message}
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
                      {...register("shipAddress", {
                        required: "Address is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipAddress && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipAddress.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*Vessel Phone No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessel Phone No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("shipPhone", {
                        required: "Vessel Phone is required",
                        pattern: {
                          value: /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/, // Regex for +<countryCode>-XXX-XXX-XXXX
                          message:
                            "Phone number must follow the format: +<countryCode>-XXX-XXXX-XXXX",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipPhone.message}
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
                      {...register("shipEmail", {
                        required: "Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Captain Name */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Captain
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("captainName", {
                        required: "CaptainName No is required",
                      })}
                      placeholder="captainName Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.captainName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.captainName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Captain E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("captainEmail", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.captainEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.captainEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta1 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">Mate1</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mate1Name", {
                        required: "Meta Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate1Name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate1Name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Mate1 E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("mate1Email", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate1Email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate1Email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta2 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">Mate2</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mate2Name", {
                        required: "Meta Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate2Name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate2Name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Mate2 E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("mate12Email", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate2Email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate2Email.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Meta3 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">Mate3</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mate3Name", {
                        required: "Meta Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate3Name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate3Name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Mate3 E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("mate3Email", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate3Email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate3Email.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Meta1 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">MMSI</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("shipMmsi", {
                        required: "MMSI is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.shipMmsi && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.shipMmsi.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*Vessel Phone No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">YEID</label>
                  <div className="flex-1">
                    <input
                      type="number"
                      {...register("yield", {
                        valueAsNumber: true,
                        required: "YEID is required",
                        min: {
                          value: 0,
                          message: "YEID must be greater than or equal to 0",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* {errors.yield && (
      <p className="text-red-500 text-sm mt-1">
        {errors.yield.message}
      </p>
    )} */}
                  </div>
                </div>
                {/* Establishment Year */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Build Year
                  </label>
                  <div className="flex-1">
                    <input
                      type="date"
                      {...register("buildYear", {
                        required: "EstablishmentYear is required",
                      })}
                      placeholder="establishment_yearPlease Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.buildYear && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.buildYear.message}
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
              onClick={() => navigate("/dashboard/vessel-overview")}
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
  )
}

export default VesselEditForm