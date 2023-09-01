import { useLocation, useParams } from "react-router-dom";
import PostCard from "../../entities/post/components/PostCard";

import { useEffect, useRef } from "react";

import CommentList from "../../entities/comments/components/CommentList";
import SendCommentForm from "../../features/comments/components/SendCommentForm";
import { useAppSelector } from "../../shared/hooks/appHooks";
import CustomLink from "../../shared/ui/CustomLink";

const PostWidget = () => {
  const { id } = useParams();

  const auth = useAppSelector((state) => state.auth.auth);

  const location = useLocation();

  const commentsBlock = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (commentsBlock.current) {
        console.log(commentsBlock.current);
        commentsBlock.current.scroll({ top: 123123123, behavior: "smooth" });
      }
    }, 300);
  }, []);

  return (
    <article className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 items-start w-4/5 mx-auto">
      <PostCard postId={id as string} />

      <article className="p-3 bg-teal-100 rounded-md">
        <CommentList postId={id as string} />

        {auth ? (
          <SendCommentForm postId={id as string} />
        ) : (
          <CustomLink to="/login" state={{from: location.pathname}}>
            Авторизуйтесь что бы оставить комментарий
          </CustomLink>
        )}
      </article>
    </article>
  );
};

export default PostWidget;
