import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, refreshUser } from './operations';

const initialState = {
  user: { uid: null, displayName: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = { name: action.payload.displayName, email: action.payload.email };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { name: action.payload.displayName, email: action.payload.email };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = { name: action.payload.displayName, email: action.payload.email };
          state.token = action.payload.token;
          state.isLoggedIn = true;
        } else {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        }
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
