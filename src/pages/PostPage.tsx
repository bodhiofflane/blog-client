import { useParams } from 'react-router-dom';
import CommentsWidget from '../widgets/components/CommentsWidget';
import PostWidget from '../widgets/components/PostWidget';

const PostPage = () => {
  const {id} = useParams();

  return (
    <section className='grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 items-start w-4/5 mx-auto'>
      <PostWidget postId={id as string}/>
      <CommentsWidget postId={id as string}/>
    </section>
    
  );
}
 
export default PostPage;