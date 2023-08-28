import { isAxiosError } from 'axios';
import myBlogAxios from '../../../shared/api/instances/myBlogAxios';
import { MY_BLOG_API } from '../../../shared/constants/myBlog';

const myBlogGetCommentListByParentPostId = async (parentPostId: string) => {
  try {
    const {data} = await myBlogAxios.get(
      `${MY_BLOG_API}/comments/${parentPostId}`,
      {headers: 
        {Accept: 'application/json'},
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
};

export default myBlogGetCommentListByParentPostId;