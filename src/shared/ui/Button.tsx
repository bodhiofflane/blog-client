import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

import cn from 'classnames';

type ButtonProps = {
  style?: 'prim' | 'second';
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({style = 'prim', children, ...props}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex justify-center items-center outline-none rounded py-1 px-3',
        {
          'bg-teal-500 text-gray-100 transition-colors hover:bg-teal-800':
            style === 'prim',
          'bg-blue-300 text-gray-600 transition-colors hover:bg-blue-800 hover:text-white':
            style === 'second',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
