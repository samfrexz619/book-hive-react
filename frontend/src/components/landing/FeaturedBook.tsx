import React from 'react';
import EbookCard from '../ui/cards/EbookCard';
import { EbookCardItems } from '@/types/landingTypes';
import book1 from '@/assets/images/ebook/book1.svg';
import book2 from '@/assets/images/ebook/book2.svg';
import book3 from '@/assets/images/ebook/book3.svg';
import book4 from '@/assets/images/ebook/book4.svg';
import book5 from '@/assets/images/ebook/book5.svg';


interface Props {

}

const FeaturedBook: React.FC<Props> = (props) => {

  const ebookItems: EbookCardItems[] = [
    {
      id: '1',
      author: 'Daniel Kahneman',
      bookImage: book1,
      price: '2.00',
      bookTitle: 'Thinking Fast and Slow'
    },
    {
      id: '2',
      author: 'Daniel Kahneman',
      bookImage: book2,
      price: '4.00',
      bookTitle: 'Thinking Fast and Slow'
    },
    {
      id: '3',
      author: 'Daniel Kahneman',
      bookImage: book3,
      price: '6.00',
      bookTitle: 'Thinking Fast and Slow'
    },
    {
      id: '4',
      author: 'Daniel Kahneman',
      bookImage: book4,
      price: '2.00',
      bookTitle: 'Thinking Fast and Slow'
    },
    {
      id: '5',
      author: 'Daniel Kahneman',
      bookImage: book5,
      price: '10.00',
      bookTitle: 'Thinking Fast and Slow'
    },
  ]

  return (
    <div className='w-[94%] mx-auto'>
      <div>
        <h3 className='text-28 font-medium pb-8'>Featured eBooks</h3>
      </div>
      <div className='w-full'>
        {
          ebookItems.map(item => (
            <EbookCard key={item.id} ebookItem={item} />
          ))
        }
      </div>

    </div>
  );
}

export default FeaturedBook;
