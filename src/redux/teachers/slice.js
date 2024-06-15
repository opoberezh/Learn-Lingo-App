
import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchTeachersFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload.teachers;
  state.totalCount = action.payload.totalCount;
};

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    items: [], 
    isLoading: false,
    error: null,
    totalCount: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, handleFetchTeachersFulfilled)
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

export const teacherReducer = teachersSlice.reducer;
export const teachersActions = { ...teachersSlice.actions, fetchTeachers };
