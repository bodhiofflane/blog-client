import { NavLink } from 'react-router-dom';

import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi';

import DropdownMenu from '../ui/DropdownMenu';

const links = [
  { to: '/', name: 'Главная' },
  { to: '/my-posts', name: 'Мои посты' },
  { to: '/create-post', name: 'Создать пост' },
];

const dropdownLinks = [
  {
    title: 'JavaScript',
    to: '/search/?theme=javascript',
    icon: <BiLogoJavascript />,
  },
  { title: 'React', to: '/search/?theme=react', icon: <BiLogoReact /> },
  { title: 'Node.js', to: '/search/?theme=node', icon: <BiLogoNodejs /> },
];

const Navigation = () => {
  return (
    <nav className="hidden xl:flex justify-start xl:justify-center items-center space-x-3 xl:order-2">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            className="inline-flex text-lg  text-primary  dark:text-primary-hover border-b-2 border-transparent hover:border-primary hover:dark:border-primary-hover transition-colors"
            to={link.to}
          >
            {link.name}
          </NavLink>
        );
      })}
      <DropdownMenu links={dropdownLinks}>
        Темы
      </DropdownMenu>
    </nav>
  );
};

export default Navigation;
