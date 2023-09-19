import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

import cn from 'classnames';

type ButtonProps = {
  style?: 'prim' | 'second' | 'red' | 'loading';
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({style = 'prim', children, className, ...props}: ButtonProps) => {
  return (
    <button
      className={cn(
        `inline-flex justify-center items-center outline-none rounded py-1 px-3 transition-colors ${className}`,
        {
          'bg-primary text-txt-high-contrast-dark hover:bg-primary-hover':
            style === 'prim',
          'bg-primary-hover text-txt-high-contrast-dark hover:bg-primary':
            style === 'second',
          'bg-red-400 text-gray-100 hover:bg-red-600': style === 'red',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
