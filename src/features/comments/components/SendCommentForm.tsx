import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../shared/ui/Button";
import Textarea from "../../../shared/ui/Textarea";
import { useAppDispatch } from '../../../shared/hooks/appHooks';
import { createCommentThunk } from '../model/createCommentThunk';

type SendCommentForm = {
  postId: string
}

const validationSchema = Yup.object({
  commentText: Yup.string()
  .min(2, 'Слишком кототкий комментарий')
  .max(300, "Слишком длинный комментарий")
  .required("Текст комментария обязателен")
});

const SendCommentForm = ({postId}: SendCommentForm) => {

  const dispatch = useAppDispatch()

  const submitForm = (values: {commentText: string}) => {
    const commentData = new URLSearchParams({
      parentPostId: postId,
      commentText: values.commentText
    });
    dispatch(createCommentThunk(commentData.toString()))
    sendCommentForm.resetForm();
  }

  const sendCommentForm = useFormik({
    initialValues: {
      commentText: "",
    },
    validationSchema,
    onSubmit: submitForm,
  });

  return (
    <form
      onClick={sendCommentForm.handleSubmit}
      className="flex flex-col justify-between items-center"
    >
      <Textarea
        rows={2}
        cols={10}
        {...sendCommentForm.getFieldProps("commentText")}
        title="Оставить комментарий"
        id="add-comment"
        placeholder="Ваш комментарий"
        error={
          sendCommentForm.errors.commentText &&
          sendCommentForm.touched.commentText
            ? sendCommentForm.errors.commentText
            : null
        }
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default SendCommentForm;
