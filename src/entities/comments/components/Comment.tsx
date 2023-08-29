import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import transformDate from "../../../shared/utils/transformData.utils";
import Button from "../../../shared/ui/Button";
import { useAppDispatch } from '../../../shared/hooks/appHooks';
import deleteCommentThunk from '../../../features/comments/model/deleteCommentThunk';

type CommentProps = {
  id: string;
  isMyComment: boolean;
  authorName: string;
  authorId: string;
  createdAt: string;
  commentText: string;
};

const Comment = ({
  id,
  isMyComment,
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
    <li className="mb-3">
      <div className="flex justify-between">
        <Link to={`/users/${authorId}`}>
          <h3 className="font-bold text-gray-500">{authorName}</h3>
        </Link>

        <span>{transformDate(createdAt)}</span>
      </div>
      <p>{commentText}</p>
      {isMyComment ? (
        <Button
          onClick={deleteThisComment}
          style='second'
        >
          <AiOutlineDelete />
        </Button>
      ) : null}
    </li>
  );
};

export default Comment;
