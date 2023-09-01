import Navigation from '../../../shared/components/Navigation';
import AppLogo from '../../../shared/ui/AppLogo';
import UserControl from '../../../features/auth/components/UserControl';
import BurgerMenu from '../../../shared/components/BurgerMenu';

const Header = () => {
  return (
    <header className="bg-teal-100 whitespace-nowrap mb-12">
      <div className="w-5/6 m-auto py-2 flex justify-between items-center">
        <AppLogo />

        {/* Будет отображаться только одно */}
        <Navigation/>
        <BurgerMenu/>

        <UserControl/>
      </div>
    </header>
  );
}
 
export default Header;