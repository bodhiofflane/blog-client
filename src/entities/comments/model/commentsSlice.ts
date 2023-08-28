import {createSlice} from '@reduxjs/toolkit';
import { getCommentListByParentPostIdThunk } from './commentsThunks';
import { createCommentThunk } from '../../../features/comments/model/createCommentThunk';

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
  status: 'waiting' | 'loading' | 'success' | 'error' | 'deleted';
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
      // Create Comment. Надо же как то ... эм...
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.comments.push(action.payload.comment)
        // Надо сделать что комментарий добавлен
        // И так же на случай если не удалось добвить
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
  },
});


export default commentsSlice.reducer;