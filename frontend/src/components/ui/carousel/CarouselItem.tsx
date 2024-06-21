import React from 'react';
import { clsx as cn } from "clsx";
import { SlideItem } from '@/types/slideTypes';

interface Props {
  slideItem: SlideItem;
  index: number;
  currentSlide: number;
}

const CarouselItem: React.FC<Props> = (props) => {
  // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  const { slideItem, index, currentSlide: curr } = props;

  return (
    <div className={cn(`${curr === index ? 'block' : 'hidden'} transition-transform ease-out duration-700`)}>
      <img src={slideItem.item} alt="" />
    </div>
  );
}

export default CarouselItem;
