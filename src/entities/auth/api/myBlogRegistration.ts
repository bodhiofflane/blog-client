import {isAxiosError} from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogRegistration = async (multipartFormData: FormData) => {
  try {
    const {data} = await myBlogAxios.post(
      '/auth/registration',
      multipartFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
};

export default myBlogRegistration;
