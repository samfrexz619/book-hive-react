import React, { useEffect, useState } from 'react';
import { SlideItem } from '@/types/landingTypes';
import CarouselIndicator from './CarouselIndicator';
// import CarouselItem from './CarouselItem';


interface Props {
  slideItems: SlideItem[];
  interval: number;
  // children: React.ReactNode;
  autoSlide: boolean;
}

const Carousel: React.FC<Props> = (props) => {

  const { slideItems, interval, autoSlide } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  let slideInterval: any = null

  // 
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
    <CarouselIndicator key={idx} currentSlide={currentSlide} index={idx} />
  ))

  return (
    <div className='relative overflow-x-hidden h-full w-full'>
      <div
        className={`transition-transform ease-out duration-500 flex`}
      // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {
          slideItems.map((slideItem, idx) => (
            <picture key={slideItem.id} className={`${currentSlide === idx ? 'block' : 'hidden'}`}>
              <source
                media='(min-width: 768px)'
                srcSet={slideItem.imageSizes[0]}
                className=''
              />
              <source
                media='(min-width: 425px)'
                srcSet={slideItem.imageSizes[1]}
                className='h-[500px]'
              />
              <source
                media='(max-width: 375px)'
                srcSet={slideItem.imageSizes[2]}
              />
              <img src={slideItem.imageSizes[0]} alt={slideItem.alt} className='block' />
            </picture>
          ))
        }
      </div>
      <div className='absolute bottom-8 md:bottom-4 lg:bottom-10 w-full flex justify-center'>
        {indicators}
      </div>
    </div>
  )
}

export default Carousel;
