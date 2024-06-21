import React from 'react';

interface Props {
  index: number;
  currentSlide: number;
}

const CarouselIndicator: React.FC<Props> = (props) => {

  const { index, currentSlide } = props;
  return (
    <button key={index} className={`h-3 mx-1 rounded-full transition-all bg-grey1 ${currentSlide === index ? 'bg-pry w-6 rounded-[29px]' : 'w-3'}`}></button>
  );
}

export default CarouselIndicator;
