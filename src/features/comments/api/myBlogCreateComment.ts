import { isAxiosError } from 'axios';
import myBlogAxios from "../../../shared/api/instances/myBlogAxios";

const myBlogCreateComment = async (commentData: string) => {
  try {
    const { data } = await myBlogAxios.post(`/comments`, commentData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }
  }
};

export default myBlogCreateComment;
