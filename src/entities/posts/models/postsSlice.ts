import { createSlice } from '@reduxjs/toolkit';
import { getPostsThunk } from './postsThunk';

type ItitailStateType = {
  posts: {
    _id: null | string;
    title: null | string;
    postText: null | string;
    author: null | string;
    imgURL: null | string;
    views: null | number;
    createdAt: null | string;
    updatedAt: null | string;
  }[];
  status: 'ok' | 'loading' | 'error';
  message: null | string;
}; 

const initialState: ItitailStateType = {
  posts: [],
  status: 'ok',
  message: null,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload.posts;

        state.message = action.payload.message;
        state.status = 'ok';
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      })
  }
})

export default postsSlice.reducer;