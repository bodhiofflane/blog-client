import { Link } from 'react-router-dom';
import cn from 'classnames';



import {ReactNode} from 'react';

type CustomLinkProps = {
  style?: 'prim' | 'second';
  to: string;
  children: ReactNode;
}

const CustomLink = ({style = 'prim', to, children}: CustomLinkProps) => {
  return (
    <Link
      className={cn('inline-flex', {
        'text-gray-500': style === 'prim',
        'text-gray-100': style === 'second',
      })}
      to={to}
    >
      {children}
    </Link>
  );
}
 
export default CustomLink;