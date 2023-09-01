import PopularPostList from '../../popularPosts/components/PopularPostList';
import PostList from './PostList';

const AllPosts = () => {
  return (
    <section className="flex gap-5 w-3/4 mx-auto">
      <section className="w-4/5">
        <h2
          className='text-gray-500 font-bold text-2xl'
        >Все посты</h2>
        <PostList />
      </section>
      <section className="w-1/5">
        <h2>Популярные посты</h2>
        <PopularPostList/>
      </section>
    </section>
  );
}
 
export default AllPosts;