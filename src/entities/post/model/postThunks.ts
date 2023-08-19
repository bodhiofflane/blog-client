import { createAsyncThunk } from '@reduxjs/toolkit';
import myBlogGetPostById from '../api/myBlogGetPostById';

type getPostByIdResponseType = {
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
  message: string;
};

export const getPostByIdThunk = createAsyncThunk<getPostByIdResponseType, string>(
  'post/getPostById',
  async (id) => {
    return await myBlogGetPostById(id);
  }
);