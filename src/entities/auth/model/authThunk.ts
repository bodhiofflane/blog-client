import {createAsyncThunk} from '@reduxjs/toolkit';
//import {isAxiosError} from 'axios';
import myBlogRegistration from '../api/myBlogRegistration';
import myBlogLogin from '../api/myBlogLogin';
import myBlogRefreshAuth from '../api/myBlogRefreshAuth';

// Reg
type RegistrationResponseType = {
  user: {
    _id: string;
    username: string;
    role: string;
    avatarURL: string;
  };
  token: string;
  message: string;
};

export const registrationThunk = createAsyncThunk<RegistrationResponseType, FormData>(
  'auth/registation',
  async (multipartFormData) => {
    return await myBlogRegistration(multipartFormData);
  }
);

// Login
type LoginResponseType = RegistrationResponseType;

export const loginThunk = createAsyncThunk<LoginResponseType, string>(
  'auth/login',
  async (userData) => {
    return await myBlogLogin(userData);
  }
);

// Refresh auth
type RefreshAuthResposeType = RegistrationResponseType;

export const refreshAuthThunk = createAsyncThunk<RefreshAuthResposeType>(
  'auth/refresh',
  async () => {
    return await myBlogRefreshAuth();
  }
) 

