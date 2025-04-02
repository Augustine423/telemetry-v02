// eslint-disable-next-line react/prop-types
const VesselDetailRowUI = ({vessel}) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-3">
        <div className="w-[120px] h-10 bg-gray-50 rounded flex items-center justify-center">
          <img
            src={vessel.shipLogo}
            alt={vessel.shipName}
            className="w-[69px] h-auto object-contain"
          />
        </div>
      </td>
      <td className="px-4 py-3 text-sm">{vessel.shipName}</td>
      <td className="px-4 py-3 text-sm">{vessel.shipCountry}</td>
      <td className="px-4 py-3 text-sm">{vessel.shipImono}</td>
      <td className="px-4 py-3 text-sm">{vessel.shipMmsi}</td>
      <td className="px-4 py-3 text-sm">{vessel.shipCallSign}</td>
    </tr>
  );
};

export default VesselDetailRowUI;
