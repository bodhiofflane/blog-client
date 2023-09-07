import {createSlice} from '@reduxjs/toolkit';
import {loginThunk, refreshAuthThunk, registrationThunk} from './authThunk';

type InitialStateType = {
  auth: boolean;
  username: string;
  _id: string;
  role: string;
  avatarURL: string;
  status: 'waiting' | 'loading' | 'success' | 'error';
  message: string;
};

const initialState: InitialStateType = {
  auth: false,
  username: '',
  _id: '',
  role: '',
  avatarURL: '',
  message: '',
  status: 'waiting',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Logout
    logout: (state) => {
      localStorage.removeItem('token');
      state.auth = false;
      state.username = '';
      state._id = '';
      state.role = '';
      state.avatarURL = '';
      state.message = '';
      state.status = 'waiting';
    },
    clearAuthStatusAndMessage: (state) => {
      state.status = 'waiting';
    }
  },
  extraReducers(builder) {
    builder
      // Registration
      .addCase(registrationThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading';
      })
      .addCase(registrationThunk.fulfilled, (state, action) => {
        state.username = action.payload.user.username;
        state._id = action.payload.user._id;
        state.role = action.payload.user.role;
        state.avatarURL = action.payload.user.avatarURL;
        state.auth = true;
        state.message = action.payload.message;
        state.status = 'success';
      })
      .addCase(registrationThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      })
      // Login
      .addCase(loginThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.username = action.payload.user.username;
        state._id = action.payload.user._id;
        state.role = action.payload.user.role;
        state.avatarURL = action.payload.user.avatarURL;
        state.auth = true;
        state.message = action.payload.message;
        state.status = 'success';
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      })
      // Refresh auth
      .addCase(refreshAuthThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading'
      })
      .addCase(refreshAuthThunk.fulfilled, (state, action) => {
        state.username = action.payload.user.username;
        state._id = action.payload.user._id;
        state.role = action.payload.user.role;
        state.avatarURL = action.payload.user.avatarURL;
        state.auth = true;
        state.message = action.payload.message;
        state.status = 'success';
      })
      .addCase(refreshAuthThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      });
  },
});

export const {logout, clearAuthStatusAndMessage} = authSlice.actions;

export default authSlice.reducer;
