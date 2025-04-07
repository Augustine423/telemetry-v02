
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../../../../components/Pagination'
import PilotSeaWorkRow from './PilotSeaWorkRow'
import PageLoading from "../../../../../components/PageLoading";
import NotFound from "../../../../../components/NotFound";
import { useEffect } from 'react';
import { fetchWorks } from '../../../../../stores/informationData/workScheduleSlice';

const PilotSeaWorkTable = () => {

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
        <h2 className="px-3 font-semibold">Sea Work</h2>
    <div className="overflow-x-auto bg-white border rounded-md">  
      <table className="w-full">
        <thead className="bg-gray-50 m-4">
          <tr className=" bg-gray-200 p-6 mx-4">
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Pilot
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Boarding Period
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Board Days
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Vacation Days 
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Land Days
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
                  <PilotSeaWorkRow pilot={pilot} key={pilot.id} />
                ))
              )} 
        </tbody>
      </table>
    </div>

    <Pagination />
  </div>
  )
}

export default PilotSeaWorkTable