import {ReactNode} from 'react';

import cn from 'classnames';
import { Link } from 'react-router-dom';

type CustomLinkButtonProps = {
  to: string;
  style?: 'prim' | 'second';
  children: ReactNode;
}

const CustomLinkButton = ({to, style = 'prim', children, ...props}: CustomLinkButtonProps) => {
  return (
    <Link
      to={to}
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
    </Link>
  );
};

export default CustomLinkButton;
