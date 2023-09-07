import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";
import Textarea from "../../../shared/ui/Textarea";
import ImgInput from "../../../shared/ui/ImgInput";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/appHooks";
import { createPostThunk } from "../model/postThunk";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../shared/ui/Loading';
import { clearPostStatusAndMessage } from '../../../entities/post/model/postSlice';

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
  const status = useAppSelector((state) => state.post.status);
  const message = useAppSelector((state) => state.post.message);
  const createdPostId = useAppSelector((state) => state.post.post._id);

  const [postImg, setPostImg] = useState<null | File>(null);

  const dispath = useAppDispatch();

  const navigate = useNavigate();

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

  useEffect(() => {
    if (status === 'created') {
      toast.success(message);
      // Когда создаем пост и добавляем его в список, то нас редиректит на сингл пост и статус мененяется на саксес.
      // В любом случае верну функцию которая будет отчщать статус и меседж.
      navigate(`/post/${createdPostId}`, {preventScrollReset: true, replace: true});
    }
    return () => {
      dispath(clearPostStatusAndMessage());
    }
  }, [status, message, createdPostId, navigate, dispath]);

  console.log(status);

  if (status === 'loading') {
    return <Loading/>
  }

  if (status === 'error') {
    return <p>Ошибка</p>
  }

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
