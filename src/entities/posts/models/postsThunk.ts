import { createAsyncThunk } from '@reduxjs/toolkit';
import myBlogGetPost from '../api/myBlogGetPosts';

type ResponseGetPostsType = {
  posts: {
    _id: string;
    title: string;
    postText: string;
    authorId: string;
    authorName: string;
    imgURL: string;
    views: number;
    createdAt: string;
    updatedAt: string
  }[];
  message: string;
}

export const getPostsThunk = createAsyncThunk<ResponseGetPostsType>(
  'posts/getPosts',
  async () => {
    return await myBlogGetPost();
  }
);