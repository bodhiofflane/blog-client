import { Link } from 'react-router-dom';
import transformDate from '../../../shared/utils/transformData.utils';

type CommentProps = {
  authorName: string;
  authorId: string;
  createdAt: string;
  commentText: string;
};

const Comment = ({authorName, authorId, commentText, createdAt}: CommentProps) => {
  return (
    <li className="mb-3">
      <div className="flex justify-between">
        <Link to={`/users/${authorId}`}>
          <h3 className="font-bold text-gray-500">{authorName}</h3>
        </Link>
        
        <span>{transformDate(createdAt)}</span>
      </div>
      <p>
        {commentText}
      </p>
    </li>
  );
}

export default Comment;