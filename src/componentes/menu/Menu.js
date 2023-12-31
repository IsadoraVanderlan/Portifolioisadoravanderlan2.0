'use client';
import React from 'react';
import { Link } from 'react-scroll';
import styles from '@/componentes/menu/Menu.module.css';
import Button from '@/componentes/button/Button';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <div>
        <ul className={styles.MenuNav}>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              href=""
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="portifolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              href=""
            >
              Projetos
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className={styles.MenuRedes}>
          <li>
            <a href="https://github.com/IsadoraVanderlan" target='_blanc'>
              <img src="./icons/github.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/isadoravanderlan/" target='_blanc'>
              <img src="./icons/linkedin.svg" />
            </a>
          </li>
        </ul>
      </div>

      <Button />
    </div>
  );
};

export default Menu;
