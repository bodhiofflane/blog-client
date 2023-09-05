import { isAxiosError } from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogGetPostById = async (id: string) => {
  try {
    const {data} = await myBlogAxios.get(`/posts/${id}`, {headers: {Accept: 'application/json'}});
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
}

export default myBlogGetPostById;