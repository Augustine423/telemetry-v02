import {

  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL = "http://localhost:5004";

//fetch all reports
export const fetchReports =createAsyncThunk(
  "reports/fetchReports",
  async(_,{rejectWithValue})=>{
    try{
      const response = await axios.get(`${VITE_API_URL}/reports`);
      return response.data;
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to fetch reports");
    }
  }
);

//  fetch report by id 
export const fetchReportById = createAsyncThunk(
  "reports/fetchReportById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${VITE_API_URL}/report/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch report"
      );
    }
  }
);
// create item request report
export const storeReport = createAsyncThunk(
  "reports/storeReport",
  async (ReportData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${VITE_API_URL}/reports`,
        ReportData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const reportSlice = createSlice({
    name:"reports",
    initialState:{
        reports:[],
        currentReport:null,
        loading:false,
        error:null,
    },
    reducers:{},
  

    extraReducers:(builder)=>{
        builder

        // fetch all reports
        .addCase(fetchReports.pending,(state)=>{
          state.loading = true;
        })
        .addCase(fetchReports.fulfilled,(state,action)=>{
          state.loading=false;
          state.reports=action.payload;
        })
        .addCase(fetchReports.rejected,(state,action)=>{
          state.loading=false;
          state.error = action.payload || "An error occurred while fetching reports"
        })

        //fetch report by id 
        .addCase(fetchReportById.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchReportById.fulfilled,(state,action)=>{
            console.log("Fetched item request report Data:", action.payload);
            state.loading=false;
            state.currentItemRequestReport=action.payload;
            state.error = null;
        })
        .addCase(fetchReportById.rejected,(state,action)=>{
          state.loading = false;
          state.error =action.payload || "Failed to fetch item request report";
        })

        //create item request report 
        .addCase(storeReport.pending,(state)=>{
          state.status ="loading";
        })
        .addCase(storeReport.fulfilled,(state,action)=>{
          state.status="Succeeded";
          state.itemRequestReports.push(action.payload);
        })
        .addCase(storeReport.rejected,(state,action)=>{
          state.status="failed";
          state.error= action.payload;
        })
    }
})
export default reportSlice.reducer;
