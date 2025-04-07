
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all companies
export const fetchSchedules = createAsyncThunk(
  "schedules/fetchSchedules",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5004/schedules");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch schedules");
    }
  }
);

// Fetch a single company by ID
export const fetchScheduleById = createAsyncThunk(
  "schedules/fetchScheduleById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5004/schedules/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch company");
    }
  }
);

// Add Company
export const addSchedule = createAsyncThunk(
  "schedules/addSchedule",
  async (scheduleData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5004/schedules", scheduleData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add company");
    }
  }
);

// Update Company
export const updateSchedule = createAsyncThunk(
  "schedules/updateSchedule",
  async ({ id,scheduleData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:5004/schedules/${id}`, scheduleData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update company");
    }
  }
);

// Delete Company
export const  deleteSchedule= createAsyncThunk(
  "schedules/deleteSchedule",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:5004/schedules/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete company");
    }
  }
);

const scheduleSlice = createSlice({
  name: "schedules",
  initialState: {
    schedules: [],
    currentSchedule: null, // Add a field to store the current company being viewed/edited
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch schedules
      .addCase(fetchSchedules.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSchedules.fulfilled, (state, action) => {
        state.loading = false;
        state.schedules = action.payload;
      })
      .addCase(fetchSchedules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching schedules.";
      })

      // Fetch Company By ID
      .addCase(fetchScheduleById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchScheduleById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCompany = action.payload; // Store the fetched company in currentCompany
      })
      .addCase(fetchScheduleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching the company.";
      })

      // Add Company
      .addCase(addSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedules.push(action.payload); // Add the new company to the list
      })
      .addCase(addSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while adding the company.";
      })

      // Update Company
      .addCase(updateSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.loading = false;
        const updateSchedule = action.payload; // Full updated company object
        const index = state.schedules.findIndex((c) => c.id === updateSchedule.id);
        if (index !== -1) {
          state.schedules[index] = updateSchedule; // Update the company in the list
        }
      })
      .addCase(updateSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while updating the company.";
      })

      // Delete Company
      // .addCase(deleteCompany.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(deleteCompany.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.schedules = state.schedules.filter((c) => c.id !== action.payload.id); // Remove the deleted company
      // })
      // .addCase(deleteCompany.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload || "An error occurred while deleting the company.";
      // });
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedules = state.schedules.filter((c) => c.id !== action.meta.arg); // Remove the deleted company
    })
    
  },
});

export default scheduleSlice.reducer;