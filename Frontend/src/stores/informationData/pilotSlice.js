
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const VITE_API_URL ="http://localhost:8080"

// Fetch all pilots
export const fetchPilots = createAsyncThunk(
  "pilots/fetchPilots",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/aioceaneye/pilots`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch pilot");
    }
  } 
);

// Fetch a single pilot detail by ID
export const fetchPilotById = createAsyncThunk(
  "pilots/fetchPilotById",
  async (pilotId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${VITE_API_URL}/aioceaneye/pilots/${pilotId}`
      );
      return response.data; // This should return an array of vessels
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch vessels");
    }
  }
);

// Add create pilot
export const addPilot = createAsyncThunk("pilot/adPilot", async (pilotData, thunkAPI) => {
  try {
    const response = await axios.post(`${VITE_API_URL}/aioceaneye/pilots`, pilotData, {
      headers: {
        "Content-Type": "application/json", // Explicitly set the Content-Type
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});


// Update Company
export const updatePilot = createAsyncThunk(
  "pilot/updatePilot",
  async ({ id, pilotData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/aioceaneye/pilots/${id}`,pilotData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update company");
    }
  }
);

// Delete Company
export const  deletePilot= createAsyncThunk(
  "pilots/ deletePilot",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${VITE_API_URL}/aioceaneye/pilots/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete pilot");
    }
  }
);

const pilotSlice = createSlice({
  name: "pilots",
  initialState: {
    pilots: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Companies
      .addCase(fetchPilots.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPilots.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pilots = action.payload;
      })
      .addCase(fetchPilots.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred while fetching pilots.";
      })

      // Fetch Pilot By ID
            .addCase(fetchPilotById.pending, (state) => {
              state.loading = true;
            })
            .addCase(fetchPilotById.fulfilled, (state, action) => {
              state.loading = false;
              state.currentPilot= action.payload; // Store the fetched company in currentCompany
            })
            .addCase(fetchPilotById.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload || "An error occurred while fetching the company.";
            })

      
      
        // Add Company
      .addCase(addPilot.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPilot.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vessels.push(action.payload); // Update this line
      })
      .addCase(addPilot.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Update Company
      .addCase(updatePilot.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePilot.fulfilled, (state, action) => {
        state.loading = false;
        const updatePilot = action.payload; // Full updated company object
        const index = state.companies.findIndex((c) => c.id === updatePilot.id);
        if (index !== -1) {
          state.vessels[index] = updatePilot; // Update the company in the list
        }
      })
      .addCase(updatePilot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while updating the company.";
      })

      // Delete Company
     
      .addCase(deletePilot.fulfilled, (state, action) => {
        state.loading = false;
        state.pilots = state.pilots.filter((v) => v.id !== action.meta.arg); // Update this line
      })
  },
});

export default pilotSlice.reducer;