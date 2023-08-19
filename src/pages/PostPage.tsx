
import { useParams } from 'react-router-dom';
import PostCard from '../entities/post/components/PostCard';

const PostPage = () => {
  const {id} = useParams();

  return (
    <PostCard postId={id as string}/>
  );
}
 
export default PostPage;