import React from 'react'


const WorkDetailById = ({work}) => {
    console.log("matched",work);
    if (!work) {
        return <div>No data available</div>;
      }
  return (
   
    
  <tr className="border " key={work.id}>
    <td className="text-center py-3 ">{work.workPeriod}</td>
    <td className="text-center py-3 ">{work.vassel}</td>
    <td className="text-center py-3">{work.workState}</td>
    <td className="text-center py-3">{work.workForm}</td>
    </tr>
     
    
  )
}

export default WorkDetailById