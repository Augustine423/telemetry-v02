import { Search } from "lucide-react"



const DroneInputField = ({onClick,
    label,
    name,
    register,
    errors,
    placeholder,
    type = "text",
  }) => {
  return (
    <div className="flex items-start mb-6">
      <label className="w-32 text-sm font-medium mt-2">{label}</label>
      <div className="flex-1 relative">
        <input
          type={type}
          {...register(name, { required: `${label} is required` })}
          placeholder={placeholder}
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10" // Add pr-10 for padding
        />
        {/* Search Button inside the input field */}
        <button
          type="button"
          onClick={onClick}
          aria-label="Search"
          className="absolute right-3 top-[10px] "
        >
          <Search className="w-5 h-5 text-gray-400" />
        </button>
        {/* Error Message */}
        {errors[name] && (
          <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
        )}
      </div>
    </div>
  );
}

export default DroneInputField