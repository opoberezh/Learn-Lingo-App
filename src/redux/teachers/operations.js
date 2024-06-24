import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://learn-lingo-app-a8a9d-default-rtdb.europe-west1.firebasedatabase.app/';

// export const fetchTeachers = createAsyncThunk(
//   'teachers/fetchAll',
//   async ({ pageSize = 3, pageNumber = 0 }, thunkAPI) => {
//     try {
//       const res = await axios.get('teachers.json');
//       const data = res.data;

//       console.log('API Response:', data);

//       if (!data) {
//         throw new Error('No data returned from API');
//       }

//       const teachersArray = Object.keys(data).map((key) => ({
//         id: key,
//         ...data[key],
//       }));

//       const paginatedTeachers = teachersArray.slice(
//         pageNumber * pageSize,
//         (pageNumber + 1) * pageSize
//       );

//       return { teachers: paginatedTeachers };
//     } catch (error) {
//       console.error('Error fetching teachers:', error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchAllTeachers = createAsyncThunk(
  'teachers/fetchAllTeachers',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('teachers.json');
      const data = res.data;

      console.log('API Response:', data);

      if (!data) {
        throw new Error('No data returned from API');
      }

      const teachersArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      return { teachers: teachersArray, totalCount: teachersArray.length };
    } catch (error) {
      console.error('Error fetching teachers:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
