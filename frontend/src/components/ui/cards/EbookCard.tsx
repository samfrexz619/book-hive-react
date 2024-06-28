import React from 'react';
import { Icons } from '../uiIcons/Icons';
import book1 from '@/assets/images/ebook/book1.svg';
import { EbookCardItems } from '@/types/landingTypes';



interface Props {
  ebookItem: EbookCardItems;
}

const EbookCard: React.FC<Props> = (props) => {
  const { ebookItem } = props;

  return (
    <div className='h-[395px] md:h-[385px] snap-start w-full grid grid-rows-[min-content] md:bg-surface bg-card-sm'>

      <div className='relative h-[244px] w-full'>
        <div className='w-[83px] flex items-center justify-center h-7 bg-[#805610] text-white text-xs absolute'>
          <p>Top-rated</p>
        </div>

        <img src={ebookItem.bookImage} alt={ebookItem.bookTitle} className='h-full gridImg' />

        <div className='bg-black1 bottom-0 flex items-center justify-center right-0 text-white h-7 w-[60px] absolute'>
          <p className='text-14 font-medium'>$ {ebookItem.price}</p>
        </div>

      </div>

      <div className='flex w-full justify-between items-center py-3 px-3'>
        <div>
          <p className='text-black1 text-16'>{ebookItem.bookTitle}</p>
          <p className='text-grey2 text-14 font-normal'>By {ebookItem.author}</p>
        </div>
        <button className='hidden md:block'>
          <Icons iconName='cart' />
        </button>
      </div>
      <i className='block h-[1px] mt-1 w-[172px] mx-auto bg-grey3'></i>

      <div className='flex text-black2 items-center justify-between text-14 pt-4 px-3 h-11'>
        <button className='flex gap-x-2'>
          <Icons iconName='like' />
          <span className='text-14'>Add to wishlist</span>
        </button>
        <button className='text-14 hidden md:block'>
          Preview
        </button>
        <button className='block md:hidden'>
          <Icons iconName='cart' />
        </button>
      </div>
    </div>
  );
}

export default EbookCard;
