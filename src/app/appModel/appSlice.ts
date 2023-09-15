/* import { createSlice } from '@reduxjs/toolkit';

import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi';

const initialState = {
  theme: localStorage.getItem('theme'),
  headerLinks: [
    { to: '/', name: 'Главная' },
    { to: '/my-posts', name: 'Мои посты' },
    { to: '/create-post', name: 'Создать пост' },
  ],
  headerDropdownLinks: [
    {
      title: 'JavaScript',
      to: '/search/?theme=javascript',
      icon: BiLogoJavascript,
    },
    { title: 'React', to: '/search/?theme=react', icon: BiLogoReact },
    { title: 'Node.js', to: '/search/?theme=node', icon: BiLogoNodejs },
  ]
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
 */