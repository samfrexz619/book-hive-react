import React, { useRef, useState } from 'react';
import EbookCard from '../ui/cards/EbookCard';
import { EbookCardItems } from '@/types/landingTypes';
import book1 from '@/assets/images/ebook/book1.svg';
import book2 from '@/assets/images/ebook/book2.svg';
import book3 from '@/assets/images/ebook/book3.svg';
import book4 from '@/assets/images/ebook/book4.svg';
import book5 from '@/assets/images/ebook/book5.svg';
import book6 from '@/assets/images/ebook/book6.svg';
import book7 from '@/assets/images/ebook/book7.svg';


interface Props {

}
const WIDTH = 280
const FeaturedBook: React.FC<Props> = (props) => {

  const [scrollPosition, setScrollPosition] = useState(0)

  // const [currIndex, setCurrIndex] = useState(0)


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
    {
      id: '6',
      author: 'Daniel Kahneman',
      bookImage: book6,
      price: '10.00',
      bookTitle: 'Thinking Fast and Slow'
    },
    {
      id: '7',
      author: 'Daniel Kahneman',
      bookImage: book7,
      price: '10.00',
      bookTitle: 'Thinking Fast and Slow'
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollAmt: number) => {
    const newScrollPosition = scrollPosition + scrollAmt;
    setScrollPosition(newScrollPosition)
    containerRef.current!.scrollLeft = newScrollPosition
    console.log(containerRef.current?.children.length)
  }

  // const btn = document.querySelector('#btn')

  // useEffect(() => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollLeft = currIndex * containerRef.current.offsetWidth;
  //   }
  // }, [currIndex]);

  return (
    <div className='w-94 mx-auto'>
      <div>
        <h3 className='md:text-28 text-16 font-medium pb-8'>Featured eBooks</h3>
      </div>
      <div ref={containerRef} className='w-full reset grid grid-flow-col auto-cols-[60%] md:auto-cols-[36%] lg:auto-cols-[21%] gap-3 overflow-x-auto overscroll-x-contain snap-mandatory scroll-px-1 relative'>
        {
          ebookItems.map(item => (
            <EbookCard key={item.id} ebookItem={item} />
          ))
        }
      </div>
      <div className='pt-8 flex justify-center'>
        {/* <button id='btn' className={`h-3 mx-1 ${btn!.scrollLeft === 0 ? 'bg-pry rounded-[29px] w-6' : 'bg-red-300 w-3 rounded-full'} transition-all`}></button>
        <button className={`h-3 w-3 mx-1 rounded-full transition-all bg-red-300`}></button>
        <button className={`h-3 w-3 mx-1 rounded-full transition-all bg-red-300`}></button> */}
        {/* {
          Array.from({ length: 3 }).map((_, idx) => (
            <button key={idx} className={`h-3 w-3 mx-1 rounded-full transition-all bg-red-300`}></button>
          ))
        } */}
      </div>
      <div>
        <button onClick={() => handleScroll(- WIDTH)}>left</button>
        <button onClick={() => handleScroll(WIDTH)}>click</button>
      </div>
    </div>
  );
}

export default FeaturedBook;
