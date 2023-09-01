import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../shared/hooks/appHooks';
import { refreshAuthThunk } from '../../features/auth/model/authThunk';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

import MainPage from '../../pages/MainPage';
import RegistrationPage from '../../pages/RegistrationPage';
import LoginPage from '../../pages/LoginPage';
import RequireAuth from '../../shared/hocs/RequireAuth';
import CreatePostPage from '../../pages/CreatePostPage';
import PostPage from '../../pages/PostPage';
//import RedirectIfAuth from '../../shared/hocs/RedirectIfAuth';

const RouterProvider = () => {
  // Перенесни с отдельнйы провайдер
  const isUserAuth = useAppSelector((state) => state.auth.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(refreshAuthThunk());
    }
  }, [isUserAuth, dispatch]);


  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='create-post' element={<RequireAuth isUserAuth={isUserAuth}><CreatePostPage/></RequireAuth>}/>
        <Route path='post/:id' element={<PostPage/>}/>
        <Route path='registration' element={<RegistrationPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='*' element={<p>Page Not Found</p>}/>
        
        {/* RedirectIfAuth мне вроде бы ненужен. Получилось перенаправлять пользователя из компонента, если он авторизирован */}
        {/* <Route path='registration' element={<RedirectIfAuth isUserAuth={isUserAuth}><RegistrationPage/></RedirectIfAuth>}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default RouterProvider;