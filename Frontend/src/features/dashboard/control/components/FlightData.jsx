
const FlightData = () => {
  return (
    <div className=" flex flex-col justify-center items-end bg-transparent w-full h-[90vh] p-7">
        <div className="bg-white rounded-[10px] min-w-full max-h-[600px]  mt-36 p-3">
            <table className="table-fixed min-w-full max-h-[656px] overflow-scroll ">
                <thead className="flex justify-between w-full bg-primary bg-opacity-[8%] sticky rounded-[10px]">
                    <tr className="flex justify-between w-full text-sm ">
                        <th className="p-3 flex justify-center items-center w-1/11">Date/Time</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">Drone ID</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">Vessels</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">alt</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">lat</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">lon</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">wind_vel(m/s)</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">time_in_air(m.s)</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">GPS_hdop</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">battery(v)</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/11">ch3out</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col justify-start w-full h-[600px] overflow-scroll text-sm">
                    <tr className="flex justify-between w-full border-b-0.5 p-2">
                        <td className="p-3 flex justify-center items-center w-1/11">25.01.01 12:10:30</td>
                        <td className="p-3 flex justify-center items-center w-1/11">10</td>                
                        <td className="p-3 flex justify-center items-center w-1/11">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/11">35.30054 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/11">148.40883 S</td>
                        <td className="p-3 flex justify-center items-center w-1/11">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/11">5.12</td>
                        <td className="p-3 flex justify-center items-center w-1/11">60.60</td>                
                        <td className="p-3 flex justify-center items-center w-1/11">9</td>
                        <td className="p-3 flex justify-center items-center w-1/11">56.12</td>                
                        <td className="p-3 flex justify-center items-center w-1/11">1000</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default FlightData;