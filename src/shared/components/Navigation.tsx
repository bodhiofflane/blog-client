import {NavLink} from 'react-router-dom';

const links = [
  {to: '/', name: 'Главная'},
  {to: '/my-posts', name: 'Мои посты'},
  {to: '/create-post', name: 'Создать пост'},
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
      </nav>
  );
};

export default Navigation;
