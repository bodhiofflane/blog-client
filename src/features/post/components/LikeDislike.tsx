import { BiLike, BiDislike } from 'react-icons/bi';

const LikeDislike = () => {
  return (
    <>
      <span className="text-teal-700 text-2xl">
        <BiLike />
      </span>
      <span className="text-red-400 text-2xl">
        <BiDislike />
      </span>
    </>
  );
};

export default LikeDislike;
