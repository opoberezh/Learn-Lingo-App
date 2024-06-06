
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../../fireBaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setAuthHeader } from '../../components/utilities/AuthHeader';

const transformFirebaseUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || user.email.split('@')[0], token
  }
 
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      const user = await transformFirebaseUser(userCredential.user);
      setAuthHeader(user.token); 
      return user;
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
     const user = await transformFirebaseUser(userCredential.user);
      setAuthHeader(user.token);
      return user;
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
      if (user) {
        const token = await user.getIdToken(true); 
        setAuthHeader(token); 
        return transformFirebaseUser(user);
      } else {
        return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
