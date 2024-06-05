// operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../../ firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const transformFirebaseUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName || user.email.split('@')[0],
});

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      return transformFirebaseUser(userCredential.user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      return transformFirebaseUser(userCredential.user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout', 
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;
      return user ? transformFirebaseUser(user) : null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
