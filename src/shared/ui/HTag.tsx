import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

type HtagProps = {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  textCenter?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Htag = ({ size, textCenter, children, className, ...props }: HtagProps) => {
  const bigHeader = `${textCenter ? 'text-center' : ''} m-0 p-0 text-txt-high-contrast-light dark:text-txt-high-contrast-dark ${className}`;
  const smallHeader = `${textCenter ? 'text-center' : ''} m-0 p-0 text-txt-mid-contrast-light dark:text-txt-mid-contrast-dark ${className}`;

  if (size === 'h1') {
    return (
      <h1
        className={`${bigHeader} text-3xl font-extrabold`}
        {...props}
      >{children}</h1>
      );
  }
  if (size === 'h2') {
    return(
      <h2
      className={`${bigHeader} text-2xl font-bold `}
        {...props}
      >
        {children}
      </h2>)
  }
  if (size === 'h3') {
    return (
      <h3
        className={`${bigHeader} text-xl font-semibold `}
        {...props}
      >
        {children}
      </h3>
    );
  }
  if (size === 'h4') {
    return <h4 className={`${smallHeader} text-lg font-semibold`} {...props}>{children}</h4>;
  }
  if (size === 'h5') {
    return <h5 className={`${smallHeader} text-base font-medium`} {...props}>{children}</h5>;
  }
  return <h1>{children}</h1>;
};

export default Htag;
