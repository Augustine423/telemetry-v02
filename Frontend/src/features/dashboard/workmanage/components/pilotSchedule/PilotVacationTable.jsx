
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../../../../components/Pagination'
import PilotVacationRow from './PilotVacationRow'
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import { useEffect } from 'react';
import { fetchWorks } from '../../../../../stores/informationData/workScheduleSlice';

const PilotVacationTable = () => {

    const dispatch=useDispatch();

const {works,loading,error} = useSelector((state)=>state.works || {});

  useEffect(() => {
    dispatch(fetchWorks());
  }, [dispatch]);

console.log(works);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
  return (
    <div className="  py-8">
        <h2 className="px-3 font-semibold">Vacation</h2>
    <div className="overflow-x-auto bg-white border rounded-md">  
      <table className="w-full">
        <thead className="bg-gray-50 m-4 ">
          <tr className=" bg-gray-200 p-6 mx-4 items-center">
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Pilot
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Vacation Period
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
              ) : works.length === 0 ? (
                <NotFound />
              ) : (
                works.map((pilot) => (
                  <PilotVacationRow pilot={pilot} key={pilot.id} />
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