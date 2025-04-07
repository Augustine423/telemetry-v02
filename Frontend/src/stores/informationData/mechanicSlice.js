
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const VITE_API_URL ="http://localhost:8080"

// Fetch all mechanics
export const fetchMechanics = createAsyncThunk(
  "mechanics/fetchMechanics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/aioceaneye/mechanics`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch mechanics");
    }
  }
);

// Fetch a single mechanic detail by ID
export const fetchMechanicById = createAsyncThunk(
  "mechanics/fetchMechanicById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/aioceaneye/mechanics/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch mechanic");
    }
  }
);



// Add create mechanic
export const addMechanic = createAsyncThunk("mechanic/addMechanic", async (mechanicData, thunkAPI) => {
  try {
    const response = await axios.post(`${VITE_API_URL}/aioceaneye/mechanics`, mechanicData, {
      headers: {
        "Content-Type": "application/json", // Explicitly set the Content-Type
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});


// Update mechanic
export const updateMechanic = createAsyncThunk(
  "mechanics/updateMechanic",
  async ({ id,  mechanicData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/aioceaneye/mechanics/${id}`,  mechanicData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update mechanic");
    }
  }
);

// Delete mechanic
export const  deleteMechanic= createAsyncThunk(
  "mechanics/deleteMechanic",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${VITE_API_URL}/aioceaneye/mechanics/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete mechanic");
    }
  }
);

const companySlice = createSlice({
  name: "mechanics",
  initialState: {
    mechanics: [],
    currentMechanic: null, // Add a field to store the current mechanic being viewed/edited
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch mechanics
      .addCase(fetchMechanics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMechanics.fulfilled, (state, action) => {
        state.loading = false;
        state.mechanics = action.payload;
      })
      .addCase(fetchMechanics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching mechanics.";
      })

      // Fetch mechanic By ID
      .addCase(fetchMechanicById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMechanicById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMechanic = action.payload; // Store the fetched mechanic in currentCompany
      })
      .addCase(fetchMechanicById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching the mechanic.";
      })

   
      .addCase(addMechanic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMechanic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mechanics.push(action.payload);
      })
      .addCase(addMechanic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Update mechanic
      .addCase(updateMechanic.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMechanic.fulfilled, (state, action) => {
        state.loading = false;
        const updateMechanic = action.payload; // Full updated mechanic object
        const index = state.mechanics.findIndex((c) => c.id === updateMechanic.id);
        if (index !== -1) {
          state.mechanics[index] = updateMechanic; // Update the mechanic in the list
        }
      })
      .addCase(updateMechanic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while updating the mechanic.";
      })

      // Delete mechanic
    
      .addCase(deleteMechanic.fulfilled, (state, action) => {
        state.loading = false;
        state.mechanics = state.mechanics.filter((c) => c.id !== action.meta.arg); // Remove the deleted mechanic
    })
    
  },
});

export default companySlice.reducer;