import {isAxiosError} from 'axios';
import {createSlice} from '@reduxjs/toolkit';
import {loginThunk, refreshAuthThunk, registrationThunk} from './authThunk';

type InitialStateType = {
  auth: boolean;
  username: null | string;
  id: null | string;
  role: null | string;
  avatarURL: null | string;
  message: null | string;
};

const initialState: InitialStateType = {
  auth: false,
  username: null,
  id: null,
  role: null,
  avatarURL: null,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //.addCase(registrationThunk.pending, (state, action) => {})
      .addCase(registrationThunk.fulfilled, (state, action) => {
        state.auth = true;
        state.username = action.payload.user.username!;
        state.id = action.payload.user._id;
        state.role = action.payload.user.role;
        state.avatarURL = action.payload.user.avatarURL;
        state.message = action.payload.message;
      })
      .addCase(registrationThunk.rejected, (state, action) => {
        console.log(action.payload);
        if (isAxiosError(action.payload)) {
          state.message = action.payload.response?.data.message;
        }
        state.auth = false;
        state.username = null;
        state.id = null;
        state.avatarURL = null
        state.role = null;
      })
      // Login
      //.addCase(loginThunk.pending, () => {})
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.auth = true;
        state.username = action.payload.user.username;
        state.id = action.payload.user._id;
        state.role = action.payload.user.role;
        state.avatarURL = action.payload.user.avatarURL;
        state.message = action.payload.message;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.auth = false;
        state.username = null;
        state.id = null;
        state.role = null;
        state.avatarURL = null;
      })
      // Refresh auth
      .addCase(refreshAuthThunk.fulfilled, (state, action) => {
        state.auth = true;
        state.username = action.payload.user.username;
        state.id = action.payload.user._id;
        state.role = action.payload.user.role;
        state.avatarURL = action.payload.user.avatarURL;
        state.message = action.payload.message;
      })
      .addCase(refreshAuthThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.auth = false;
        state.username = null;
        state.id = null;
        state.role = null;
        state.avatarURL = null;
      });
  },
});

export default authSlice.reducer;
