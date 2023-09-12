import { useEffect, useLayoutEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const SwitchTheme = () => {
  const [isDarkTheme, setTheme] = useState(false);

  const pos = isDarkTheme ? 'translate-x-7' : '';

  const initTheme = () => {
    const themeFromLocalStorage = localStorage.getItem('theme');
    if (themeFromLocalStorage === 'light') {
      setTheme(false);
      document.documentElement.classList.remove('dark');
    }
    if (themeFromLocalStorage === 'dark') {
      setTheme(true);
      document.documentElement.classList.add('dark');
    }
  }

  const switchTheme = () => {
    if (isDarkTheme) {
      setTheme(false);
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
    if (!isDarkTheme) {
      setTheme(true);
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }

  // Что-бы переключатель не дергался при релоде
  useLayoutEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="flex items-center">
      <BsFillSunFill className={'mr-2 text-xl text-primary dark:text-primary-hover'} />

      <label
        className="relative w-12 h-5 bg-border-color-light dark:bg-bg-dark  rounded-2xl cursor-pointer"
        htmlFor="switch-theme"
      >
        <input
          className="hidden"
          type="checkbox"
          id="switch-theme"
          onChange={switchTheme}
        />
        <span className={`absolute top-0 right-0' ${pos} h-full w-[20px] bg-bg-light-second dark:bg-bg-dark-second border-2 border-primary dark:border-primary-hover rounded-full transition-transform`} />
      </label>

      <BsFillMoonFill className={'ml-2 text-xl text-primary dark:text-primary-hover'} />
    </div>
  );
};

export default SwitchTheme;
