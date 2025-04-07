import { Camera, Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DroneFCPopupTable from "./droneRegister/DroneFCPopupTable";
import DroneGPSPopupTable from "./DroneGPSPopupTable";
import { usePopup } from "../hooks/usePopup";
import DroneCameraPopupTable from "./DroneCameraPopupTable";
import DroneRCPopupTable from "./droneRegister/DroneRCPopupTable";
import DroneConverterPopupTable from "./DroneConverterPopupTable";
import DronePowerboardPopupTable from "./droneRegister/DronePowerboardPopupTable";
import DroneUBCPopupTable from "./droneRegister/DroneUBCPopupTable";
import DroneAirSpeedSensorPopupTable from "./droneRegister/DroneAirSpeedSensorPopupTable";
import DroneDataAirLinkPopupTable from "./droneRegister/DroneDataAirLinkPopupTable";
import DroneGroundDataLinkPopupTable from "./droneRegister/DroneGroundDataLinkPopupTable";
import DroneLeftAileronPopupTable from "./droneRegister/DroneLeftAileronPopupTable";
import DroneRightAileronPopupTable from "./droneRegister/DroneRightAileronPopupTable";
import DroneElevatorPopupTable from "./droneRegister/DroneElevatorPopupTable";
import DroneRudderPopupTable from "./droneRegister/DroneRudderPopupTable";

const DroneRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Reusable popup state with data handling
  const fcPopup = usePopup();
  const gpsPopup = usePopup();
  const cameraPopup = usePopup();
  const rcPopup = usePopup();
  const converterPopup = usePopup();
  const powerboardPopup = usePopup();
  const ubcPopup = usePopup();
  const airspeedsensorPopup = usePopup();
  const airPopup = usePopup();
  const groundPopup = usePopup();
  const leftaileronPopup = usePopup();
  const rightaileronPopup = usePopup();
  const elevatorPopup = usePopup();
  const rudderPopup = usePopup();

  const onSubmit = (data) => {
    console.log(data);
    fcPopup.close();
    gpsPopup.close();
    cameraPopup.close();
    rcPopup.close();
    converterPopup.close();
    powerboardPopup.close();
    ubcPopup.close();
    airspeedsensorPopup.close();
    airPopup.close();
    groundPopup.close();
    leftaileronPopup.close();
    rightaileronPopup.close();
    elevatorPopup.close();
    rudderPopup.close();
  };

  return (
    <>
      {/* <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-6"> */}
      <div className="bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full pt-10">
        {/* Drone Image Upload Section */}
        <div className="grid grid-cols-3 my-6">
          {/* Company Logo Upload */}
          <div className="col-span-1 h-36">
            <div className="w-64 relative">
              <div className="bg-gray-300 rounded-md h-36 flex flex-col items-center justify-center relative">
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
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Drone Details Section */}
          <div className="grid grid-cols-2 gap-4 mb-6 col-span-2">
            {/* Left Column */}
            <div className="col-span-1">
              <div className="flex items-start mb-6">
                <label className="w-32 text-sm font-medium mt-2">Model</label>

                <div className="flex-1">
                  <input
                    type="text"
                    {...register("model", {
                      required: "Model is required",
                    })}
                    placeholder="Please Enter"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {errors.model && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.model.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start">
                <label className="w-32 text-sm font-medium mt-2">
                  Drone ID
                </label>

                <div className="flex-1">
                  <input
                    type="text"
                    {...register("droneId", {
                      required: "DroneId is required",
                    })}
                    placeholder="Please Enter"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {errors.droneId && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.droneId.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1">
              <div className="flex items-start">
                <label className="w-32 text-sm font-medium mt-2">
                  Serial No
                </label>

                <div className="flex-1">
                  <input
                    type="text"
                    {...register("serialNo", {
                      required: "SerialNo is required",
                    })}
                    placeholder="Please Enter"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {errors.serialNo && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.serialNo.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material Register Section */}
        <div className=" mb-6 mt-10 border-b">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-6  border-b ">
            Material Register
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-4 ">
            {/* FC Row */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">FC</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("fc")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openPopup}> */}
                    <button type="button" onClick={() => fcPopup.open()}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.fc && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fc.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}
              {/* Render the popup conditionally */}
              {fcPopup.isOpen && (
                <DroneFCPopupTable
                  onClose={fcPopup.close}
                  data={fcPopup.popupData}
                />
              )}
              {/* {isPopupOpen && <DroneFCPopupTable onClose={closePopup} />} */}
            </div>
            {/* GPS */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">GPS</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("gps")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        gpsPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.gps && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gps.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {gpsPopup.isOpen && (
                <DroneGPSPopupTable
                  onClose={gpsPopup.close}
                  data={gpsPopup.popupData}
                />
              )}
            </div>

            {/* Camera */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">Camera</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("camera")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        cameraPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.camera && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.camera.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {cameraPopup.isOpen && (
                <DroneCameraPopupTable
                  onClose={cameraPopup.close}
                  data={cameraPopup.popupData}
                />
              )}
            </div>

            {/* RC Row */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">RC</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("rc")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openPopup}> */}
                    <button type="button" onClick={() => rcPopup.open()}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.rc && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.rc.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}
              {/* Render the popup conditionally */}
              {rcPopup.isOpen && (
                <DroneRCPopupTable
                  onClose={rcPopup.close}
                  data={rcPopup.popupData}
                />
              )}
              {/* {isPopupOpen && <DroneFCPopupTable onClose={closePopup} />} */}
            </div>

            {/* Converter */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">
                  Converter
                </label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("converter")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        converterPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.converter && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.converter.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {converterPopup.isOpen && (
                <DroneConverterPopupTable
                  onClose={converterPopup.close}
                  data={converterPopup.popupData}
                />
              )}
            </div>

            {/* Powerboard */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">
                  Powerboard
                </label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("powerboard")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        powerboardPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.powerboard && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.powerboard.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {powerboardPopup.isOpen && (
                <DronePowerboardPopupTable
                  onClose={powerboardPopup.close}
                  data={powerboardPopup.popupData}
                />
              )}
            </div>

            {/* UBC */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">UBC</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("ubc")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        ubcPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.ubc && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.ubc.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {ubcPopup.isOpen && (
                <DroneUBCPopupTable
                  onClose={ubcPopup.close}
                  data={ubcPopup.popupData}
                />
              )}
            </div>

            {/* Air Speed Sensor */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">
                  Air Speed Sensor
                </label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("airspeedsensor")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        airspeedsensorPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.airspeedsensor && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.airspeedsensor.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {airspeedsensorPopup.isOpen && (
                <DroneAirSpeedSensorPopupTable
                  onClose={airspeedsensorPopup.close}
                  data={airspeedsensorPopup.popupData}
                />
              )}
            </div>
          </div>
        </div>

        {/* Data Link Register */}
        <div className="border-b">
          <div className="grid grid-cols-3 gap-4 mb-6  ">
            {/* Data Link Row */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">
                  Data Link
                </label>
              </div>
            </div>

            {/* Air */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">Air</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("air")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        airPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.air && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.air.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {airPopup.isOpen && (
                <DroneDataAirLinkPopupTable
                  onClose={airPopup.close}
                  data={airPopup.popupData}
                />
              )}
            </div>

            {/*Data Link Ground */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">Ground</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("ground")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* Centered Search Icon */}
                    {/* <button onClick={openGPSPopup}>
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button> */}
                    <button
                      type="button"
                      onClick={() =>
                        groundPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.ground && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.ground.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {groundPopup.isOpen && (
                <DroneGroundDataLinkPopupTable
                  onClose={groundPopup.close}
                  data={groundPopup.popupData}
                />
              )}
            </div>
          </div>
        </div>

        {/* Servo Register */}
        <div className="border-b">
          <div className="grid grid-cols-3 gap-x-6 mb-6 mt-6 items-center">
            {/* Centered Servo Label */}
            <div className="col-span-1 ">
              <div className="flex items-start justify-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">Servo</label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 col-span-2">
              {/* Left Aileron */}
              <div className="col-span-1 flex items-center ">
                <label className="w-32 text-sm font-medium">Left Aileron</label>
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("leftAileron")}
                      placeholder="Please Select"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        leftaileronPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                      aria-label="Search Left Aileron"
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Aileron */}
              <div className="col-span-1 flex items-center ">
                <label className="w-32 text-sm font-medium">
                  Right Aileron
                </label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("rightAileron")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      rightaileronPopup.open([
                        { id: 101, name: "GPS Model X" },
                        { id: 102, name: "GPS Model Y" },
                      ])
                    }
                    aria-label="Search Right Aileron"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Elevator */}
              <div className="col-span-1 flex items-center  mt-4">
                <label className="w-32 text-sm font-medium">Elevator</label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("elevator")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      elevatorPopup.open([
                        { id: 103, name: "GPS Model Z" },
                        { id: 104, name: "GPS Model A" },
                      ])
                    }
                    aria-label="Search Elevator"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Rudder */}
              <div className="col-span-1 flex items-center  mt-4">
                <label className="w-32 text-sm font-medium">Rudder</label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("extraField")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      rudderPopup.open([
                        { id: 105, name: "GPS Model B" },
                        { id: 106, name: "GPS Model C" },
                      ])
                    }
                    aria-label="Search Extra Field"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Popup UI */}
          {leftaileronPopup.isOpen && (
            <DroneLeftAileronPopupTable
              onClose={leftaileronPopup.close}
              data={leftaileronPopup.popupData}
            />
          )}

          {rightaileronPopup.isOpen && (
            <DroneRightAileronPopupTable
              onClose={rightaileronPopup.close}
              data={rightaileronPopup.popupData}
            />
          )}
          {elevatorPopup.isOpen && (
            <DroneElevatorPopupTable
              onClose={elevatorPopup.close}
              data={elevatorPopup.popupData}
            />
          )}

          {rudderPopup.isOpen && (
            <DroneRudderPopupTable
              onClose={rudderPopup.close}
              data={rudderPopup.popupData}
            />
          )}
        </div>

        {/* Quad Motor Register */}
        <div className="border-b">
          <div className="grid grid-cols-3 gap-x-6 mb-6 mt-6 items-center">
            {/* Quad Motor Label */}
            <div className="col-span-1 ">
              <div className="flex items-start justify-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">
                  Quad Motor
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 col-span-2">
              {/* Left Aileron */}
              <div className="col-span-1 flex items-center ">
                <label className="w-32 text-sm font-medium">Left Aileron</label>
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("leftAileron")}
                      placeholder="Please Select"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        leftaileronPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                      aria-label="Search Left Aileron"
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Aileron */}
              <div className="col-span-1 flex items-center ">
                <label className="w-32 text-sm font-medium">
                  Right Aileron
                </label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("rightAileron")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      rightaileronPopup.open([
                        { id: 101, name: "GPS Model X" },
                        { id: 102, name: "GPS Model Y" },
                      ])
                    }
                    aria-label="Search Right Aileron"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Elevator */}
              <div className="col-span-1 flex items-center  mt-4">
                <label className="w-32 text-sm font-medium">Elevator</label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("elevator")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      elevatorPopup.open([
                        { id: 103, name: "GPS Model Z" },
                        { id: 104, name: "GPS Model A" },
                      ])
                    }
                    aria-label="Search Elevator"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Rudder */}
              <div className="col-span-1 flex items-center  mt-4">
                <label className="w-32 text-sm font-medium">Rudder</label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("extraField")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      rudderPopup.open([
                        { id: 105, name: "GPS Model B" },
                        { id: 106, name: "GPS Model C" },
                      ])
                    }
                    aria-label="Search Extra Field"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Left Aileron */}
              <div className="col-span-1 flex items-center ">
                <label className="w-32 text-sm font-medium">Left Aileron</label>
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("leftAileron")}
                      placeholder="Please Select"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        leftaileronPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                      aria-label="Search Left Aileron"
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Aileron */}
              <div className="col-span-1 flex items-center ">
                <label className="w-32 text-sm font-medium">
                  Right Aileron
                </label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("rightAileron")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      rightaileronPopup.open([
                        { id: 101, name: "GPS Model X" },
                        { id: 102, name: "GPS Model Y" },
                      ])
                    }
                    aria-label="Search Right Aileron"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Elevator */}
              <div className="col-span-1 flex items-center  mt-4">
                <label className="w-32 text-sm font-medium">Elevator</label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("elevator")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      elevatorPopup.open([
                        { id: 103, name: "GPS Model Z" },
                        { id: 104, name: "GPS Model A" },
                      ])
                    }
                    aria-label="Search Elevator"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Rudder */}
              <div className="col-span-1 flex items-center  mt-4">
                <label className="w-32 text-sm font-medium">Rudder</label>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    {...register("extraField")}
                    placeholder="Please Select"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      rudderPopup.open([
                        { id: 105, name: "GPS Model B" },
                        { id: 106, name: "GPS Model C" },
                      ])
                    }
                    aria-label="Search Extra Field"
                  >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Popup UI */}
          {leftaileronPopup.isOpen && (
            <DroneLeftAileronPopupTable
              onClose={leftaileronPopup.close}
              data={leftaileronPopup.popupData}
            />
          )}

          {rightaileronPopup.isOpen && (
            <DroneRightAileronPopupTable
              onClose={rightaileronPopup.close}
              data={rightaileronPopup.popupData}
            />
          )}
          {elevatorPopup.isOpen && (
            <DroneElevatorPopupTable
              onClose={elevatorPopup.close}
              data={elevatorPopup.popupData}
            />
          )}

          {rudderPopup.isOpen && (
            <DroneRudderPopupTable
              onClose={rudderPopup.close}
              data={rudderPopup.popupData}
            />
          )}
        </div>

        {/*Fixed-Wing Motor Register */}
        <div className="border-b mt-6">
          <div className="grid grid-cols-3 gap-4 mb-6  ">
            {/* Fixed-Wing Motor*/}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">
                  Fixed-Wing Motor
                </label>
              </div>
            </div>

            {/* Air */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">Air</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("air")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        airPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.air && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.air.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {airPopup.isOpen && (
                <DroneDataAirLinkPopupTable
                  onClose={airPopup.close}
                  data={airPopup.popupData}
                />
              )}
            </div>

            {/*Fixed-Wing Motor */}
            <div className="col-span-1">
              <div className="flex items-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium mt-2">Ground</label>

                {/* Input Section */}
                <div className="flex-1">
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      {...register("ground")}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        groundPopup.open([
                          { id: 101, name: "GPS Model X" },
                          { id: 102, name: "GPS Model Y" },
                        ])
                      }
                    >
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Error Message */}
                  {errors.ground && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.ground.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Popup UI */}

              {groundPopup.isOpen && (
                <DroneGroundDataLinkPopupTable
                  onClose={groundPopup.close}
                  data={groundPopup.popupData}
                />
              )}
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

export default DroneRegister;
