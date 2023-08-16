import {createSlice} from '@reduxjs/toolkit';
import {createPostThunk} from '../../../features/post/model/postThunk';

type InitialStateType = {
  post: {
    id: null | string;
    title: null | string;
    postText: null | string;
    author: null | string;
    imgURL: null | string;
    views: null | number;
    createdAt: null | string;
    updatedAt: null | string;
  };
  status: 'ok' | 'loading' | 'error';
  message: null | string;
};

const initialState: InitialStateType = {
  post: {
    id: null,
    title: null,
    postText: null,
    author: null,
    imgURL: null,
    views: null,
    createdAt: null,
    updatedAt: null,
  },
  status: 'ok',
  message: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Create post. Тут у я просто должен запушить пост в массив постов
      .addCase(createPostThunk.pending, (state) => {
        state.status = 'loading';
        state.message = null;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.post.id = action.payload.post._id;
        state.post.title = action.payload.post.title;
        state.post.postText = action.payload.post.postText;
        state.post.author = action.payload.post.author;
        state.post.imgURL = action.payload.post.imgURL;
        state.post.views = action.payload.post.views;
        state.post.createdAt = action.payload.post.createdAt;
        state.post.updatedAt = action.payload.post.updatedAt;
        
        state.message = action.payload.message;
        state.status = 'ok';
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.error.message as string;
      });
    // Get post
  },
});

export default postSlice.reducer;
