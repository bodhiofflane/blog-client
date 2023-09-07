import { Link } from "react-router-dom";

type PopularPostCartProps = {
  title: string;
  _id: string;
  views: number;
};

const PopularPostCard = ({ title, _id, views }: PopularPostCartProps) => {
  return (
    <Link to={`/post/${_id}`}>
      <article className="bg-teal-100 mb-1 p-2 rounded-md">
        <h3 className="text-gray-500 line-clamp-1">{title}</h3>
        <span>{views}</span>
      </article>
    </Link>
  );
};

export default PopularPostCard;
