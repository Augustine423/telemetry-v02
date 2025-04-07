
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../../../../components/Pagination'
import PilotLandWorkRow from './PilotLandWorkRow'
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import { useEffect } from 'react';
import { fetchWorks } from '../../../../../stores/informationData/workScheduleSlice';

const PilotVacationTable = () => {

    const dispatch=useDispatch();

const {works,loading,error} = useSelector((state)=>state.works || {});
console.log("Work Schedule",works);

  useEffect(() => {
    dispatch(fetchWorks());
  }, [dispatch]);



if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
  return (
    <div className="  py-8">
        <h2 className="px-3 font-semibold">Land Work</h2>
    <div className="overflow-x-auto bg-white border rounded-md">  
      <table className="w-full">
        <thead className="bg-gray-50 m-4 ">
          <tr className=" bg-gray-200 p-6 mx-4 items-center">
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Pilot
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Land Work Period
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Be Left Day
            </th>
           
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600"></th>
           
          </tr>
        </thead>
        <tbody className=" ">
        {loading ? (
                <PageLoading />
              ) :  works.length === 0 ? (
                <NotFound />
              ) : (
                works.map((pilot) => (
                  <PilotLandWorkRow pilot={pilot} key={pilot.id} />
                ))
              )} 
        </tbody>
      </table>
    </div>

    <Pagination />
  </div>
  )
}

export default PilotVacationTable