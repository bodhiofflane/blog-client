import { isAxiosError } from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogGetPost = async() => {
  try {
    const {data} = await myBlogAxios.get(`/post`, {
      params: {
        
      }
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }
  }
}

export default myBlogGetPost