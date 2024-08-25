import { getAuth } from "firebase/auth";
import axios from 'axios';

const FIREBASE_URL = 'https://learn-lingo-app-a8a9d-default-rtdb.europe-west1.firebasedatabase.app';


export const saveFavoriteTeacher = (teacher) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const userUid = user.uid;  
    const teacherId = teacher.id;  

    if (teacher.remove) {
  
      axios.delete(`${FIREBASE_URL}/favorites/${userUid}/${teacherId}.json`)
        .then(response => {
          console.log('Successfully removed from favorites:', response.data);
        })
        .catch(error => {
          console.error('Error removing from favorites:', error);
        });
    } else {
     
      axios.put(`${FIREBASE_URL}/favorites/${userUid}/${teacherId}.json`, teacher)
        .then(response => {
          console.log('Successfully added to favorites:', response.data);
        })
        .catch(error => {
          console.error('Error adding to favorites:', error);
        });
    }
  } else {
    console.log('User is not logged in');
  }
};

export const getFavorites = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const userUid = user.uid;
    try {
      const response = await axios.get(`${FIREBASE_URL}/favorites/${userUid}.json`);
      return response.data || {}; 
    } catch (error) {
      console.error('Error fetching favorites:', error.message || error);
      throw error;
    }
  } else {
    console.log('User is not logged in');
    return {};
  }
};
