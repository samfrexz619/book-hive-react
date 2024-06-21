import Banner from '@/components/ui/banner/Banner'

export const LandingPage = () => {
  return (
    <section className='w-full'>
      <div className='w-full h-[700px] relative'>
        <Banner />
        <div className='absolute opacity-100 top-0 w-full bottom-0 bg-banner h-full text-white'>hey</div>
      </div>
    </section>
  )
}
