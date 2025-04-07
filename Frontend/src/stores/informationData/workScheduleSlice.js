import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL ="http://localhost:5004";

//testing ui only 
export const fetchWorks = createAsyncThunk(
    "works/fetchWorks",async(_,{rejectWithValue})=>{
        try{
            const response =await axios.get(`${VITE_API_URL}/pilots`);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response?.data || "Failed to fetch data");
        }
    }
)
// fetch work schedule by id 

  export const fetchWorkById= createAsyncThunk(
    "works/fetchWorkById",
    async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${VITE_API_URL}/pilots`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to fetch Work Schedule.");
      }
    }
  );

  // create work schedule
  export const addWorkSchedule = createAsyncThunk("pilots/workSchedule", async(WorkData, thunkAPI)=>{
    try{
      const response =await axios.post(`${VITE_API_URL}/pilots`,WorkData,{
        headers:{
          "Content-Type":"application/json",
        },
      });
      return response.data;
    }catch(error){
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
// delete work schedule 
  export const deleteWorkSchedule = createAsyncThunk("pilots/deleteWorkSchedule", async({id},{rejectWithValue})=>{
    try{
    const response=await axios.delete(`http://localhost:3000/dashboard/work-detail/${id}`);
      return response.data;
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to delete work schedule.")
    }
  })

  export const updateWorkSchedule =createAsyncThunk("pilots/updateWorkSchedule", async({id,workData},{rejectWithValue})=>{
    try{
      const response = await axios.put(`${VITE_API_URL}/pilots/${id}`,workData);
      return response.data;
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to update work schedule");
    }
  })


const workSlice = createSlice({
  name: "works",
  initialState: {
    works: [],
    currentWork: null, // Add a field to store the current company being viewed/edited
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch works
      .addCase(fetchWorks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWorks.fulfilled, (state, action) => {
        state.loading = false;
        state.works = action.payload;
      })
      .addCase(fetchWorks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching companies.";
      })
      //fetch work by id 
      .addCase(fetchWorkById.pending,(state)=>{
        state.loading = true;
      })
      .addCase(fetchWorkById.fulfilled,(state,action)=>{
        console.log('Fetched Work Data:', action.payload);
        state.loading=false;
        state.currentWork=action.payload;
        state.error = null;
      })
      .addCase(fetchWorkById.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload || "Failed to fetch work schedule by id."
      })

//adding work schedule
      .addCase(addWorkSchedule.pending, (state)=>{
        state.status ="loading";
      })
      .addCase(addWorkSchedule.fulfilled,(state,action) =>{
        state.status="succeeded";
        state.works.push(action.payload);
      })
      .addCase(addWorkSchedule.rejected, (state, action)=>{
        state.status="failed";
        state.error =action.payload;
      })

      //deleting work schedule
      .addCase(deleteWorkSchedule.fulfilled, (state,action)=>{
        console.log("Deleting work with ID:", action.meta.arg.id);
        const{id,workId}=action.payload;
        const work=state.works.find((w)=>w.id === workId);
        if(work){
          work.seaWork=work.seaWork.filter((sea)=>sea.id !== workId);
          work.vacation=work.vacation.filter((vac)=>vac.id !==workId);
          work.landWork=work.landWork.filter((land)=>land.id !==workId);
        }
        state.loading=false;
        state.work=state.works.filter((w)=>w.id !== action.meta.arg);
      })
      //editing work schedule
      .addCase(updateWorkSchedule.pending,(state)=>{
        state.loading=true;
      })
      .addCase(updateWorkSchedule.fulfilled,(state,action)=>{
        state.loading= false;
        const updateWork = action.payload;
        const index =state.works.findIndex((c)=>c.id === updateWork.id);
        if(index !== -1){
          state.works[index]=updateWork;
        }
      })
      .addCase(updateWorkSchedule.rejected,(state,action)=>{
        state.loading=false;
        state.error = action.payload || "An error occured while updating the company.";
      })
    }
});
export default workSlice.reducer;