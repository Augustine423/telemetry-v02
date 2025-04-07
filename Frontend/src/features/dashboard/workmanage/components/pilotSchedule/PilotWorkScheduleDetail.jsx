import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchWorkById } from "../../../../../stores/informationData/workScheduleSlice";
import WorkDetailById from "./WorkDetailById";
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import { useParams } from "react-router-dom";
const PilotWorkScheduleDetail = () => {

 const {id} =useParams();
 
  const dispatch= useDispatch();
 
  const currentWorkArray = useSelector((state)=>state.works.currentWork);
  const loading = useSelector((state)=>state.works.loading);
  const error = useSelector((state)=>state.works.error);

  useEffect(()=>{
    if(id){
      console.log(`Fetching data for ID: ${id}`);
      dispatch(fetchWorkById(id))
    }
    
  },[dispatch,id]);
  
  if (!currentWorkArray || currentWorkArray.length === 0) {
    console.log("currentWork is null or undefined");
    return <p>Loading...</p>;
  }
  
  //  Get the first object from the array
  const current = currentWorkArray[0];
  
  // Check if seaWork contains the given ID
  const seaWorkMatch = current.seaWork?.find(work => work.id.toString() === id);
  const vacationMatch = current.vacation?.find(work => work.id.toString() === id);
  const landWorkMatch = current.landWork?.find(work => work.id.toString() === id);
  
  let matchedWork = null;
if (seaWorkMatch) {
  matchedWork = seaWorkMatch;
  console.log("Matched in seaWork:", matchedWork);
} else if (vacationMatch) {
  matchedWork = vacationMatch;
  console.log("Matched in vacation:", matchedWork);
} else if (landWorkMatch) {
  matchedWork = landWorkMatch;
  console.log("Matched in landWork:", matchedWork);
} else {
  console.log("No match found for this ID.");
}
    
  
  if (loading) {
    return <p>Loading company details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Prevent rendering if currentCompany is undefined
  if (!currentWorkArray) {
    return <p className="text-red-500">Work not found.</p>;
  }

  console.log("Work ID:", currentWorkArray);

  const detail=
  [{
    "id":1,
    "workPeriod":"2 month",
    "vassel":"vassel 1",
    "workState":"Sea Work",
    "workForm":"text"
  }
]

  return (
    <div className="bg-white overflow-x-auto rounded-md shadow-md mx-4">
       <div className="py-5">
        <h2 className="font-semibold text-lg text-center">{matchedWork.pilot}</h2>
       </div>
      <h2 className="px-3 font-semibold pb-3">Work Record</h2>
      <table className="w-full mx-auto">
        <thead className="bg-gray-50 m-4 ">
          <tr className=" bg-gray-200 p-6 mx-4 items-center">
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              WorkPeriod
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Vassel
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
             Work State
            </th>
           
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Work Form 
            </th>
           
          </tr>
        </thead>
        <tbody className=" ">
          {loading ? (
                    <PageLoading />
                  ) :  matchedWork.length === 0 ? (
                    <NotFound />
                  ) : (
                    detail.map((work)=>(
                      <WorkDetailById work={work} key={work.id}/>
                    ))
                  
                  )} 
            </tbody>
       </table>
       
    </div>
  )
}

export default PilotWorkScheduleDetail