import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/uiIcons/Icons';
import Socials from '../landing/Socials';
import { mobileLinks } from '../ui/modals/data';

interface Props {
  close: () => void;
}

const MobileNavigation: React.FC<Props> = (props) => {

  const { close } = props;


  const [selected, setSelected] = useState<number | null>(0);

  const handleAccordion = (idx: number) => {
    if (selected === idx) {
      return setSelected(null)
    }
    setSelected(idx)
  }

  return (
    <div className='w-full fixed bottom-0 top-0 bg-mobile'>
      <nav className='relative bg-white h-full w-[290px] md:w-[360px]'>
        <div className='w-full bg-grey3 h-16 flex justify-between items-center px-5'>
          <div className='flex items-center gap-x-3'>
            <Icons iconName='profile' />
            <p>Hello, <Link to={'#'}>Sign In</Link> </p>
          </div>
          <button onClick={close}>
            <Icons iconName='close' />
          </button>
        </div>

        <ul className='py-1 w-[91%] mx-auto'>
          <li className='w-full font-medium text-14 py-2 hover:bg-surface'>
            <Link to={'#'} className='w-full flex gap-x-2 items-center'>
              <Icons iconName='cart' />
              <p>Cart</p>
            </Link>
          </li>
          <li className='w-full font-medium text-14 py-2 hover:bg-surface'>
            <Link to={'#'} className='w-full flex gap-x-2 items-center'>
              <Icons iconName='like' />
              <p>Wishlist</p>
            </Link>
          </li>
        </ul>

        <div className='w-[91%] mx-auto'>
          {
            mobileLinks.map((link, idx) => (
              <div key={link.id}>
                <button onClick={() => handleAccordion(idx)} className='btn py-2 flex w-full justify-between items-center'>
                  <span className='font-medium text-16'>Shop by {link.title}</span>
                  <span className={`${selected === idx ? 'rotate-0' : 'rotate-[90deg]'} transition-transform duration-200 ease-in-out`}>
                    <Icons iconName='chev-right' />
                  </span>
                </button>
                <ul className={`panel ease-in-out mobile ${selected === idx ? 'max-h-[200px] overflow-y-scroll' : 'overflow-hidden max-h-0'}`}>
                  {link.content.map(item => (
                    <li key={item.id} className='py-2 text-14 text-black3 hover:bg-surface'>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>

        <footer className='w-full flex justify-center h-16 items-center absolute bottom-0 border-t border-grey1'>
          <div className='flex gap-x-5'>
            <Socials />
          </div>
        </footer>
      </nav>
    </div>
  );
}

export default MobileNavigation;
