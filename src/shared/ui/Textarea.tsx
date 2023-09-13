import {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';

import HTag from './HTag';

type TextareaProps = {
  title: string;
  error: string | null;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const Textarea = ({title, id, error, ...props}: TextareaProps) => {
  return (
    <label
      className="relative flex flex-col justify-center mb-6 w-full"
      htmlFor={id}
    >
      <HTag size='h5' className='my-5'>
        {title}
      </HTag>
      <textarea
        className="block p-2 rounded-md text-txt-low-contrast-light dark:text-txt-mid-contrast-dark bg-bg-light dark:bg-bg-dark shadow-main dark:shadow-none outline-none placeholder:text-txt-low-contrast-light transition-colors focus:ring ring-primary dark:ring-primary-hover"
        spellCheck='true'
        rows={15}
        id={id}
        {...props}
      />
      {error ? (
        <p className="absolute -bottom-6 left-3 text-red-600">{error}</p>
      ) : null}
    </label>
  );
};

export default Textarea;
