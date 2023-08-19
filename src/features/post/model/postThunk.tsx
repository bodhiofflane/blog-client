import {createAsyncThunk} from '@reduxjs/toolkit';
import myBlogCreatePost from '../api/myBlogCreatePost';
import myBlogDeletePostById from '../api/myBlogDeletePostById';
import { deletePostFromArrayPosts } from '../../../entities/posts/models/postsSlice';

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

//
type DeletePostResponseType = CreatePostResponeType;

export const deletePostByIdThunk = createAsyncThunk<DeletePostResponseType, string>(
  'post/delete',
  async (id, {dispatch}) => {
    dispatch(deletePostFromArrayPosts(id));
    return myBlogDeletePostById(id);
  }
);