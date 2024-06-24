import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTeachers } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchAllTeachersFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allItems = action.payload.teachers;
  state.totalCount = action.payload.totalCount;
};

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    allItems: [],
    isLoading: false,
    error: null,
    totalCount: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTeachers.pending, handlePending)
      .addCase(fetchAllTeachers.rejected, handleRejected)
      .addCase(fetchAllTeachers.fulfilled, handleFetchAllTeachersFulfilled);
  },
});

export const teacherReducer = teachersSlice.reducer;
export const teachersActions = { ...teachersSlice.actions, fetchAllTeachers };
