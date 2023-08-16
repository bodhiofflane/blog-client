import {isAxiosError} from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogCreatePost = async (multipartFormData: FormData) => {
  try {
    const {data} = await myBlogAxios.post('/post', multipartFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
};

export default myBlogCreatePost;
