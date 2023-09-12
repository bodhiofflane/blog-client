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
  status: 'waiting' | 'loading' | 'success' | 'error' ;
  interactionStatus: 'waiting' | 'loading' | 'error' | 'created' | 'deleted';
  message: string;
}

const initialState: InitialStateType = {
  comments: [],
  status: 'waiting',
  interactionStatus: 'waiting',
  message: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearInteractionStatus: (state) => {
      state.interactionStatus = 'waiting';
    }
  },
  extraReducers(builder) {
    builder
      // Create Comment.
      .addCase(createCommentThunk.pending, (state) => {
        state.message = '';
        state.interactionStatus = 'loading';
      })
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.comments.push(action.payload.comment);

        state.message = action.payload.message;
        state.interactionStatus = 'created';
      })
      .addCase(createCommentThunk.rejected, (state, action) => {  
        state.message = action.error.message as string;
        state.interactionStatus = 'error';
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
        state.interactionStatus = 'loading';
      })
      .addCase(deleteCommentThunk.fulfilled, (state, action) => {
        state.comments = state.comments.filter((comment) => {
          return comment._id !== action.payload.deletedComment._id;
        });
        state.interactionStatus = 'deleted';
      })
      .addCase(deleteCommentThunk.rejected, (state, action) => {
        state.message = action.error.message as string;
        state.interactionStatus = 'error';
      })
  },
});

export const {clearInteractionStatus} = commentsSlice.actions;

export default commentsSlice.reducer;