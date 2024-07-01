import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '@/assets/images/socials/twitter.svg';
import facebook from '@/assets/images/socials/fb.svg';
import linkedin from '@/assets/images/socials/in.svg';
import ig from '@/assets/images/socials/instagram.svg';

interface Props {

}

const Socials: React.FC<Props> = (props) => {
  return (
    <>
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
    </>
  );
}

export default Socials;
