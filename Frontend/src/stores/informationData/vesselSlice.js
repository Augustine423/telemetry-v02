import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL = "http://localhost:8080";

// Fetch all vessels
export const fetchVessels = createAsyncThunk(
  "vessels/fetchVessels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/aioceaneye/vessels`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch vessels");
    }
  }
);

// Fetch a single company detail by ID
export const fetchVesselsByCompanyId = createAsyncThunk(
  "vessels/fetchVesselsByCompanyId",
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${VITE_API_URL}/aioceaneye/vessels/company/${companyId}`
      );
      return response.data; // This should return an array of vessels
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch vessels");
    }
  }
);

// Fetch a single company detail by ID
export const fetchVesselById = createAsyncThunk(
  "vessels/fetchVesselById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${VITE_API_URL}/aioceaneye/vessels/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch Vessels");
    }
  }
);

// Add create Company
export const addVessel = createAsyncThunk(
  "vessel/addVessel",
  async (vesselData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${VITE_API_URL}/aioceaneye/vessels`,
        vesselData,
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set the Content-Type
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Update Company
export const updateVessel = createAsyncThunk(
  "vessel/updateVessel",
  async ({ id, vesselData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${VITE_API_URL}/aioceaneye/vessels/${id}`,
        vesselData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update company"
      );
    }
  }
);

// Delete Company
export const deleteVessel = createAsyncThunk(
  "vessels/deleteVessel",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${VITE_API_URL}/aioceaneye/vessels/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete vessel");
    }
  }
);

const vesselSlice = createSlice({
  name: "vessels",
  initialState: {
    vessels: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch vessels
      .addCase(fetchVessels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVessels.fulfilled, (state, action) => {
        state.loading = false;
        state.vessels = action.payload;
      })
      .addCase(fetchVessels.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "An error occurred while fetching vessels.";
      })

      // Fetch Vessels by Company ID
      .addCase(fetchVesselsByCompanyId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVesselsByCompanyId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vessels = action.payload; // Update vessels state
      })
      .addCase(fetchVesselsByCompanyId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch Detail Vessel By ID
      .addCase(fetchVesselById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVesselById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentVessel = action.payload; // Store the fetched company in currentCompany
      })
      .addCase(fetchVesselById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "An error occurred while fetching the company.";
      })

      // Add Company
      .addCase(addVessel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addVessel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vessels.push(action.payload); // Update this line
      })
      .addCase(addVessel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Update Company
      .addCase(updateVessel.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVessel.fulfilled, (state, action) => {
        state.loading = false;
        const updateVessel = action.payload; // Full updated company object
        const index = state.vessels.findIndex((c) => c.id === updateVessel.id);
        if (index !== -1) {
          state.vessels[index] = updateVessel; // Update the company in the list
        }
      })
      .addCase(updateVessel.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "An error occurred while updating the company.";
      })

      // Delete Company

      .addCase(deleteVessel.fulfilled, (state, action) => {
        state.loading = false;
        state.vessels = state.vessels.filter((v) => v.id !== action.meta.arg); // Update this line
      });
  },
});

export default vesselSlice.reducer;
