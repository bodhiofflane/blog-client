import myBlogAxios from '../../../shared/api/instances/myBlogAxios';
import {isAxiosError} from 'axios';
const myBlogLogin = async (userData: string) => {
  try {
    const {data} = await myBlogAxios.post('/auth/login', userData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    localStorage.setItem('token', data.token);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
};

export default myBlogLogin;
