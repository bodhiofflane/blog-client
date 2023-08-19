import { isAxiosError } from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogDeletePostById = async (id: string) => {
  try {
    const {data} = await myBlogAxios.delete(`/post/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }
  }
}

export default myBlogDeletePostById;