import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../../entities/auth/model/authSlice';
import postSlice from '../../entities/post/model/postSlice';
import postsSlice from '../../entities/posts/models/postsSlice';
import popularPostsSlice from '../../entities/popularPosts/models/popularPostsSlice';
import commentsSlice from '../../entities/comments/model/commentsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice, 
    posts: postsSlice,
    popularPosts: popularPostsSlice,
    comments: commentsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
