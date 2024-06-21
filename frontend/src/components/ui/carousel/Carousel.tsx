import React, { useEffect, useState } from 'react';
import { SlideItem } from '@/types/slideTypes';
import CarouselIndicator from './CarouselIndicator';
// import CarouselItem from './CarouselItem';


interface Props {
  slideItems: SlideItem[];
  interval: number;
  children: React.ReactNode;
  autoSlide: boolean;
}

const Carousel: React.FC<Props> = (props) => {

  const { slideItems, interval, children: slides, autoSlide } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  let slideInterval: any = null

  // const handlePrev = (step = -1) => {
  //   setCurrentSlide(prev => prev > 0 ? prev + step : slideItems.length - 1)
  // }

  const handleNext = (step = 1) => {
    setCurrentSlide(nxt => nxt < slideItems.length - 1 ? nxt + step : 0)
    handleStartSlideTimer()
  }

  const handleStopSlideTimer = () => {
    clearInterval(slideInterval)
  }

  const handleStartSlideTimer = () => {
    handleStopSlideTimer()
    slideInterval = setInterval(() => {
      handleNext()
    }, interval)
  }

  useEffect(() => {
    if (!autoSlide) return
    handleStartSlideTimer()
    return () => handleStopSlideTimer()
  }, [slideItems, interval])

  const indicators = slideItems?.map((_, idx) => (
    <CarouselIndicator currentSlide={currentSlide} index={idx} />
  ))

  return (
    <div className='overflow-x-hidden relative w-full'>
      <div
        className={`flex w-full transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides}
      </div>
      <div className='absolute bottom-20 w-full flex justify-center'>
        {indicators}
      </div>
    </div>
  )
}

export default Carousel;
