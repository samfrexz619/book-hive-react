import React from 'react';
import banner1 from '@/assets/images/banner-images/banner1.svg';
import banner2 from '@/assets/images/banner-images/banner2.svg';
import banner3 from '@/assets/images/banner-images/banner3.svg';
import Carousel from '../carousel/Carousel';

interface Props {

}

const Banner: React.FC<Props> = (props) => {

  const slideItems = [
    {
      id: '1',
      item: banner1
    },
    {
      id: '2',
      item: banner2
    },
    {
      id: '3',
      item: banner3
    },
  ]

  const slides = slideItems.map((slideItem) => (
    <img src={slideItem.item} alt="" className="w-full xl:w-[1440px]" />
  ))

  return (
    <div className='h-full w-full'>
      <Carousel slideItems={slideItems} interval={5000} autoSlide={true}>
        {slides}
      </Carousel>
    </div>
  );
}

export default Banner;
