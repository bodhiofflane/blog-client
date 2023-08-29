import { isAxiosError } from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';

const myBlogDeleteComment = async (commentId: string) => {
  try {
    const {data} = await myBlogAxios.delete(`/comments/${commentId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
}

export default myBlogDeleteComment;