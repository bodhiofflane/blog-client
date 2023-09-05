import {
  useState,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  ChangeEvent,
} from 'react';

type FileInputPorps = {
  children: ReactNode;
  riseImg: (file: File) => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const ImgInput = ({children, riseImg}: FileInputPorps) => {
  const [imgURL, setimgURL] = useState('');
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const maxAvatarSize = 10000000;

  const fileChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);

    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/webp') {
        return setErrorMessage(
          'Можно загрузить только изобажение и только с расширением jpeg, либо webp'
        );
      }
      if (file.size > maxAvatarSize) {
        return setErrorMessage('Слишком большое изображение');
      }
      riseImg(file);
      setimgURL(URL.createObjectURL(file));
      setErrorMessage('');
    }
  };

  return (
    <>
      <label
        className="my-2 p-2 border-2 border-dashed border-teal-500 text-center cursor-pointer"
        htmlFor="file"
      >
        {children}
        <input
          className="hidden"
          id="file"
          type="file"
          onChange={fileChangeHandle}
        />
      </label>
      {imgURL ? (
        <img
          className="block"
          src={imgURL}
          alt="avatar"
        />
      ) : null}
      {errorMessage ? <p className="text-red-500">{errorMessage}</p> : null}
    </>
  );
};

export default ImgInput;
