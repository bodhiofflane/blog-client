import {createSlice} from '@reduxjs/toolkit';
import {createPostThunk, deletePostByIdThunk} from '../../../features/post/model/postThunk';
import { getPostByIdThunk } from './postThunks';

type InitialStateType = {
  post: {
    _id: string;
    title: string;
    postText: string;
    authorId: string;
    authorName: string;
    imgURL: string;
    views: number;
    createdAt: string;
    updatedAt: string;
  };
  status: 'waiting' | 'loading' | 'success' | 'error' | 'created' | 'deleted';
  message: string;
};

const initialState: InitialStateType = {
  post: {
    _id: '',
    title: '',
    postText: '',
    authorId: '',
    authorName: '',
    imgURL: '',
    views: 0,
    createdAt: '',
    updatedAt: '',
  },
  status: 'waiting',
  message: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearPostStatusAndMessage: (state) => {
      state.message = '';
      state.status = 'waiting';
    }
  },
  extraReducers(builder) {
    builder

      // ----------
      // Create Post
      .addCase(createPostThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading';
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        // Устанавливаю полученный пост в этот стейт. А после получаю его id на странице и редиректаю нанего.
        state.post = action.payload.post;

        state.message = action.payload.message;
        state.status = 'created';
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      })

      // ----------
      // Delete post. Хм... удалю и з массива постов, если там есть
      .addCase(deletePostByIdThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading';
      })
      .addCase(deletePostByIdThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.status = 'deleted';
      })
      .addCase(deletePostByIdThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      })

      // ----------
      // Get post
      .addCase(getPostByIdThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPostByIdThunk.fulfilled, (state, action) => {
        state.post = action.payload.post;

        state.message = action.payload.message;
        state.status = 'success';
      })
      .addCase(getPostByIdThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      })
  },
});

export const {clearPostStatusAndMessage} = postSlice.actions;

export default postSlice.reducer;
