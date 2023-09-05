import { isAxiosError } from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const getPopularPosts = async () => {
  try {
    const {data} = await myBlogAxios.get('/posts/popular', {
      headers: {
        Accept: 'application/json'
      }
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
}

export default getPopularPosts;