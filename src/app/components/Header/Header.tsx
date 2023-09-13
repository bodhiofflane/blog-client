import Navigation from '../../../shared/components/Navigation';
import AppLogo from '../../../shared/ui/AppLogo';
import UserControl from '../../../features/auth/components/UserControl';
import BurgerMenu from '../../../shared/components/BurgerMenu';
import SwitchTheme from '../../../shared/ui/SwithTheme';

const Header = () => {
  return (
    <header className="mb-12 bg-bg-light-second dark:bg-bg-dark-second shadow-main dark:shadow-none whitespace-nowrap">
      {/* <div className="w-5/6 m-auto py-2 flex justify-evenly items-center"> */}
      <div className="w-5/6 m-auto py-2 grid grid-cols-3 justify-center items-center">
        <BurgerMenu/>
        <Navigation/>

        <AppLogo />

        <div className='flex space-x-2 justify-end xl:order-3'>
          <SwitchTheme/>
          <UserControl/>
        </div>

      </div>
    </header>
  );
}
 
export default Header;