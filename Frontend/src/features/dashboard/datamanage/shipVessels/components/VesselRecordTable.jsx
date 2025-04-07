
import VesselRecordRow from './VesselRecordRow'

const VesselRecordTable = () => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-medium text-gray-600">
              <th className="px-4 py-3 rounded-tl-lg">Date</th>
              <th className="px-4 py-3">Area</th>
              <th className="px-4 py-3">Internal Pilot</th>
              <th className="px-4 py-3">Outside Pilot</th>
              <th className="px-4 py-3"> Load DroneA</th>
              <th className="px-4 py-3 rounded-tr-lg"> Load DroneB</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-y-2">
          {/* {vessels?.length > 0 ? (
              vessels.map((vessel) => (
                <VesselDetailRowUI key={vessel.shipId} vessel={vessel} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No vessels found
                </td>
              </tr>
            )} */}
            <VesselRecordRow/>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VesselRecordTable