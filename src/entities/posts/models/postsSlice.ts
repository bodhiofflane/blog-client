import { createSlice } from '@reduxjs/toolkit';
import { getPostsThunk } from './postsThunk';

type ItitailStateType = {
  posts: {
    _id: string;
    title: string;
    postText: string;
    authorId: string;
    authorName: string;
    imgURL: string;
    views: number;
    createdAt: string;
    updatedAt: string;
  }[];
  status: 'ok' | 'loading' | 'error';
  message: string;
}; 

const initialState: ItitailStateType = {
  posts: [],
  status: 'ok',
  message: '',
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPostToPostArray: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePostFromArrayPosts: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload._id);
    },
  },
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

export const {deletePostFromArrayPosts, addNewPostToPostArray} = postsSlice.actions;

export default postsSlice.reducer;