
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const VITE_API_URL ="http://localhost:8080"

// Fetch all drones
export const fetchDrones = createAsyncThunk(
  "drones/fetchDrones",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/aioceaneye/drones`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch companies");
    }
  }
);

// Fetch a single company detail by ID
export const fetchCompanyById = createAsyncThunk(
  "companies/fetchCompanyById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/aioceaneye/companies/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch company");
    }
  }
);



// Add create Company
export const addCompany = createAsyncThunk("company/addCompany", async (companyData, thunkAPI) => {
  try {
    const response = await axios.post(`${VITE_API_URL}/aioceaneye/companies`, companyData, {
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
export const updateCompany = createAsyncThunk(
  "companies/updateCompany",
  async ({ id, companyData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/aioceaneye/companies/${id}`, companyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update company");
    }
  }
);

// Delete Company
export const  deleteCompany= createAsyncThunk(
  "companies/deleteCompany",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${VITE_API_URL}/aioceaneye/companies/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete company");
    }
  }
);

const companySlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    currentCompany: null, // Add a field to store the current company being viewed/edited
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch drone
      .addCase(fetchDrones.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDrones.fulfilled, (state, action) => {
        state.loading = false;
        state.drones = action.payload;
      })
      .addCase(fetchDrones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching companies.";
      })

      // Fetch Company By ID
      .addCase(fetchCompanyById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCompany = action.payload; // Store the fetched company in currentCompany
      })
      .addCase(fetchCompanyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching the company.";
      })

      // Add Company

      .addCase(addCompany.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCompany.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companies.push(action.payload);
      })
      .addCase(addCompany.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Update Company
      .addCase(updateCompany.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCompany = action.payload; // Full updated company object
        const index = state.companies.findIndex((c) => c.id === updatedCompany.id);
        if (index !== -1) {
          state.companies[index] = updatedCompany; // Update the company in the list
        }
      })
      .addCase(updateCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while updating the company.";
      })

    // Delete
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = state.companies.filter((c) => c.id !== action.meta.arg); // Remove the deleted company
    })
    
  },
});

export default companySlice.reducer;