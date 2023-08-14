import {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {MdLogin} from 'react-icons/md';

import { registrationThunk } from '../model/authThunk';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';

import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import CustomLink from '../../../shared/ui/CustomLink';
import ImgInput from '../../../shared/ui/ImgInput';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Не короче 3 символов')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(5, 'Не короче 5 символов')
    .required('Обязательное поле'),
});

const RegistrationForm = () => {
  const [avatar, setAvatar] = useState<null | File>(null);
  const responseMessage = useAppSelector(state => state.auth.message);

  const dispatch = useAppDispatch();

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

  const riseAvatar = (file: File) => {
    setAvatar(file);
  };

  const regForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: sumbitRegFormHandler,
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold text-gray-500 mb-5">
        Регистрация пользователя
      </h1>

      <p className='text-red-400'>{responseMessage}</p>

      <form
        className="flex flex-col justify-center w-[290px] xl:w-[500px] p-5 rounded-lg bg-teal-100"
        onSubmit={regForm.handleSubmit}
      >
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
        <ImgInput riseAvatar={riseAvatar}>Загрузить изображение</ImgInput>

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
      </form>

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
