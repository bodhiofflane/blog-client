import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className='grow w-11/12 md:w-[768px] xl:w-[1280px] mx-auto'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export {Layout};