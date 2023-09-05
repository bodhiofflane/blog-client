import {createAsyncThunk} from '@reduxjs/toolkit';
import myBlogCreatePost from '../api/myBlogCreatePost';
import myBlogDeletePostById from '../api/myBlogDeletePostById';
import { addNewPostToPostArray, deletePostFromArrayPosts} from '../../../entities/posts/models/postsSlice';

type CreatePostResponeType = {
  post: {
    _id: string,
    title: string,
    postText: string;
    authorId: string,
    authorName: string;
    imgURL: string,
    views: number,
    createdAt: string,
    updatedAt: string,
  },
  message: string;
}

export const createPostThunk = createAsyncThunk<CreatePostResponeType, FormData>(
  'post/create',
  async (multipartFormData, {dispatch}) => {
    const data = await myBlogCreatePost(multipartFormData);

    // Когда получаем ответ от сервера с новыйм постом, то пушим его в другой слайс. Также будет и с удалением.
    dispatch(addNewPostToPostArray(data.post));
    return data;
  }
);

//
type DeletePostResponseType = CreatePostResponeType;

export const deletePostByIdThunk = createAsyncThunk<DeletePostResponseType, string>(
  'post/delete',
  async (id, {dispatch}) => {
    const data = await myBlogDeletePostById(id);
    dispatch(deletePostFromArrayPosts(data.post));
    return data;
  }
);