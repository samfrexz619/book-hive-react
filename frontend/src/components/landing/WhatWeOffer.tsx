import React from 'react';
import OfferCard from '../ui/cards/OfferCard';
import { OfferCardItems } from '@/types/landingTypes';
import Button from '../ui/button/Button';


interface Props {
}

const WhatWeOffer: React.FC<Props> = (props) => {

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
    <div className='w-4/5 mx-auto'>
      <h3 className='font-medium lg:text-32 text-24 text-center'>What We Offer</h3>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 py-8 justify-center'>
        {
          offerCardItems.map(card => (
            <OfferCard key={card.id} cardItem={card} />
          ))
        }
      </div>
      <div className='w-264 md:w-[224px] mx-auto mt-5'>
        <Button btnTitle='Explore' variant='filled' />
      </div>
    </div>
  );
}

export default WhatWeOffer;
