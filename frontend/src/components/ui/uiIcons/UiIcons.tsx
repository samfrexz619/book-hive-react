import React from 'react';

interface Props {
  iconName: string;
}

const UiIcons: React.FC<Props> = (props) => {

  const { iconName } = props;

  return (
    <span>
      {
        iconName === 'like'
          ? <svg width="25" height="24">
            <use xlinkHref="/sprite.svg#like" />
          </svg>
          : iconName === 'cart'
            ? <svg width="25" height="24">
              <use xlinkHref="/sprite.svg#cart" />
            </svg>
            : iconName === 'profile'
              ? <svg width="25" height="24">
                <use xlinkHref="/sprite.svg#account" />
              </svg>
              : <svg width="20" height="21" viewBox="0 0 20 20">
                <use xlinkHref="/sprite.svg#dashboard" />
              </svg>
      }
    </span>
  );
}

export default UiIcons;
