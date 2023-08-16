import {useEffect, useState} from 'react';

import {NavLink} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

//import NavigationMobile from './NavigationMobile';

const links = [
  {to: '/', name: 'Главная'},
  {to: '/my-posts', name: 'Мои посты'},
  {to: 'new-post', name: 'Создать пост'},
];

const BurgerMenu = () => {
  const [isOpenMenu, setMenuState] = useState(false);

  // Обработчики
  const openMenuHandler = () => {
    setMenuState(true);
  }

  const closeMobileNavHendler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest('#modal-menu') &&
      !target.closest('#menu-open-button')
    ) {
      setMenuState(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeMobileNavHendler);
    return () => {
      document.body.removeEventListener('click', closeMobileNavHendler);
    };
  }, [isOpenMenu]);

  return (
    <div className="flex justify-center items-center order-1 text-4xl md:hidden">
      <button
        id="menu-open-button"
        onClick={openMenuHandler}
      >
        <GiHamburgerMenu />
      </button>
      {isOpenMenu ? (
        <div
          className="absolute left-0 top-0 h-screen w-4/6 bg-slate-400 z-50"
          id="modal-menu"
        >
          <nav className="flex flex-col justify-between items-center space-x-3 text-xl order-2">
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
        </div>
      ) : null}
    </div>
  );
};

export default BurgerMenu;
