import React from 'react';
import { Link } from 'react-router-dom';
import { genres, faculty, institution } from './data';

interface Props {
  toggleModal: () => void;
}

const CategoryModal: React.FC<Props> = (props) => {
  const { toggleModal } = props;

  return (
    <div onClick={toggleModal} className='w-full fixed bottom-0 top-0 bg-modal'>
      <div onClick={e => e.stopPropagation()} className='relative w-full bg-white h-[524px] top-20'>
        <div className='w-96% mx-auto h-full flex'>

          <div className='border-r border-modal-border h-full text-black1 w-38%'>
            <p className='text-22 font-medium py-4 pl-5'>Genre</p>
            <ul className='grid grid-cols-2'>
              {
                genres.map(genre => (
                  <li key={genre.id} className='py-3 text-14 hover:bg-surface'>
                    <Link to={genre.path} className='pl-5'>{genre.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='border-r border-modal-border h-full w-38% text-black1'>
            <p className='text-22 font-medium py-4 pl-5'>Faculty</p>
            <ul className='grid grid-cols-2'>
              {
                faculty.map(genre => (
                  <li key={genre.id} className='py-3 text-14 hover:bg-surface'>
                    <Link to={genre.path} className='pl-5'>{genre.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='h-full text-black1 w-[24%]'>
            <p className='text-22 font-medium py-4 pl-5'>Institution</p>
            <ul className='w-full'>
              {
                institution.map(genre => (
                  <li key={genre.id} className='py-3 w-full text-14 hover:bg-surface'>
                    <Link to={genre.path} className='pl-5'>{genre.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;
