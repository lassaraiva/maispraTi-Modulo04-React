import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import HeaderStream from './HeaderStream';

const HeaderSwitcher = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/stream' ? <HeaderStream /> : <Header />}
    </>
  );
};

export default HeaderSwitcher;