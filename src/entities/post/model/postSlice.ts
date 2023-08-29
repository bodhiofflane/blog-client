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
  status: 'waiting' | 'loading' | 'success' | 'error' | 'deleted';
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
  reducers: {},
  extraReducers(builder) {
    builder
      // Эм... мне нужно взять полученный пост с бека и запушить его в массив постов в postsSlice
      // Вообщем этот thunk нужно обрабатывать в postsSlice, как и удаление поста(((
      .addCase(createPostThunk.pending, () => {})
      .addCase(createPostThunk.fulfilled, () => {})
      .addCase(createPostThunk.rejected, () => {})
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
      // Delete post. Хм... удалю и з массива постов, если там есть
      .addCase(deletePostByIdThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePostByIdThunk.fulfilled, (state, {payload}) => {
        state.message = payload.message;
        state.status = 'deleted';
      })
      .addCase(deletePostByIdThunk.rejected, () => {})
  },
});

export default postSlice.reducer;
