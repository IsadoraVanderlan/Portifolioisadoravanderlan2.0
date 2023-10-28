import React from 'react';
import styles from '@/sections/header/Header.module.css';
import Button from '@/componentes/button/Button';
import Menu from '@/componentes/menu/Menu';
import MenuMobile from '@/componentes/menu-mobile/MenuMobile';

const Header = () => {
  return (
    <div className='container'>
      <div className={styles.Header}>
        <div>
          <Menu />
        </div>

        <div>
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
