import { useParams } from 'react-router-dom';

const PostPage = () => {

  const {id} = useParams();

  return (
    <p>{id}</p>
  );
}
 
export default PostPage;