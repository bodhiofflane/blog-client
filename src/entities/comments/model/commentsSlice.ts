import {createSlice} from '@reduxjs/toolkit';
import { getCommentListByParentPostIdThunk } from './commentsThunks';
import { createCommentThunk } from '../../../features/comments/model/createCommentThunk';
import deleteCommentThunk from '../../../features/comments/model/deleteCommentThunk';

type InitialStateType = {
  comments: {
    _id: string;
    parentPostId: string;
    authorId: string;
    authorName: string;
    commentText: string;
    createdAt: string;
    updatedAt: string
  }[],
  status: 'waiting' | 'loading' | 'success' | 'error' | 'created' | 'deleted';
  message: string;
}

const initialState: InitialStateType = {
  comments: [],
  status: 'waiting',
  message: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Create Comment.
      .addCase(createCommentThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading'
      })
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.comments.push(action.payload.comment);

        state.message = action.payload.message;
        state.status = 'created';
      })
      .addCase(createCommentThunk.rejected, (state, action) => {  
        state.message = action.error.message as string;
        state.status = 'error';
      })
      // Get Comment List
      .addCase(getCommentListByParentPostIdThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading';
      })
      .addCase(getCommentListByParentPostIdThunk.fulfilled, (state, action) => {
        state.comments = action.payload.commentList;

        state.message = action.payload.message;
        state.status = 'success';
      })
      .addCase(getCommentListByParentPostIdThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.status = 'error';
      })
      // Delete comment
      .addCase(deleteCommentThunk.pending, (state) => {
        state.message = '';
        state.status = 'loading';
      })
      .addCase(deleteCommentThunk.fulfilled, (state, action) => {
        state.comments = state.comments.filter((comment) => {
          return comment._id !== action.payload.deletedComment._id;
        });
        state.status = 'success';
      })
      .addCase(deleteCommentThunk.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.error.message as string;
      })
  },
});

export default commentsSlice.reducer;