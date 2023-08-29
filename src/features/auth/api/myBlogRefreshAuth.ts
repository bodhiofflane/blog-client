import {isAxiosError} from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogRefreshAuth = async () => {
  try {
    const {data} = await myBlogAxios.get('/auth/refresh');
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.headers['corrupted-token'] === 'yes') {
        localStorage.removeItem('token');
      }
      throw error.response?.data;
    }
  }
};

export default myBlogRefreshAuth;
