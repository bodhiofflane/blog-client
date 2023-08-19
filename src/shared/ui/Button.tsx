import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

import cn from 'classnames';

type ButtonProps = {
  style?: 'prim' | 'second' | 'red';
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({style = 'prim', children, ...props}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex justify-center items-center outline-none rounded py-1 px-3 transition-colors',
        {
          'bg-teal-500 text-gray-100 hover:bg-teal-800':
            style === 'prim',
          'bg-blue-300 text-gray-500 hover:bg-blue-800 hover:text-white':
            style === 'second',
          'bg-red-700 text-gray-100 hover:bg-red-500': style === 'red'
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
