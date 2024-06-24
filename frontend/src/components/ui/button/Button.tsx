import React from 'react';

interface Props {
  btnTitle: string;
  variant: 'outlined' | 'filled'
}

const Button: React.FC<Props> = (props) => {
  const { btnTitle, variant } = props;

  const variantCls = variant === 'filled' ? 'bg-pry text-white' : 'border border-pry text-black1'
  return (
    <button className={`w-full h-11 flex items-center justify-center ${variantCls}`}>
      {btnTitle}
    </button>
  );
}

export default Button;
