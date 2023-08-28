import {createAsyncThunk} from '@reduxjs/toolkit';
import myBlogGetCommentListByParentPostId from '../api/myBlogGetCommentListByParentPostId';

type  GetCommentListByParentPostIdResponseType = {
  commentList: {
    authorId: string;
    authorName: string;
    parentPostId: string;
    _id: string;
    commentText: string;
    createdAt: string;
    updatedAt: string
  }[],
  message: string;
}

export const getCommentListByParentPostIdThunk = createAsyncThunk<GetCommentListByParentPostIdResponseType, string>(
  'comments/getCommentListByParentPostId',
  async (parentPostId) => {
    return await myBlogGetCommentListByParentPostId(parentPostId);
  }
);