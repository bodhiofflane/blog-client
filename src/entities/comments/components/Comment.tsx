import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../../shared/ui/Button";
import { useAppDispatch } from '../../../shared/hooks/appHooks';
import deleteCommentThunk from '../../../features/comments/model/deleteCommentThunk';
import Htag from '../../../shared/ui/HTag';
import PTag from '../../../shared/ui/PTag';
import Date from '../../../shared/ui/Date';

type CommentProps = {
  id: string;
  isCommentOwnedUser: boolean;
  authorName: string;
  authorId: string;
  createdAt: string;
  commentText: string;
};

const Comment = ({
  id,
  isCommentOwnedUser,
  authorName,
  authorId,
  commentText,
  createdAt,
}: CommentProps) => {
  const dispatch = useAppDispatch();

  const deleteThisComment = () => {
    dispatch(deleteCommentThunk(id));
  };

  return (
    <li className="p-1 bg-bg-light dark:bg-bg-dark rounded-md shadow-main border border-border-color-light dark:border-none dark:shadow-none">
      <div className="flex justify-between">
        <Link to={`/users/${authorId}`}>
          <Htag size='h5'>
            {authorName}
          </Htag>
        </Link>

        <Date date={createdAt}/>
      </div>
      <PTag contrast='mid' className='my-2'>
        {commentText}
      </PTag>
      {isCommentOwnedUser ? (
        <div className='flex justify-between pt-1 border-t border-border-color-light dark:border-border-color-dark'>
          <PTag contrast='mid'>
            Это ваш комментарий
          </PTag>
          <Button
            onClick={deleteThisComment}
            style='red'
          >
            <AiOutlineDelete />
          </Button>
        </div>
      ) : null}
    </li>
  );
};

export default Comment;
