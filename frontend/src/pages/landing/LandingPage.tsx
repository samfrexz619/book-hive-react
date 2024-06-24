import Banner from '@/components/ui/banner/Banner';
import { OfferCardItems } from '@/types/landingTypes';
import OfferCard from '@/components/ui/cards/OfferCard';


export const LandingPage = () => {

  const offerCardItems: OfferCardItems[] = [
    {
      id: '1',
      label: 'Listen On the Go',
      body: 'Transform any ebook into an audiobook and enjoy on the go.',
      icon: 'speech'
    },
    {
      id: '2',
      label: 'MarketPlace',
      body: 'Seamlessly search and purchase ebooks based on authors, title, universities, DOI, and ISBN.',
      icon: 'mkt'
    },
    {
      id: '3',
      label: 'Secure Transaction',
      body: 'Seamlessly transact with our secure payment gateway, while SSL encryption safeguards your data.',
      icon: 'lock'
    },
    {
      id: '4',
      label: 'Community Review',
      body: 'Join discussions through user reviews, and share literary discoveries on social platforms.',
      icon: 'user-group'
    },
  ]

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

      <section className='w-full bg-[#F5FAFB] py-10'>
        <div className='w-4/5 mx-auto'>
          <h3 className='font-medium text-32 text-center'>What We Offer</h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 py-8 justify-center'>
            {
              offerCardItems.map(card => (
                <OfferCard key={card.id} cardItem={card} />
              ))
            }
          </div>
        </div>
      </section>
    </section>
  )
}
