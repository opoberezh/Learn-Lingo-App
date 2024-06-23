import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: '',
  level: '',
  price: '',
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
     setLanguageFilter(state, action){
      state.selectedLanguage = action.payload;
     },
  setLevelFilter(state, action) {
   state.selectedLevel = action.payload;
  },
  setPriceFilter(state, action){
      state.selectedPrice = action.payload;
    },
  }
 
})

export const { setFilter, setLanguageFilter, setLevelFilter, setPriceFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;