import { Link } from 'react-router-dom';
import Htag from '../../../shared/ui/HTag';
import { LiaUserSolid } from 'react-icons/lia';
import { BsEye, BsFileEarmarkPost } from 'react-icons/bs';

type PopularPostCartProps = {
  title: string;
  _id: string;
  author: string;
  views: number;
};

const PopularPostCard = ({
  title,
  _id,
  author,
  views,
}: PopularPostCartProps) => {

  const formattedTitle = title.length > 22 ? title.substring(0, 22) + '...' : title;

  return (
    <Link to={`/post/${_id}`}>
      <article className="mb-1 p-2 bg-bg-light-second dark:bg-bg-dark-second shadow-main dark:shadow-none rounded-md">
        <div className='flex items-center gap-1 mb-2'>
          <BsFileEarmarkPost className="text-xl" />
          <Htag size="h4">{formattedTitle}</Htag>
        </div>

        <div className="flex justify-between items-center gap-1 text-gray-500">
          
          <div className="flex items-center gap-1">
            <LiaUserSolid className="text-2xl" />
            <Htag className='' size="h5">{author}</Htag>
          </div>
          
          <span className="inline-flex items-center gap-1">
            <BsEye />
            {views}
          </span>

        </div>
      </article>
    </Link>
  );
};

export default PopularPostCard;
