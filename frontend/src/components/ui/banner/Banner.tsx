import React from 'react';
import Carousel from '../carousel/Carousel';
import banner1 from '@/assets/images/banner-images/banner1-1440w.svg';
import banner2 from '@/assets/images/banner-images/banner2-1440w.svg';
import banner3 from '@/assets/images/banner-images/banner3-1440w.svg';
import banner1m from '@/assets/images/banner-images/banner1-768w.png';
import banner2m from '@/assets/images/banner-images/banner2-768w.png';
import banner3m from '@/assets/images/banner-images/banner3-768w.png';
import banner1s from '@/assets/images/banner-images/banner1-375w.svg';
import banner2s from '@/assets/images/banner-images/banner2-375w.svg';
import banner3s from '@/assets/images/banner-images/banner3-375w.svg';
import { SlideItem } from '@/types/slideTypes';


interface Props {

}

const Banner: React.FC<Props> = (props) => {

  const slideItems: SlideItem[] = [
    {
      id: '1',
      imageSizes: [banner1, banner1m, banner1s],
      alt: 'a lady holding a tablet'
    },
    {
      id: '2',
      imageSizes: [banner2, banner2m, banner2s],
      alt: 'a cup of coffee and tablet on the table'
    },
    {
      id: '3',
      imageSizes: [banner3, banner3m, banner3s],
      alt: 'a phone showing texts from a book'
    },
  ]

  return (
    <div className='h-full w-full'>
      <Carousel slideItems={slideItems} interval={5000} autoSlide={true} />
    </div>
  );
}

export default Banner;
