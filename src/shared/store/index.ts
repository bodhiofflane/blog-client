import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../../entities/auth/model/authSlice';
import postSlice from '../../entities/post/model/postSlice';
import postsSlice from '../../entities/posts/models/postsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice, 
    posts: postsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
