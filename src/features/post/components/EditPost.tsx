import { useAppDispatch } from '../../../shared/hooks/appHooks';
import Button from '../../../shared/ui/Button';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deletePostByIdThunk } from '../model/postThunk';

type EditPostProps = {
  postId: string;
}

const EditPost = ({postId}: EditPostProps) => {
  const dispatch = useAppDispatch();

  const deleteThisPost = () => {
    dispatch(deletePostByIdThunk(postId));
  };

  return (
    <>
    <span>
      <AiOutlineEdit />
    </span>
    <Button style="red" onClick={deleteThisPost}>
      <AiOutlineDelete />
    </Button>
  </>
  );
}

export default EditPost;