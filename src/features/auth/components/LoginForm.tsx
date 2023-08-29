import {useFormik} from 'formik';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import CustomLink from '../../../shared/ui/CustomLink';
import {MdAppRegistration} from 'react-icons/md';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/appHooks';
import { loginThunk } from '../model/authThunk';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Не короче 3 символов')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(5, 'Не короче 5 символов')
    .required('Обязательное поле'),
});

const LoginForm = () => {
  const message = useAppSelector(state => state.auth.message);
  const dispatch = useAppDispatch();

  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Эмитация x-www-form-urlencoded.
      const userData = new URLSearchParams({
        username: values.username,
        password: values.password,
      });
      dispatch(loginThunk(userData.toString()));
    },
  });

  return (
    <div className="flex flex-col items-center">
      {message ? <p className="text-red-400">{message}</p> : null}
      <h1 className="text-xl font-bold text-gray-500 mb-5">Вход</h1>
      <form
        className="flex flex-col justify-center w-[290px] xl:w-[500px] p-5 rounded-lg bg-teal-100"
        onSubmit={loginForm.handleSubmit}
      >
        <Input
          title="Введите имя пользователя:"
          id="username"
          type="text"
          placeholder="Username"
          {...loginForm.getFieldProps('username')}
          error={
            loginForm.errors.username && loginForm.touched.username
              ? loginForm.errors.username
              : null
          }
        />
        <Input
          title="Введите пароль:"
          id="password"
          type="password"
          placeholder="Password"
          {...loginForm.getFieldProps('password')}
          error={
            loginForm.errors.password && loginForm.touched.password
              ? loginForm.errors.password
              : null
          }
        />
        <div className="flex justify-around py-2">
          <Button type="submit">Войти</Button>
          <Button
            type="reset"
            onClick={() => {
              loginForm.resetForm();
            }}
            style="second"
          >
            Сброс
          </Button>
        </div>
      </form>
      <div className="mt-2">
        <CustomLink to="/registration">
          <span className="inline-flex justify-center items-center gap-2">
            Нет аккаунта?
            <MdAppRegistration />
          </span>
        </CustomLink>
      </div>
    </div>
  );
};

export default LoginForm;
