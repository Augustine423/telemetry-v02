


import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const DroneModelDetailEditForm = ({ onClose }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [specifications, setSpecifications] = useState([
    { id: "model", label: "Model", value: "" },
    { id: "manufacturer", label: "Manufacturer", value: "" },
    { id: "kind", label: "Kind", value: "" },
    { id: "size", label: "Size", value: "" },
    { id: "weight", label: "Weight", value: "" },
    { id: "maxAltitude", label: "Max Altitude", value: "" },
    { id: "maxRadius", label: "Max Radius", value: "" },
    { id: "flightSpeed", label: "Flight Speed", value: "" },
    { id: "flightTime", label: "Flight Time", value: "" },
    { id: "extraField", label: "", value: "" },
  ])

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
  }


  const navigate=useNavigate();

 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Specifications Info Edit</h2>
          <div className="flex items-center gap-3">

          <CirclePlus className="size-6 " /><span>Add Item</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full ">
      

      <hr className="mb-6 border-gray-200" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specifications.map((field, index) => (
            <div key={field.id} className="flex gap-4">
              <div className="w-1/3">
                {field.label && (
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 p-2 border rounded-md bg-gray-50"
                  >
                    {field.label}
                  </label>
                )}
                {!field.label && (
                  <input
                    type="text"
                    placeholder="Label"
                    className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                      const newSpecs = [...specifications]
                      newSpecs[index].label = e.target.value
                      setSpecifications(newSpecs)
                    }}
                  />
                )}
              </div>
              <div className="w-2/3">
                <input
                  type="text"
                  id={field.id}
                  placeholder="Please Enter"
                  className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register(`specifications.${index}.value`)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
           onClick={() => navigate("/dashboard/drone-overview")} // Correct way
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
        </div>

       
      </div>
    </div>
  );
};

export default DroneModelDetailEditForm;

