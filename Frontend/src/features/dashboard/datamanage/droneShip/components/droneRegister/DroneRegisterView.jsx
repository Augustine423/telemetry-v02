import { useState } from "react";
import { useForm } from "react-hook-form";
import { Camera, Search } from "lucide-react";
import DroneInputField from "./DroneInputField";
import { usePopup } from "../../hooks/usePopup";
import DroneFCPopupTable from "./DroneFCPopupTable";
import DroneRCPopupTable from "./DroneRCPopupTable";
import DroneConverterPopupTable from "./DroneConverterPopupTable";
import DronePowerboardPopupTable from "./DronePowerboardPopupTable";
import DroneUBCPopupTable from "./DroneUBCPopupTable";
import DroneAirSpeedSensorPopupTable from "./DroneAirSpeedSensorPopupTable";
import DroneDataAirLinkPopupTable from "./DroneDataAirLinkPopupTable";
import DroneGroundDataLinkPopupTable from "./DroneGroundDataLinkPopupTable";
import DroneLeftAileronPopupTable from "./DroneLeftAileronPopupTable";
import DroneRightAileronPopupTable from "./DroneRightAileronPopupTable";
import DroneElevatorPopupTable from "./DroneElevatorPopupTable";
import DroneRudderPopupTable from "./DroneRudderPopupTable";
import DroneInputnoSecrch from "./DroneInputnoSecrch";
import DroneCameraPopupTable from "./DroneCameraPopupTable";
import DroneGPSPopupTable from "./DroneGPSPopupTable";

