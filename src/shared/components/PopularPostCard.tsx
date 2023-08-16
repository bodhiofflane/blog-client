type PopularPostCartProps = {
  title: string;
  _id: string;
  views: number;
}

const PopularPostCard = ({title, _id, views}: PopularPostCartProps) => {
  return (
    <article className="bg-teal-100 mb-1 p-2 rounded-md">
      <h3 className="text-gray-500">{title}</h3>
      <a style={{display: 'none'}} href={_id}></a>
      <span>{views}</span>
    </article>
  );
};
 
export default PopularPostCard;