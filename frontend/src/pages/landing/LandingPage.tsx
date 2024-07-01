import FeaturedBook from '@/components/landing/FeaturedBook';
import Footer from '@/components/landing/Footer';
import HeroBanner from '@/components/landing/HeroBanner';
import WhatWeOffer from '@/components/landing/WhatWeOffer';
import Button from '@/components/ui/button/Button';
import curlyStoke from '@/assets/images/curly-strokes.svg';

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
      <section className='w-full py-10 lg:px-5 px-1'>
        <div className='w-[98%] md:w-[88%] lg:w-[1100px] mx-auto text-center text-black1'>
          <h3 className='font-medium text-24 md:text-28 lg:text-4xl'>Effortless eBook Sales</h3>
          <p className='py-8 relative w-full'>
            Join our Author Empowerment Hub to showcase your expertise and reach a wider audience. Easily upload and sell your books while gaining invaluable insights through real-time analytics on your sales and engagements. Start sharing your knowledge and stories with the world today!
            <img src={curlyStoke} alt="double strokes" className='absolute md:right-0 lg:right-24 bottom-[14px] right-6' />
          </p>
          <div className='lg:w-[224px] w-40 mx-auto pt-2'>
            <Button btnTitle='Create Account' variant='outlined' />
          </div>
        </div>
      </section>
      <footer className='w-full'>
        <Footer />
      </footer>
      {/* <MobileNavigation /> */}
    </section>
  )
}
