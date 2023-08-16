import {createAsyncThunk} from '@reduxjs/toolkit';
import myBlogCreatePost from '../api/myBlogCreatePost';

type CreatePostResponeType = {
  post: {
    title: string,
    postText: string;
    author: string,
    imgURL: string,
    views: number,
    _id: string,
    createdAt: string,
    updatedAt: string,
  },
  message: string;
}

export const createPostThunk = createAsyncThunk<CreatePostResponeType, FormData>(
  'post/create',
  async (multipartFormData) => {
    const {data} = await myBlogCreatePost(multipartFormData);
    return data;
  }
);