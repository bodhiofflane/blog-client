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
      className="relative flex flex-col justify-center mb-6"
      htmlFor={id}
    >
      <h3 className="text-gray-600 mb-1">{title}</h3>
      <textarea
        spellCheck='true'
        rows={15}
        id={id}
        className="block rounded-md p-2 text-slate-600 bg-white outline-none placeholder:text-gray-300 transition-colors focus:bg-teal-200 focus:placeholder:text-gray-500"
        {...props}
      />
      {error ? (
        <p className="absolute -bottom-7 left-3 text-red-600">{error}</p>
      ) : null}
    </label>
  );
};

export default Textarea;
