import { Link, Outlet } from 'react-router-dom'
import logo from '@/assets/images/logo.svg';
import UiIcons from '../ui/uiIcons/UiIcons';


export const HeaderLayout = () => {
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
  ]
  return (
    <main className='w-full'>
      <header className='w-full bg-white h-20'>
        <nav className='h-full w-93 mx-auto flex items-center justify-between'>
          <Link to={'/'}>
            <img src={logo} alt="logo" className='w-60' />
          </Link>
          <ul className='flex h-full items-center gap-x-5'>
            {
              navLinks.map(link => (
                <li key={link.id}>
                  <Link to={'#'} className='flex flex-col items-center gap-y-2'>
                    <UiIcons iconName={link.iconName} />
                    <p className='capitalize text-14 font-medium'>{link.path}</p>
                  </Link>
                </li>

              ))
            }
          </ul>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  )
}
