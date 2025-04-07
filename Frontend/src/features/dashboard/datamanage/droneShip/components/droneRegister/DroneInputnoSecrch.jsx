import React from 'react'

const DroneInputnoSecrch = ({
   
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
    <div className="flex-1">
      <input
        type={type}
        {...register(name, { required: `${label} is required` })}
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  </div>
  )
}

export default DroneInputnoSecrch