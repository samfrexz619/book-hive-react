import React from 'react';

interface Props {
  iconName: string;
}

export const UiIcons: React.FC<Props> = (props) => {

  const { iconName } = props;

  return (
    <span>
      {
        iconName === 'like'
          ? <svg width="25" height="24" data-testid="like">
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
              : iconName === 'menu'
                ? <svg width="24" height="16">
                  <use xlinkHref="/sprite.svg#menu-icon" />
                </svg>
                : <svg width="44" height="44">
                  <use xlinkHref="/sprite.svg#search" />
                </svg>
      }
    </span>
  );
}
