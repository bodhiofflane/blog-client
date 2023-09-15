import {
  useState,
  useEffect,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';

import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from 'react-icons/md';

type DropdownMenuProps = {
  links: {
    title: string;
    to: string;
    icon: JSX.Element;
  }[];
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const DropdownMenu = ({
  links,
  children,
  className,
  ...props
}: DropdownMenuProps) => {
  const [isOpen, setState] = useState(false);

  // Handlers
  const dropdownClosureHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#dropdownBlock')) {
      setState(false);
    }
  };

  const pressingEscHandler = (e: KeyboardEvent) => {
    const pressedKey = e.key;
    if (pressedKey === 'Escape') {
      setState(false);
    }
  };

  const followLink = () => {
    setState(false);
  };

  // Side effects
  useEffect(() => {
    document.body.addEventListener('click', dropdownClosureHandler);
    document.body.addEventListener('keydown', pressingEscHandler);

    return () => {
      document.body.removeEventListener('click', dropdownClosureHandler);
      document.body.removeEventListener('keydown', pressingEscHandler);
    };
  }, []);

  return (
    <div className="relative" id="dropdownBlock">
      <button
        className={`inline-flex items-center text-lg  text-primary  dark:text-primary-hover border-b-2 border-transparent hover:border-primary hover:dark:border-primary-hover transition-colors ${className}`}
        onClick={() => setState((prev) => !prev)}
        {...props}
      >
        {children} <MdKeyboardArrowRight className={`${isOpen ? 'rotate-90' : ''} ml-0 text-xl transition-transform`}/>
      </button>

      {isOpen ? (
        <ul className="absolute top-[43px] left-0 z-10 block space-y-2 px-3 py-1 bg-bg-light-second dark:bg-bg-dark-second border-primary rounded-md">
          {links.map(({ title, to, icon }) => {
            return (
              <li
                key={title}
                className="flex space-x-1 items-center text-primary  dark:text-primary-hover text-xl"
              >
                {icon}
                <Link
                  // Закрытие дропдауна при переходе по ссылке
                  onClick={followLink}
                  className="inline-flex text-lg  text-primary  dark:text-primary-hover border-b-2 border-transparent hover:border-primary hover:dark:border-primary-hover transition-colors"
                  to={to}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
