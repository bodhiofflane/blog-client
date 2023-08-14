import {isAxiosError} from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogCreatePost = async () => {
  try {
    const {data} = await myBlogAxios.post('');
    return data;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
};

export default myBlogCreatePost;
