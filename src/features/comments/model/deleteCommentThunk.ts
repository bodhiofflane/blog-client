import { createAsyncThunk } from "@reduxjs/toolkit";
import myBlogDeleteComment from '../api/myBlogDeleteComment';

type DeleteCommentResponseType = {
  deletedComment: {
    _id: string;
    authorId: string;
    parentPostId: string;
    commentText: string;
    authorName: string;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
};

const deleteCommentThunk = createAsyncThunk<DeleteCommentResponseType, string>(
  "comment/deleteComment",
  async (commentId) => {
    return await myBlogDeleteComment(commentId);
  }
);

export default deleteCommentThunk;
