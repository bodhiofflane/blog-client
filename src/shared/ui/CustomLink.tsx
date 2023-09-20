import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import { ReactNode } from 'react';

type CustomLinkProps = {
  style?: 'prim' | 'second' | 'red';
  children: ReactNode;
} & LinkProps;

const CustomLink = ({
  style = 'prim',
  children,
  ...props
}: CustomLinkProps) => {
  return (
    <Link
      className={cn(
        'inline-flex justify-center items-center outline-none rounded py-1 px-3 transition-colors',
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
    </Link>
  );
};

export default CustomLink;