const DroneRegisterView = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Popup hooks
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
    // Close all popups
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
    <div className="bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full pt-10">
        {/* Image Upload Section */}
        <div className="grid grid-cols-3 my-6">
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
            <div className="col-span-1">
              <DroneInputnoSecrch
                label="Model"
                name="model"
                register={register}
                errors={errors}
                placeholder="Please Enter"
              />
              <DroneInputnoSecrch
                label="Drone ID"
                name="droneId"
                register={register}
                errors={errors}
                placeholder="Please Enter"
              />
            </div>
            <div className="col-span-1">
              <DroneInputnoSecrch
                label="Serial No"
                name="serialNo"
                register={register}
                errors={errors}
                placeholder="Please Enter"
              />
            </div>
          </div>
        </div>

        {/* Material Register Section */}
        <div className="mb-6 mt-10 border-b">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-6 border-b">
            Material Register
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* FC */}
            <div className="col-span-1">
              <DroneInputField
                label="FC"
                name="fc"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => fcPopup.open()}
              />
              {fcPopup.isOpen && (
                <DroneFCPopupTable
                  onClose={fcPopup.close}
                  data={fcPopup.popupData}
                />
              )}
            </div>

            {/* GPS */}
            <div className="col-span-1">
              <DroneInputField
                label="GPS"
                name="gps"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => gpsPopup.open()}
              />

              {gpsPopup.isOpen && (
                <DroneGPSPopupTable
                  onClose={gpsPopup.close}
                  data={gpsPopup.popupData}
                />
              )}
            </div>

            {/* Camera */}
            <div className="col-span-1">
              <DroneInputField
                label="Camera"
                name="camera"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => cameraPopup.open()}
              />

              {cameraPopup.isOpen && (
                <DroneCameraPopupTable
                  onClose={cameraPopup.close}
                  data={cameraPopup.popupData}
                />
              )}
            </div>

            {/* RC */}
            <div className="col-span-1">
              <DroneInputField
                label="RC"
                name="rc"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => rcPopup.open()}
              />
              {rcPopup.isOpen && (
                <DroneRCPopupTable
                  onClose={rcPopup.close}
                  data={rcPopup.popupData}
                />
              )}
            </div>

            {/* Converter */}
            <div className="col-span-1">
              <DroneInputField
                label="Converter "
                name="converter "
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => converterPopup.open()}
              />

              {converterPopup.isOpen && (
                <DroneConverterPopupTable
                  onClose={converterPopup.close}
                  data={converterPopup.popupData}
                />
              )}
            </div>

            {/* Powerboard */}
            <div className="col-span-1">
              <DroneInputField
                label="Powerboard"
                name="powerboard"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => powerboardPopup.open()}
              />

              {powerboardPopup.isOpen && (
                <DronePowerboardPopupTable
                  onClose={powerboardPopup.close}
                  data={powerboardPopup.popupData}
                />
              )}
            </div>

            {/* UBC*/}
            <div className="col-span-1">
              <DroneInputField
                label="UBC"
                name="ubc"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => ubcPopup.open()}
              />
              {ubcPopup.isOpen && (
                <DroneUBCPopupTable
                  onClose={ubcPopup.close}
                  data={ubcPopup.popupData}
                />
              )}
            </div>

            {/* Air Speed Sensor */}
            <div className="col-span-1">
              <DroneInputField
                label="Air Speed Sensor"
                name="airspeedsensor"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => airspeedsensorPopup.open()}
              />

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
              <DroneInputField
                label="Air "
                name="air"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => airPopup.open()}
              />

              {airPopup.isOpen && (
                <DroneDataAirLinkPopupTable
                  onClose={airPopup.close}
                  data={airPopup.popupData}
                />
              )}
            </div>

            {/* Data Link Ground */}
            <div className="col-span-1">
              <DroneInputField
                label="Ground "
                name="ground"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => groundPopup.open()}
              />

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
          <div className="grid grid-cols-3 gap-x-6  mt-6 items-center">
            {/* Centered Servo Label */}
            <div className="col-span-1 ">
              <div className="flex items-start justify-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium ">Servo</label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 col-span-2">
              {/* Left Aileron */}
              <div className="col-span-1">
                <DroneInputField
                  label="Left Aileron "
                  name="leftAileron"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => leftaileronPopup.open()}
                />

                {leftaileronPopup.isOpen && (
                  <DroneLeftAileronPopupTable
                    onClose={leftaileronPopup.close}
                    data={leftaileronPopup.popupData}
                  />
                )}
              </div>

              {/* Right Aileron */}
              <div className="col-span-1">
                <DroneInputField
                  label="Right Aileron "
                  name="rightAileron"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => rightaileronPopup.open()}
                />

                {rightaileronPopup.isOpen && (
                  <DroneRightAileronPopupTable
                    onClose={rightaileronPopup.close}
                    data={rightaileronPopup.popupData}
                  />
                )}
              </div>

              {/* Elevator */}
              <div className="col-span-1">
                <DroneInputField
                  label="Elevator "
                  name="elevator"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => elevatorPopup.open()}
                />

                {elevatorPopup.isOpen && (
                  <DroneElevatorPopupTable
                    onClose={elevatorPopup.close}
                    data={elevatorPopup.popupData}
                  />
                )}
              </div>

              {/* Rudder */}
              <div className="col-span-1">
                <DroneInputField
                  label="Rudder "
                  name="rudder"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => rudderPopup.open()}
                />

                {rudderPopup.isOpen && (
                  <DroneRudderPopupTable
                    onClose={rudderPopup.close}
                    data={rudderPopup.popupData}
                  />
                )}
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
          <div className="grid grid-cols-3 gap-x-6  mt-6 items-center">
            {/* Centered Servo Label */}
            <div className="col-span-1 ">
              <div className="flex items-start justify-start">
                {/* Label Section */}
                <label className="w-32 text-sm font-medium ">Quad Motor</label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 col-span-2">
              {/* Left Aileron */}
              <div className="col-span-1">
                <DroneInputField
                  label="Left Aileron "
                  name="leftAileron"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => leftaileronPopup.open()}
                />

                {leftaileronPopup.isOpen && (
                  <DroneLeftAileronPopupTable
                    onClose={leftaileronPopup.close}
                    data={leftaileronPopup.popupData}
                  />
                )}
              </div>

              {/* Right Aileron */}
              <div className="col-span-1">
                <DroneInputField
                  label="Right Aileron "
                  name="rightAileron"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => rightaileronPopup.open()}
                />

                {rightaileronPopup.isOpen && (
                  <DroneRightAileronPopupTable
                    onClose={rightaileronPopup.close}
                    data={rightaileronPopup.popupData}
                  />
                )}
              </div>

              {/* Elevator */}
              <div className="col-span-1">
                <DroneInputField
                  label="Elevator "
                  name="elevator"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => elevatorPopup.open()}
                />

                {elevatorPopup.isOpen && (
                  <DroneElevatorPopupTable
                    onClose={elevatorPopup.close}
                    data={elevatorPopup.popupData}
                  />
                )}
              </div>

              {/* Rudder */}
              <div className="col-span-1">
                <DroneInputField
                  label="Rudder "
                  name="rudder"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => rudderPopup.open()}
                />

                {rudderPopup.isOpen && (
                  <DroneRudderPopupTable
                    onClose={rudderPopup.close}
                    data={rudderPopup.popupData}
                  />
                )}
              </div>

              {/* Left Aileron */}
              <div className="col-span-1">
                <DroneInputField
                  label="Left Aileron "
                  name="leftAileron"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => leftaileronPopup.open()}
                />

                {leftaileronPopup.isOpen && (
                  <DroneLeftAileronPopupTable
                    onClose={leftaileronPopup.close}
                    data={leftaileronPopup.popupData}
                  />
                )}
              </div>

              {/* Right Aileron */}
              <div className="col-span-1">
                <DroneInputField
                  label="Right Aileron "
                  name="rightAileron"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => rightaileronPopup.open()}
                />

                {rightaileronPopup.isOpen && (
                  <DroneRightAileronPopupTable
                    onClose={rightaileronPopup.close}
                    data={rightaileronPopup.popupData}
                  />
                )}
              </div>

              {/* Elevator */}
              <div className="col-span-1">
                <DroneInputField
                  label="Elevator "
                  name="elevator"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => elevatorPopup.open()}
                />

                {elevatorPopup.isOpen && (
                  <DroneElevatorPopupTable
                    onClose={elevatorPopup.close}
                    data={elevatorPopup.popupData}
                  />
                )}
              </div>

              {/* Rudder */}
              <div className="col-span-1">
                <DroneInputField
                  label="Rudder "
                  name="rudder"
                  register={register}
                  errors={errors}
                  placeholder="Please Enter"
                  onClick={() => rudderPopup.open()}
                />

                {rudderPopup.isOpen && (
                  <DroneRudderPopupTable
                    onClose={rudderPopup.close}
                    data={rudderPopup.popupData}
                  />
                )}
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

        {/* Fixed-Wing Motor Register */}
        <div className="border-b">
          <div className="grid grid-cols-3 gap-4 mb-4 mt-6 ">
            {/* Fixed-Wing Motor Row */}
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
              <DroneInputField
                label="Air "
                name="air"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => airPopup.open()}
              />

              {airPopup.isOpen && (
                <DroneDataAirLinkPopupTable
                  onClose={airPopup.close}
                  data={airPopup.popupData}
                />
              )}
            </div>
            {/* Data Link Ground */}
            <div className="col-span-1">
              <DroneInputField
                label="Ground "
                name="ground"
                register={register}
                errors={errors}
                placeholder="Please Enter"
                onClick={() => groundPopup.open()}/>
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
};
export default DroneRegisterView;
