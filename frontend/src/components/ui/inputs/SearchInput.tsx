import React from 'react';
import { Icons } from '../uiIcons/Icons';

interface Props {

}

const SearchInput: React.FC<Props> = (props) => {
  return (
    <div className='w-[440px] h-11 flex'>
      <button className='h-full border-t border-l border-b border-black1 w-[109px] flex items-center justify-center gap-x-2'>
        <span className='text-xs'>Categories</span>
        <Icons iconName='down' />
        {/* <span className='absolute top-[18px] right-4'>
        </span> */}
      </button>
      <input
        type="search"
        className='w-[296px] placeholder:text-grey2 placeholder:text-xs outline-none border border-black1 h-full px-3'
        placeholder='Search by title, author, or ISBN'
      />
      <button className='h-full bg-pry text-white'>
        <Icons iconName='search' />
      </button>
    </div>
  );
}

export default SearchInput;
