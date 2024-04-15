/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import data from "@/components/(userscomponent)/(TransactionTemplateUsers)/data";



// Define the async thunk function
export const fetchData = createAsyncThunk<any>(
  "fetchData",
  async () => {
    const response = await fetch("link");
    return response.json();
  }
);

const firstSlice = createSlice({
  name: "fetchalldata",
  initialState: {
    isLoading: false,
    data: data,
    error: false,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

// Export the reducer
export default firstSlice.reducer;
