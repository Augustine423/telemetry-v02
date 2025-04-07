import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  // Added createSlice here
import axios from "axios";

export const fetchMaterials = createAsyncThunk(
  "materials/fetchMaterials",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5004/materials");
      return response.data;  // Directly return response.data without extra await
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch materials");
    }
  }
);

const materialSlice = createSlice({
  name: "materials",
  initialState: {
    materials: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaterials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMaterials.fulfilled, (state, action) => {
        state.loading = false;
        state.materials = action.payload;
      })
      .addCase(fetchMaterials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default materialSlice.reducer;