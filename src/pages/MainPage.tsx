import PopularPostList from '../entities/popularPosts/components/PopularPostList';
import PostList from '../entities/posts/components/PostList';

const MainPage = () => {
  return (
    <section className='grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-5 items-start w-full'>
      <PostList/>
      <PopularPostList/>
    </section>
  );
}
 
export default MainPage;