import {createSlice} from '@reduxjs/toolkit';
import {getPopularPostsThunk} from './getPopularPostThunk';

type ItitailStateType = {
  popularPosts: {
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
  status: 'waiting' | 'loading' | 'success' | 'error' ;
  message: string;
};

const initialState: ItitailStateType = {
  popularPosts: [],
  status: 'waiting',
  message: '',
};

const popularPostsSlice = createSlice({
  name: 'popularPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularPostsThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading';
      })
      .addCase(getPopularPostsThunk.fulfilled, (state, action) => {
        state.popularPosts = action.payload.popularPostList;

        state.message = action.payload.message;
        state.status = 'success';
      })
      .addCase(getPopularPostsThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      });
  },
});

export default popularPostsSlice.reducer;
