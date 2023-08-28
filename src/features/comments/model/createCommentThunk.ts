import { createAsyncThunk } from '@reduxjs/toolkit';
import myBlogCreateComment from '../api/myBlogCreateComment';

type CreateCommentResponseType = {
  comment: {
    authorId: string;
    parentPostId: string;
    commentText: string;
    authorName: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
};

export const createCommentThunk = createAsyncThunk<CreateCommentResponseType, string>(
  'comments/createComment',
  async (commentData) => {
    return await myBlogCreateComment(commentData);
  }
)