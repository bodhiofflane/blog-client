import {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import Htag from './HTag';

type InputProps = {
  title: string;
  error: string | null;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({title, id, error, ...props}: InputProps) => {
  return (
    <label
      className="relative flex flex-col justify-center mb-6"
      htmlFor={id}
    >
      <Htag className='mb-2' size='h5'>
        {title}
      </Htag>
      <input
        id={id}
        className="block p-2 bg-bg-light dark:bg-bg-dark text-txt-high-contrast-light dark:text-txt-high-contrast-dark placeholder:text-txt-low-contrast shadow-main dark:shadow-none transition-all focus:ring rounded-md outline-none"
        {...props}
      />
      {error ? (
        <p className="absolute -bottom-7 left-3 text-red-600">{error}</p>
      ) : null}
    </label>
  );
}
 
export default Input;