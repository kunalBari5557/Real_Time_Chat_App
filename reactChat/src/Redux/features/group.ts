import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/group/list`);
  const data = await response.json();
  return data;
});

export const groupSlice = createSlice({
  name: "groups",
  initialState: {
    groups: [], // Make sure to include an empty array here
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groups = action.payload;
      })
      .addCase(fetchUsers.rejected, (state:any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default groupSlice.reducer;
