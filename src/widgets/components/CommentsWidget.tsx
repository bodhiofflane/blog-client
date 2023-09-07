import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../shared/hooks/appHooks';

import { getCommentListByParentPostIdThunk } from '../../entities/comments/model/commentsThunks';

import CommentList from '../../entities/comments/components/CommentList';
import SendCommentForm from '../../features/comments/components/SendCommentForm';
import CustomLink from '../../shared/ui/CustomLink';
//mport Loading from '../../shared/ui/Loading';
//import Error from '../../shared/ui/Error';

type CommentsWidgetProps = {
  postId: string;
};

const CommentsWidget = ({ postId }: CommentsWidgetProps) => {
  const dispatch = useAppDispatch();
  const userIsAuthorized = useAppSelector((state) => state.auth.auth);
  const authorizedUserId = useAppSelector((state) => state.auth._id);
  const comments = useAppSelector((state) => state.comments.comments);
  const commentsStatus = useAppSelector((state) => state.comments.status);
  //const commentsMessage = useAppSelector((state) => state.comments.message);

  console.log(postId)

  useEffect(() => {
    dispatch(getCommentListByParentPostIdThunk(postId));
  }, [dispatch, postId]);

  return (
    <article className="p-3 bg-teal-100 rounded-md">

      <CommentList
        commentList={comments}
        commentsStatus={commentsStatus}
        authorizedUserId={authorizedUserId}
      />

      {/* Conditional render */}
      {userIsAuthorized ? (
        <SendCommentForm postId={postId} />
      ) : (
        <CustomLink to="/login" state={{ from: location.pathname }}>
          Авторизуйтесь что бы оставить комментарий
        </CustomLink>
      )}
    </article>
  );
};

export default CommentsWidget;