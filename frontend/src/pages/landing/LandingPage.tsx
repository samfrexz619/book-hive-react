import Banner from '@/components/ui/banner/Banner'

export const LandingPage = () => {
  return (
    <section className='w-full reset h-full'>
      <div className='w-full h-full relative'>
        <Banner />
        <div className='absolute w-full opacity-100 top-0 bottom-0 bg-banner h-full text-white flex justify-center items-center'>
          <div className='text-center w-[90%] mx-auto'>
            <h2 className='text-center text-22 md:text-32 py-5 lg:text-36 font-normal'>Welcome to BookHive, Your Gateway to <br className='hidden md:block' /> Knowledge & Exploration.</h2>
            <p className='text-center py-4 text-16 lg:text-22'>
              Discover a boundless library of ebooks. Explore our vast selection spanning genres like fiction, self-help, business,<br className='hidden lg:block' /> science, and more, offering a curated collection of immersive stories, insightful guides, and captivating narratives in <br className='hidden lg:block' /> your field of study. Find your next literary adventure today!
            </p>
            <button className='w-[164px] md:w-[224px] mx-auto mt-8 bg-pry text-white capitalize h-11'>
              get started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
