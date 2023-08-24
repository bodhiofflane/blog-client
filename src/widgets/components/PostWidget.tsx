import {useParams} from 'react-router-dom';
import PostCard from '../../entities/post/components/PostCard';
import Button from '../../shared/ui/Button';
import {useEffect, useRef} from 'react';
import Textarea from '../../shared/ui/Textarea';
import CommentList from '../../entities/comments/components/CommentList';
import Comment from '../../entities/comments/components/Comment';

const PostWidget = () => {
  const {id} = useParams();

  const commentsBlock = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (commentsBlock.current) {
        console.log(commentsBlock.current);
        commentsBlock.current.scroll({top: 123123123, behavior: 'smooth'});
      }
    }, 300);
  }, []);

  return (
    <div className="">
      <article className="grid lg:grid-cols-[3fr_1fr] gap-5 items-start w-4/5 mx-auto">
        <PostCard postId={id as string} />
        <article className="p-3 bg-teal-100 rounded-md">
          <CommentList postId='123'>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </CommentList>
          <form className="flex flex-col justify-between items-center">
            <Textarea
              rows={2}
              cols={10}
              title="Оставить комментарий"
              id="add-comment"
              placeholder="Ваш комментарий"
              error={null}
            />
            <Button type="submit">Отправить</Button>
          </form>
        </article>
      </article>
    </div>
  );
};

export default PostWidget;
