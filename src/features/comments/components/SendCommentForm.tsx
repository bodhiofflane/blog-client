import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../shared/ui/Button";
import Textarea from "../../../shared/ui/Textarea";
import { useAppDispatch } from "../../../shared/hooks/appHooks";
import { createCommentThunk } from "../model/createCommentThunk";

type SendCommentForm = {
  postId: string;
};

const validationSchema = Yup.object({
  commentText: Yup.string()
    .min(2, "Слишком кототкий комментарий")
    .max(300, "Слишком длинный комментарий")
    .required("Текст комментария обязателен"),
});

const SendCommentForm = ({ postId }: SendCommentForm) => {
  const dispatch = useAppDispatch();

  const submitForm = (values: { commentText: string }) => {
    const commentData = new URLSearchParams({
      parentPostId: postId,
      commentText: values.commentText,
    });
    dispatch(createCommentThunk(commentData.toString()));
    sendCommentForm.resetForm();
  };

  const sendCommentForm = useFormik({
    initialValues: {
      commentText: "",
    },
    validationSchema,
    onSubmit: submitForm,
  });

  return (
    <form
      onSubmit={sendCommentForm.handleSubmit}
      className="flex flex-col"
    >
      <Textarea
        title="Оставить комментарий"
        id="commentText"
        placeholder="Ваш комментарий"
        {...sendCommentForm.getFieldProps("commentText")}
        error={
          sendCommentForm.errors.commentText &&
          sendCommentForm.touched.commentText
            ? sendCommentForm.errors.commentText
            : null
        }
        rows={2}
        cols={10}
      />
      <div className="flex justify-around">
        <Button type="submit">Отправить</Button>
        <Button
          onClick={sendCommentForm.handleReset}
          style="second"
          type="reset"
        >
          Сброс
        </Button>
      </div>
    </form>
  );
};

export default SendCommentForm;
