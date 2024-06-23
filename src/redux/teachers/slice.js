import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers, fetchAllTeachers } from './operations';

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
};

const handleFetchAllTeachersFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allItems = action.payload.teachers; // Store all teachers in a separate property
  state.totalCount = action.payload.totalCount;
};

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    items: [], 
    allItems: [], // Add a new property to store all teachers
    isLoading: false,
    error: null,
    totalCount: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, handleFetchTeachersFulfilled)
      .addCase(fetchTeachers.rejected, handleRejected)
      .addCase(fetchAllTeachers.fulfilled, handleFetchAllTeachersFulfilled);
  },
});

export const teacherReducer = teachersSlice.reducer;
export const teachersActions = { ...teachersSlice.actions, fetchTeachers, fetchAllTeachers };


