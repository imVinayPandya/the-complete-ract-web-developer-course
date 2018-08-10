import React from 'react';

const Header = (props) => {
  const { title } = props;
  const { subtitle } = props;
  return (
    <div className='header'>
      <h1 className='header__title'>{title}</h1>
      {subtitle && <h2 className='header__subtitle'>{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;