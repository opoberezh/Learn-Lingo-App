import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchTeachers.fulfilled, (state, action) => {
      state.items = action.payload;
state.isLoading = false;
state.error = null;
    })

  }
})

export const teacherReducer = teachersSlice.reducer;