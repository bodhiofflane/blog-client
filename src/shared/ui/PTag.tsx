import classNames from 'classnames';
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

type PtagProps = {
  contrast:'low' | 'mid' | 'high';
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

const PTag = ({contrast, children, className}: PtagProps) => {
  return (
    <p className={classNames('m-0 p-0', className, {
      'text-txt-high-contrast-light dark:text-txt-high-contrast-dark': contrast === 'high',
      'text-txt-mid-contrast-light dark:text-txt-mid-contrast-dark': contrast === 'mid',
      'text-txt-low-contrast': contrast === 'low',
    })}>
      {children}
    </p>
  );
}
 
export default PTag;