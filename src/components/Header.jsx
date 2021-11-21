import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from './Button';

import logoSvg from '../assets/img/pizza-logo.svg';
import { cartSelector } from '../redux/selectors';

function Header(props) {
  const { totalPrice, totalCount } = useSelector(cartSelector);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>the most delicious pizza in the world</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice}&nbsp;$</span>
              <div className="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3332C7.06971 16.3332 7.66667 15.7362 7.66667 14.9998C7.66667 14.2635 7.06971 13.6665 6.33333 13.6665C5.59695 13.6665 5 14.2635 5 14.9998C5 15.7362 5.59695 16.3332 6.33333 16.3332Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3332C15.0697 16.3332 15.6667 15.7362 15.6667 14.9998C15.6667 14.2635 15.0697 13.6665 14.3333 13.6665C13.597 13.6665 13 14.2635 13 14.9998C13 15.7362 13.597 16.3332 14.3333 16.3332Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99984H16.3334L15.2134 10.5932C15.1524 10.9001 14.9854 11.1758 14.7417 11.372C14.4979 11.5683 14.1929 11.6725 13.88 11.6665H6.83335C6.50781 11.6693 6.1925 11.5528 5.94689 11.3391C5.70128 11.1255 5.54233 10.8293 5.50002 10.5065L4.48669 2.8265C4.44466 2.50599 4.28764 2.21167 4.04482 1.99828C3.80201 1.7849 3.48994 1.66699 3.16669 1.6665H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
