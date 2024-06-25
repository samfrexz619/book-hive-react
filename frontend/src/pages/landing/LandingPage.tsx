import FeaturedBook from '@/components/landing/FeaturedBook';
import HeroBanner from '@/components/landing/HeroBanner';
import WhatWeOffer from '@/components/landing/WhatWeOffer';

export const LandingPage = () => {

  return (
    <section className='w-full reset h-full'>
      <HeroBanner />
      <section className='w-full bg-surface py-14'>
        <WhatWeOffer />
      </section>
      <section className='w-full py-14'>
        <FeaturedBook />
      </section>
    </section>
  )
}
