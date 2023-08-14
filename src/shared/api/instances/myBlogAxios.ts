import axios from 'axios';
import {MY_BLOG_API} from '../../constants/myBlog';

const myBlogAxios = axios.create({
  baseURL: MY_BLOG_API,
  validateStatus(status) {
    return status >= 200 && status < 400;
  },
});

myBlogAxios.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  }
  return config;
});

export default myBlogAxios;
