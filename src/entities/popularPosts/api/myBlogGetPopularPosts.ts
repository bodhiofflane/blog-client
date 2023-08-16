import { isAxiosError } from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const getPopularPosts = async () => {
  try {
    const {data} = await myBlogAxios.get('/post/popular', {
      headers: {
        Accept: 'application/json'
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
}

export default getPopularPosts;