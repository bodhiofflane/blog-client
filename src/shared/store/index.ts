import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../../entities/auth/model/authSlice';
import postSlice from '../../entities/post/model/postSlice';
import postsSlice from '../../entities/posts/models/postsSlice';
import popularPostsSlice from '../../entities/popularPosts/models/popularPostsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice, 
    posts: postsSlice,
    popularPosts: popularPostsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
