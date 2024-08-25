import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  status: 'idle',
  error: null,
};


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push({ ...action.payload });
    },
    removeFromFavorite: (state, action) => {
      const idToRemove = action.payload;
      state.favorites = state.favorites.filter((item) => item.id !== idToRemove);
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
