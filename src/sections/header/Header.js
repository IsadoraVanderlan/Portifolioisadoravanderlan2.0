import React from 'react';
import styles from '@/sections/header/Header.module.css';
import Menu from '@/componentes/menu/Menu';

const Header = () => {
  return (
    <div className='container'>
      <div className={styles.Header}>
        <div>
          <Menu />
        </div>

      </div>
    </div>
  );
};

export default Header;
