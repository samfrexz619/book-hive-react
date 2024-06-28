import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import twitter from '@/assets/images/socials/twitter.svg';
import facebook from '@/assets/images/socials/fb.svg';
import linkedin from '@/assets/images/socials/in.svg';
import ig from '@/assets/images/socials/instagram.svg';

interface Props {

}

const Footer: React.FC<Props> = (props) => {
  const quickLinks = [
    {
      id: '1',
      path: '#',
      routeName: 'Categories'
    },
    {
      id: '2',
      path: '#',
      routeName: 'Marketplace'
    },
    {
      id: '3',
      path: '#',
      routeName: 'List a book'
    },
    {
      id: '4',
      path: '#',
      routeName: 'FAQ'
    },
  ];

  const company = [
    {
      id: '1',
      path: '#',
      routeName: 'About'
    },
    {
      id: '2',
      path: '#',
      routeName: 'Contact and Support'
    },
    {
      id: '3',
      path: '#',
      routeName: 'Marketplace'
    },
    {
      id: '4',
      path: '#',
      routeName: 'Terms and Privacy'
    },
  ];

  return (
    <div className='w-94 mx-auto py-12'>
      <div className='w-full flex gap-x-8 justify-between flex-wrap md:flex-nowrap'>
        <Link to={'/'} className='w-full md:w-1/2 lg:w-2/5 pb-5 md:pb-0'>
          <img src={logo} alt="company's logo" className='w-[150px] md:w-[183px] lg:w-[250px]' />
        </Link>

        <div className='grid lg:grid-cols-3 grid-cols-2 gap-x-12 w-full lg:w-[840px] md:w-[480px] flex-wrap lg:flex-nowrap'>
          <div className='pl-0 lg:pl-12'>
            <p className='text-black1 text-16 md:text-xl font-medium'>PRODUCT</p>
            <ul>
              <li className='py-1'>
                <Link to={'#'} className='text-14 font-medium'>Pricing</Link>
              </li>
              <li>
                <Link to={'#'} className='text-14 font-medium'>Integrations</Link>
              </li>
            </ul>
          </div>
          <div className='pl-0 lg:pl-12'>
            <p className='text-black1 text-16 md:text-xl font-medium'>QUICK LINKS</p>
            <ul>
              {
                quickLinks.map(link => (
                  <li key={link.id} className='py-1'>
                    <Link to={link.path} className='text-14 font-medium'>{link.routeName}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='pl-0 lg:pl-12'>
            <p className='text-black1 text-16 md:text-xl font-medium'>COMPANY</p>
            <ul>
              {
                company.map(link => (
                  <li key={link.id} className='py-1'>
                    <Link to={link.path} className='text-14 font-medium'>{link.routeName}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      <div className='pt-12 flex w-full justify-between items-center flex-wrap md:flex-nowrap'>
        <p className='order-2 md:order-1 w-full text-16 md:w-auto text-center lg:text-left pt-8 lg:py-0'>&copy; 2024 COPYRIGHT BookHive.</p>

        <div className='flex gap-x-4 order-1 md:order-2 w-full md:w-auto'>
          <Link to={'#'}>
            <img src={twitter} alt="X fka twitter logo" className='w-6 lg:w-[35px]' />
          </Link>
          <Link to={'#'}>
            <img src={ig} alt="instagram logo" className='w-6 lg:w-[35px]' />
          </Link>
          <Link to={'#'}>
            <img src={facebook} alt="facebook logo" className='w-6 lg:w-[35px]' />
          </Link>
          <Link to={'#'}>
            <img src={linkedin} alt="LinkedIn logo" className='w-6 lg:w-[35px]' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
