import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../shared/hooks/appHooks';

import { getCommentListByParentPostIdThunk } from '../../entities/comments/model/commentsThunks';

import CommentList from '../../entities/comments/components/CommentList';
import SendCommentForm from '../../features/comments/components/SendCommentForm';
import CustomLink from '../../shared/ui/CustomLink';
import Htag from '../../shared/ui/HTag';
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
  const commentsinteractionStatus = useAppSelector(
    (state) => state.comments.interactionStatus
  );

  useEffect(() => {
    dispatch(getCommentListByParentPostIdThunk(postId));
  }, [dispatch, postId]);

  // разные статусы

  return (
    <article className="p-3 bg-bg-light-second dark:bg-bg-dark-second shadow-main dark:shadow-none rounded-md">
      <Htag className="mb-3" size="h3">
        Комментарии к посту
      </Htag>
      <CommentList
        commentList={comments}
        commentsStatus={commentsStatus}
        authorizedUserId={authorizedUserId}
      />

      {/* Conditional render */}
      {userIsAuthorized ? (
        <SendCommentForm
          postId={postId}
          interactionStatus={commentsinteractionStatus}
        />
      ) : (
        <div className='flex justify-center mt-4 mb-1'>
          <CustomLink to="/login" state={{ from: location.pathname }}>
            Авторизация
          </CustomLink>
        </div>
      )}
    </article>
  );
};

export default CommentsWidget;
