import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const fetchTeachers = createAsyncThunk (
  'teachers/fetchAll',
  async (pageSize = 3, pageNumber = 0, thunkAPI) => {
    try {
const teachersCollectionRef = collection(db, 'teachers'); //Ми використовуємо функцію collection для отримання посилання на колекцію teachers
const teacherCard = await getDocs(teachersCollectionRef); //викликаємо getDocs для отримання всіх документів у цій колекції.
const teachers = teacherCard.docs.map(doc => ({
  id: doc.id,
  ...doc.data() //ми створюємо масив об'єктів вчителів, де кожен об'єкт містить ідентифікатор документа та дані про вчителя, які ми отримали з бази даних.
}))

const paginatedTeachersCards = teachers.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);

return paginatedTeachersCards;
    }catch(error){
      console.error('Error fetching events:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)