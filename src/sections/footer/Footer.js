import React from 'react';
import styles from '@/sections/footer/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className="container">
        <div className={styles.FooterCaixa}>
          <div className={styles.FooterItens}>
            <h2>Isadora Vanderlan</h2>
            <ul>
              <li>
                {/* <img src="./icons/github.svg" /> */}
                (11) 96650-2947
              </li>
              <li>
                {/* <img src="./icons/linkedin.svg" /> */}
                Vanderlansantos1991@gmail.com
              </li>
            </ul>
          </div>

          <div className={styles.FooterContato}>
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="">
                  <img src="./icons/github.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./icons/linkedin.svg" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./icons/whats.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
