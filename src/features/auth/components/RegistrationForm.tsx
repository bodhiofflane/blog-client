import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdLogin } from 'react-icons/md';
import { toast } from 'react-toastify';

import { registrationThunk } from '../model/authThunk';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';

import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import CustomLink from '../../../shared/ui/CustomLink';
import ImgInput from '../../../shared/ui/ImgInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearAuthStatusAndMessage } from '../model/authSlice';
import Htag from '../../../shared/ui/HTag';
import Form from '../../../shared/components/Form';

const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .min(3, 'Не короче 3 символов')
    .required('Обязательное поле'),
  password: Yup.string()
    .trim()
    .min(5, 'Не короче 5 символов')
    .required('Обязательное поле'),
});

const RegistrationForm = () => {
  const [avatar, setAvatar] = useState<null | File>(null);

  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.auth.message); // Передавать в тостифай
  const status = useAppSelector((state) => state.auth.status); // Дизейблить кнопку если лодинг и и редиректить есть аксес

  const location = useLocation();
  const navigate = useNavigate();

  const redirecPathAfterAuth =
    location.state && location.state.from
      ? (location.state.from as string)
      : '/';

  // Обработчики
  const sumbitRegFormHandler = (values: {
    username: string;
    password: string;
  }) => {
    const multipartFormData = new FormData();
    multipartFormData.append('username', values.username);
    multipartFormData.append('password', values.password);
    if (avatar) {
      multipartFormData.append('avatar', avatar);
    }
    dispatch(registrationThunk(multipartFormData));
  };

  // Спуская в комонент получения img
  const riseImg = (file: File) => {
    setAvatar(file);
  };

  // Formik
  const regForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: sumbitRegFormHandler,
  });

  // Короче, здесь такая штука - редирект отсюда не срабоатывает, потому-что срабатывает раньше на RedirectIfAuth. Где убрать? Там точно нельзя.
  useEffect(() => {
    if (status === 'success') {
      toast.success(message);
      navigate(redirecPathAfterAuth, { replace: true }); // Редиректаю в компоненте RedirectIfAuth
    }
    if (status === 'error') {
      toast.error(message);
    }
    return () => {
      dispatch(clearAuthStatusAndMessage());
    };
  }, [message, status, navigate, dispatch, redirecPathAfterAuth]);

  return (
    <div className="flex flex-col items-center">
      <Form onSubmit={regForm.handleSubmit}>
        <Htag className="mb-2" size="h2" textCenter>
          Регистрация пользователя
        </Htag>
        <Input
          title="Введите имя пользователя:"
          id="username"
          type="text"
          placeholder="Username"
          {...regForm.getFieldProps('username')}
          error={
            regForm.errors.username && regForm.touched.username
              ? regForm.errors.username
              : null
          }
        />

        <Input
          title="Введите пароль:"
          id="password"
          type="password"
          placeholder="Password"
          {...regForm.getFieldProps('password')}
          error={
            regForm.errors.password && regForm.touched.password
              ? regForm.errors.password
              : null
          }
        />

        {/* Кстомный интуп который может получать файлы */}
        <ImgInput riseImg={riseImg}>Загрузить изображение</ImgInput>

        <div className="flex justify-around py-2">
          <Button type="submit">Регистрация</Button>
          <Button
            type="reset"
            onClick={() => {
              regForm.resetForm();
            }}
            style="second"
          >
            Сброс
          </Button>
        </div>
      </Form>

      <div className="mt-2">
        <CustomLink to="/login">
          <span className="inline-flex justify-center items-center gap-2">
            Уже есть аккаунт?
            <MdLogin />
          </span>
        </CustomLink>
      </div>
    </div>
  );
};

export default RegistrationForm;
