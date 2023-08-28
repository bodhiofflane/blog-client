import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";
import Textarea from "../../../shared/ui/Textarea";
import ImgInput from "../../../shared/ui/ImgInput";
import { useAppDispatch } from "../../../shared/hooks/appHooks";
import { createPostThunk } from "../model/postThunk";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, "Не короче 2 символов")
    .max(50, "Не длинее 50")
    .required("Обязательное поле"),
  postText: Yup.string()
    .min(5, "Не короче 5 символов")
    .required("Обязательное поле"),
});

const CreatePostForm = () => {
  const [postImg, setPostImg] = useState<null | File>(null);

  const dispath = useAppDispatch();

  const createPostForm = useFormik({
    initialValues: {
      title: "",
      postText: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const multipartFormData = new FormData();
      multipartFormData.append("title", values.title);
      multipartFormData.append("postText", values.postText);
      if (postImg) {
        multipartFormData.append("postImg", postImg);
      }
      dispath(createPostThunk(multipartFormData));
    },
  });

  const riseImg = (postImg: File) => {
    setPostImg(postImg);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col justify-center w-11/12 md:w-5/6 p-5 rounded-lg bg-teal-100"
        onSubmit={createPostForm.handleSubmit}
      >
        <Input
          title="Название поста"
          id="title"
          type="text"
          placeholder="Название"
          {...createPostForm.getFieldProps("title")}
          error={
            createPostForm.errors.title && createPostForm.touched.title
              ? createPostForm.errors.title
              : null
          }
        />

        <ImgInput riseImg={riseImg}>Загрузить изображение</ImgInput>

        <Textarea
          title="Текст поста"
          id="postText"
          placeholder="Текст вашего поста"
          {...createPostForm.getFieldProps("postText")}
          error={
            createPostForm.errors.postText && createPostForm.touched.postText
              ? createPostForm.errors.postText
              : null
          }
        />

        <div className="flex justify-around py-2">
          <Button type="submit">Отправить</Button>
          <Button
            type="reset"
            onClick={() => {
              createPostForm.resetForm();
            }}
            style="second"
          >
            Сброс
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
