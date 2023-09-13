import { useFormik } from 'formik';
import * as Yup from 'yup';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';


import Button from '../../../shared/ui/Button';
import Textarea from '../../../shared/ui/Textarea';
import { useAppDispatch } from '../../../shared/hooks/appHooks';
import { createCommentThunk } from '../model/createCommentThunk';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { clearInteractionStatus } from '../../../entities/comments/model/commentsSlice';


type SendCommentForm = {
  postId: string;
  interactionStatus: 'waiting' | 'loading' | 'error' | 'created' | 'deleted';
};

const validationSchema = Yup.object({
  commentText: Yup.string()
    .min(2, 'Слишком кототкий комментарий')
    .max(300, 'Слишком длинный комментарий')
    .required('Текст комментария обязателен'),
});

const SendCommentForm = ({ postId, interactionStatus }: SendCommentForm) => {
  const dispatch = useAppDispatch();

  const submitForm = (values: { commentText: string }) => {
    const commentData = new URLSearchParams({
      parentPostId: postId,
      commentText: values.commentText,
    });
    dispatch(createCommentThunk(commentData.toString()));
    sendCommentForm.resetForm();
  };

  const sendCommentForm = useFormik({
    initialValues: {
      commentText: '',
    },
    validationSchema,
    onSubmit: submitForm,
  });

  useEffect(() => {
    if (interactionStatus === 'created') {
      toast.success('Комментарий успешно создан');
    }
    if (interactionStatus === 'deleted') {
      toast.success('Комментарий удален');
    }
    if (interactionStatus === 'error') {
      toast.error('Ошибка сознания комментария');
    }
    return () => {
      dispatch(clearInteractionStatus());
    }
  }, [dispatch, interactionStatus]);

  return (
    <form onSubmit={sendCommentForm.handleSubmit} className="flex flex-col">
      <Textarea
        title="Оставить комментарий"
        id="commentText"
        placeholder="Ваш комментарий"
        {...sendCommentForm.getFieldProps('commentText')}
        error={
          sendCommentForm.errors.commentText &&
          sendCommentForm.touched.commentText
            ? sendCommentForm.errors.commentText
            : null
        }
        rows={2}
        cols={10}
      />
      <div className="flex justify-around">
        {interactionStatus === 'loading' ? (
          <Button type="submit">
            <span className='px-8 animate-spin'><AiOutlineLoading3Quarters/></span>
          </Button>
        ) : (
          <Button type="submit">Отправить</Button>
        )}

        <Button
          onClick={sendCommentForm.handleReset}
          style="red"
          type="reset"
        >
          Сброс
        </Button>
      </div>
    </form>
  );
};

export default SendCommentForm;
