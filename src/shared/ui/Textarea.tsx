import {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';

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
      <h3 className="text-gray-600 mb-1">{title}</h3>
      <textarea
        spellCheck='true'
        rows={15}
        id={id}
        className="block p-2 rounded-md text-txt-low-contrast-light dark:text-txt-mid-contrast-dark bg-bg-light dark:bg-bg-dark outline-none placeholder:text-txt-low-contrast-light transition-colors focus:ring ring-primary"
        {...props}
      />
      {error ? (
        <p className="absolute -bottom-7 left-3 text-red-600">{error}</p>
      ) : null}
    </label>
  );
};

export default Textarea;
