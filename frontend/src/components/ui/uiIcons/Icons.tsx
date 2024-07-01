import React from 'react';

interface Props {
  iconName: string;
}

export const Icons: React.FC<Props> = (props) => {

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
                : iconName === 'search'
                  ? <svg width="44" height="44">
                    <use xlinkHref="/sprite.svg#search" />
                  </svg>
                  : iconName === 'down'
                    ? <svg width="14" height="8" viewBox="0 0 14 8">
                      <use xlinkHref="/sprite.svg#chev-down" />
                    </svg>
                    : iconName === 'mkt'
                      ? <svg width="28" height="32">
                        <use xlinkHref="/sprite.svg#mkt" />
                      </svg>
                      : iconName === 'speech'
                        ? <svg width="32" height="32">
                          <use xlinkHref="/sprite.svg#text-to-speech" />
                        </svg>
                        : iconName === 'lock'
                          ? <svg width="26" height="32">
                            <use xlinkHref="/sprite.svg#lock" />
                          </svg>
                          : iconName === 'user-group'
                            ? <svg width="32" height="32">
                              <use xlinkHref="/sprite.svg#user-group" />
                            </svg>
                            : iconName === 'close'
                              ? <svg width="14" height="14">
                                <use xlinkHref="/sprite.svg#close" />
                              </svg>
                              : <svg width="8" height="14">
                                <use xlinkHref="/sprite.svg#chev-right" />
                              </svg>

      }

    </span>
  );
}
