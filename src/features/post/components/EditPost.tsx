import { useAppDispatch } from '../../../shared/hooks/appHooks';
import Button from '../../../shared/ui/Button';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deletePostByIdThunk } from '../model/postThunk';
import CustomLink from '../../../shared/ui/CustomLink';

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
    <CustomLink to={`/post/qweqwe/edit`}>
      <AiOutlineEdit />
    </CustomLink>

    <Button style="red" onClick={deleteThisPost}>
      <AiOutlineDelete />
    </Button>
  </>
  );
}

export default EditPost;