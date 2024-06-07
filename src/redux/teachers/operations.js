// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { db } from "../../../fireBaseConfig";
// import { getDocs, collection } from "firebase/firestore";

// export const fetchTeachers = createAsyncThunk(
//   'teachers/fetchAll',
//   async ({ pageSize = 4, pageNumber = 0 }, thunkAPI) => {
//     try {
//       const teachersCollectionRef = collection(db, 'teachers');
//       const teachersSnapshot = await getDocs(teachersCollectionRef);
//       const teachers = teachersSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       const paginatedTeachersCards = teachers.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);

//       return paginatedTeachersCards;
//     } catch (error) {
//       console.error('Error fetching events:', error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://learn-lingo-app-a8a9d-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchAll',
  async ({ pageSize = 4, pageNumber = 0 }, thunkAPI) => {
    try {
      const res = await axios.get('teachers.json');
      const data = res.data;

      console.log('API Response:', data);

      if (!data) {
        throw new Error('No data returned from API');
      }

      // Convert Firebase's returned data object into an array
      const teachersArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      // Implementing pagination
      const paginatedTeachers = teachersArray.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      );

      return paginatedTeachers;
    } catch (error) {
      console.error('Error fetching events:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);