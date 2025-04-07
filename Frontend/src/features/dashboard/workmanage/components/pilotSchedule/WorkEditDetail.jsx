import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { BsCaretDownFill} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useParams , useNavigate} from 'react-router-dom';
import { fetchWorkById, fetchWorks } from '../../../../../stores/informationData/workScheduleSlice';
import { useState } from 'react';
import { updateCompany } from '../../../../../stores/informationData/companySlice';

const WorkEditDetail = () => {

    const dispatch= useDispatch();
    const navigate = useNavigate();
    const {id} =useParams();
    
        const {
            register,
            handleSubmit,
            setValue,
            reset,
            formState:{errors}
        }= useForm();
  
        const[work,setUpdatedWork] = useState(null);
        const currentWork = useSelector((state)=>state.works.currentWork);
        const loading = useSelector((state)=>state.works.loading);
        const error = useSelector((state)=>state.works.error);
        console.log("current Work",currentWork);
        useEffect(()=>{
          if(id){
            dispatch(fetchWorkById(id));
          }
        },[id,dispatch])
    useEffect(()=>{
      if(currentWork){
        reset(currentWork)
      }
    },[currentWork, reset])

    const handleFormSubmit=async(data)=>{
      try{
        const updatedWork = await dispatch(
          updatedWork({id,workData:data})
        ).unwrap();
        setUpdatedWork(updatedWork);
        dispatch(fetchWorks());
        navigate("/dashboard/pilot-overview");
      }catch(error){
        console.error("Error while updating work schedule:", error)
      }
  }

  const current = currentWork[0];

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
  
    
  return (
   <div className="bg-white container w-[95%] mx-auto shadow-md rounded-md ">
         <h2 className="font-semibold text-lg pt-6 px-5 pb-4">Info Register</h2>
         <hr className="w-[97%] mx-auto border-t border-gray-300"/>
   
         <div className="pt-10 ">
           <form action="" className=" justify-center " onSubmit={ handleSubmit(handleFormSubmit)}>
             <div className="w-[70%] px-10">
             <div className="flex flex-row justify-between">
               <label htmlFor="" className="font-semibold text-base">Pilot</label>
               <div className='w-[50%]'>
               <div className="relative w-full">
               <select name="pilot" id="pilot" {...register("pilot",{required:'Pilot name is required.'})} className="border w-full rounded-md py-1 text-gray-400 pl-2 appearance-none">
                 <option value="">Please Select</option>
                 <option value="apple">apple</option>
               </select>
               <div className="absolute right-3 -translate-y-1/2 top-1/2 text-gray-400"><BsCaretDownFill /></div>
               </div>
               {errors.pilot && ( <div className="mt-1"><p className="text-red-500 text-sm">{errors.pilot.message}</p></div>)}
               </div>
             </div>
             <div className="flex flex-row justify-between py-5">
               <label htmlFor="workState" className="font-semibold text-base">Work State</label>
               <div className='w-[50%]'>
               <div className="relative w-full">
               <select name="workState" id="workState" {...register('workState',{required:'Please select a work state.'})} className="border w-full rounded-md py-1 text-gray-400 pl-2 appearance-none">
                 <option value="">Please Select</option>
                 <option value="banana">banana</option>
               </select>
               <div className="absolute right-3 -translate-y-1/2 top-1/2 text-gray-400"><BsCaretDownFill /></div>
               </div>
               {errors.workState && <div className="mt-1">
   
             <p className="text-red-500 text-sm">{errors.workState.message}</p>
             </div>
           }
           </div>
             </div>
             <div className="flex flex-row justify-between">
               <label htmlFor="startDate" className="font-semibold text-base">Start date/End date</label>
               <div className="flex justify-between items-start text-gray-400 w-[50%]">
               <div className=''>
                 <input type="date" placeholder='Select Date' {...register('startDate', {required:'Start date is required.'})} className='px-3 appearance-none border border-gray-400  rounded-md flex-1'/>
                 {errors.startDate && <div className="mt-1"> <p className="text-red-500 text-sm">{errors.startDate.message}</p> </div>}
                 </div>
                 <span className='text-center py-1'>-</span>
                 <div className=''>
                 <input type="date" placeholder='Select Date'  {...register('endDate',{required:'End date is required.',
   
   
                   validate: (value) => {
                     // Check if the end date is after the start date
                     if (watchStartDate && new Date(value) <= new Date(watchStartDate)) {
                       return 'End date must be after the start date';
                     }
                     return true;
                   }
                 })} className=' px-3 appearance-none border border-gray-400 rounded-md flex-1'/>
                 {errors.endDate && <div className="mt-1"> <p className="text-red-500 text-sm">{errors.endDate.message}</p></div>}
                 </div>
               </div>
             </div>
             <div className="flex flex-row justify-between pt-5">
               <label htmlFor="phone" className="font-semibold text-base">Phone No</label>
               <div className='w-[50%]'>
               <input type="text" id="phone" placeholder='Please Enter' {...register('phone',{required:'Phone No is required.',
                 pattern: {
                   value: /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/, // Regex for +<countryCode>-XXX-XXX-XXXX
                   message:
                     "Phone number must follow the format: +<countryCode>-XXX-XXXX-XXXX",
                 },
               })} className="border border-gray-400 rounded-md pl-2 w-full py-1"/>
               {errors.phone && 
                <div className="mt-1">
               <p className="text-red-500 text-sm">{errors.phone.message}</p></div>}
               </div>
             </div>
               <div className="flex flex-row justify-between py-5">
                 <label htmlFor="email" className="font-semibold text-base">E-mail</label>
                 <div className='w-[50%]'>
                   <input type="email" id="email" placeholder='Please Enter' {...register('email',{required:'Email is required'}
                   )} className="border border-gray-400 rounded-md pl-2 w-full py-1"/>
                   {errors.email && 
                   <div className="mt-1">
                   <p className="text-red-500 text-sm">{errors.email.message}</p></div>}
               </div>
               </div>
             </div>
             <hr className="w-[97%] mx-auto border-t border-gray-300 py-6"/>
             <div className="flex justify-end pt-16 pb-5">
               <button type="button" onClick={() => reset()} className="border text-gray-400 w-24 rounded-md py-1">Cancel</button>
               <button type="submit" className="bg-gray-300 w-24 rounded-md py-1 text-blue-400 mx-5">Save</button>
             </div>
           </form>
         </div>
         
   
       </div>
  )
}

export default WorkEditDetail