/* type CommentProps = {
  authorName: string;
  createAt: string;
  commentText: string;
}; */

const Comment = () => {
  return (
    <li className="mb-3">
      <div className="flex justify-between">
        <h3 className="font-bold text-gray-500">Name</h3>
        <span>20.12.20</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut
        dolor ex voluptates voluptatum sint quaerat quae delectus alias, illo
        natus quidem deserunt consectetur perferendis sapiente, pariatur culpa
        eos unde!
      </p>
    </li>
  );
}

export default Comment;