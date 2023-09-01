import { Link, LinkProps} from 'react-router-dom';
import cn from 'classnames';



import {ReactNode} from 'react';

type CustomLinkProps = {
  style?: 'prim' | 'second';
  children: ReactNode;
} & LinkProps;

const CustomLink = ({style = 'prim', children, ...props}: CustomLinkProps) => {
  return (
    <Link
      className={cn('inline-flex', {
        'text-gray-500': style === 'prim',
        'text-gray-100': style === 'second',
      })}
      {...props}
    >
      {children}
    </Link>
  );
}
 
export default CustomLink;