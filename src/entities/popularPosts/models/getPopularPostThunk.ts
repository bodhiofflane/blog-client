import { createAsyncThunk } from '@reduxjs/toolkit';
import getPopularPosts from '../api/myBlogGetPopularPosts';

type ResponseGetPopularPostsType = {
  popularPostList: {
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
  message: string;
};

export const getPopularPostsThunk = createAsyncThunk<ResponseGetPopularPostsType>(
  'popularPosts/getPopularPosts',
  async () => {
    return await getPopularPosts();
  }
);