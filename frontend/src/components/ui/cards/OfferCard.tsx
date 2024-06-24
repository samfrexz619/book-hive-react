import React from 'react';
import { clsx as cls } from 'clsx';
import { Icons } from '../uiIcons/Icons';
import { OfferCardItems } from '@/types/landingTypes';


interface Props {
  cardItem: OfferCardItems;
}

const OfferCard: React.FC<Props> = (props) => {
  const { cardItem: item } = props;

  const iconCls = cls(`flex items-center mx-auto lg:mx-0 justify-center h-12 w-12 lg:h-16 lg:w-16 rounded-full text-white ${item.icon === 'speech'
    ? 'bg-[#5D5791]'
    : item.icon === 'mkt'
      ? 'bg-[#006874]'
      : item.icon === 'lock'
        ? 'bg-[#805610]'
        : 'bg-[#001F24]'
    }`)

  return (
    <div className="w-264 md:w-full h-[250px] text-center lg:text-left lg:h-72 bg-white lg:shadow-md shadow-sm px-4 py-6">
      <div className={iconCls}>
        <Icons iconName={item.icon} />
      </div>
      <div className='text-black2'>
        <p className="font-medium lg:text-22 text-16 pt-4 pb-2">{item.label}</p>
        <p className="py-1 text-14">
          {item.body}
        </p>
      </div>
    </div>
  );
}

export default OfferCard;
