import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import { Icons } from '../ui/uiIcons/Icons';
import SearchInput from '../ui/inputs/SearchInput';
import CategoryModal from '../ui/modals/CategoryModal';
import MobileNavigation from '../mobileNav/MobileNavigation';


export const HeaderLayout = () => {

  const [showModal, setShowModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navLinks = [
    {
      id: '1',
      path: 'wishlist',
      iconName: 'like'
    },
    {
      id: '2',
      path: 'cart',
      iconName: 'cart'
    },
    {
      id: '3',
      path: 'my account',
      iconName: 'profile'
    },
  ];

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const handleMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }

  return (
    <main className='w-full'>
      <header className='w-full bg-white h-20'>
        <nav className='h-full w-93 mx-auto flex items-center justify-between'>
          <button onClick={handleMobileNav} className='text-black1 block lg:hidden'>
            <Icons iconName='menu' />
          </button>

          <Link to={'/'}>
            <img src={logo} alt="logo" className='lg:w-60 md:w-[183px] w-36' />
          </Link>

          <div className='hidden lg:block'>
            <SearchInput toggleModal={toggleModal} />
          </div>

          <button className='block lg:hidden'>
            <Icons iconName='search' />
          </button>
          <ul className='hidden lg:flex h-full items-center gap-x-5'>
            {
              navLinks.map(link => (
                <li key={link.id}>
                  <Link to={'#'} className='flex text-black1 flex-col items-center gap-y-2'>
                    <Icons iconName={link.iconName} />
                    <p className='capitalize text-14 font-medium'>{link.path}</p>
                  </Link>
                </li>

              ))
            }
          </ul>
        </nav>
      </header>
      <section className='reset'>
        <Outlet />
      </section>
      {showModal && <div className='w-full hidden lg:block'>
        <CategoryModal toggleModal={toggleModal} />
      </div>}
      {showMobileNav && <div className='w-full block lg:hidden'>
        <MobileNavigation close={handleMobileNav} />
      </div>}
    </main>
  )
};
