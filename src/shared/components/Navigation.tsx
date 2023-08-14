import {NavLink} from 'react-router-dom';

const links = [
  {to: '/', name: 'Главная'},
  {to: '/my-posts', name: 'Мои посты'},
  {to: '/create-post', name: 'Создать пост'},
];

const Navigation = () => {
  return (
      <nav className="hidden md:flex justify-between items-center space-x-3 text-xl order-2">
        {links.map((link, index) => {
          return (
            <NavLink
              key={index}
              className="inline-flex text-lg text-gray-500 sm:text-blue-900"
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
