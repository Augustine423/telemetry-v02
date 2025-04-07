

const RecordTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-sm bg-gray-300 text-gray-500">
              <th className="py-2 pr-4 px-3">No</th>
              <th className="py-2 pr-4">List</th>
              <th className="py-2 pr-4">Y</th>
              <th className="py-2 pr-4">N</th>
              <th className="py-2 w-78">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "01", desc: "Doors: ON/IN/OFF" },
              { id: "02", desc: "EFIS/Radios & VHF1/VHF2/Nav1" },
              { id: "03", desc: "GPWS, TCAS, XPDR, FMS, GPS, Radar Alt" },
              {
                id: "04",
                desc: "FD/LNAV, AP/HDG, ALT SEL, VS/FPA, V/S, ILS/Approach, GPS/Approach, VNAV/Desc",
              },
              { id: "05", desc: "ATC/ATIS/RADIO/CLEARANCE" },
              { id: "06", desc: "CREW Briefing/Taxi, ATIS, NOTAM" },
              {
                id: "07",
                desc: "DE-Ice/Anti-Ice, A/C, G/S, LIGHTS, BRAKES, FLAPS",
              },
              { id: "08", desc: "APU Checked/STARTED, Taxi Checklist" },
              { id: "09", desc: "Before Takeoff, TO/CLIMB/CRUISE/DESC" },
              { id: "10", desc: "Approach/Descent/Landing/Taxi In" },
              { id: "11", desc: "Secure/Shutdown/PARKING/TIEDOWN" },
              {
                id: "12",
                desc: "FLIGHT RECORD/TO-LAND/Taxi, Fuel, oil, speed, equipment, CREW EXP",
              },
              {
                id: "13",
                desc: "FLIGHT LOGS/BILLS/Fuel/Hangar, Lav, Rental, A/C Wash",
              },
              { id: "14", desc: "HOTEL/CATERING, RENTAL, SHUTTLE, Hangar/FBO" },
              {
                id: "15",
                desc: "FUEL RECEIPT, OIL, CATERING, MISC, HOTEL RECEIPT",
              },
              { id: "16", desc: "DE-Icing/Anti-Ice/CREW EXP" },
              { id: "17", desc: "Wind Information", isInputRow: true, inputs: ["Wind Direction", "Wind Speed", "Transition Altitude", "Direction"] },
              { id: "18", desc: "Takeoff Information", isInputRow: true, inputs: ["Takeoff Time", "Takeoff Latitude", "Takeoff Longitude"] },
              { id: "19", desc: "Vessel Information", isInputRow: true, inputs: ["Situation", "Speed of a Ship", "Temperature", "Water Temperature", "Deep Water"] },
              { id: "20", desc: "Battery (2) Information [1 Team]", isInputRow: true, inputs: ["Battery", "Battery"] },
            ].map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="py-3 pr-4 px-3 text-sm">{item.id}</td>
                <td className="py-3 pr-4 text-sm">{item.desc}</td>
                {item.isInputRow ? (
                  <td colSpan="3" className="py-3">
                    <div className="flex flex-col space-y-4">
                      {item.inputs.map((label, index) => (
                        <div key={index}>
                          <label className="block text-gray-600 mb-1">{label}</label>
                          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Please Enter" />
                        </div>
                      ))}
                    </div>
                  </td>
                ) : (
                  <>
                    <td className="py-3 pr-4">
                      <input type="checkbox" className="mr-2 mt-4" />
                    </td>
                    <td className="py-3 pr-4">
                      <input type="checkbox" className="mr-2 mt-4" />
                    </td>
                    <td className="py-3">
                      <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Please enter remarks" />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecordTable;
