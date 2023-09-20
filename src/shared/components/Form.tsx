import {DetailedHTMLProps, FormHTMLAttributes, ReactNode} from 'react';

type FoprProps = {
  children: ReactNode;
} & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

const Form = ({children, ...props}: FoprProps) => {
  return (
    <form
        className="flex flex-col justify-center w-[320px] md:w-[550px] p-3 bg-bg-light-second dark:bg-bg-dark-second shadow-main dark:shadow-none rounded-md"
        {...props}
      >
        {children}
      </form>
  );
}
 
export default Form;