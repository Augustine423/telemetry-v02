import { Link } from "react-router-dom"



const PilotEmptyStage = () => {
  return (
    <tr className="  border-b dark:border-gray-700 ">
      <td colSpan={8} className="px-6 py-4 text-center">
        There is no Pilot .
        <Link
          to="/dashboard/pilot-register"
          className=" text-primary-700 underline"
        >
          Please create Pilot
        </Link>
      </td>
    </tr>
  )
}

export default PilotEmptyStage