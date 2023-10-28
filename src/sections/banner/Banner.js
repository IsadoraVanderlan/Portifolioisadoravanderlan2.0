'use client';
import React from 'react';
import styles from '@/sections/banner/Banner.module.css';
import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className="container">
        <dir className={styles.BannerCaixa}>
          <Fade left>
            <div className={styles.BannerTexto}>
              <h1>Isadora Vanderlan</h1>
              <h2 className={styles.TextWrite}>Desenvolvedora front-end</h2>
              
              <p>
                Olá, bem vindo ao meu portifolio. Com uma sólida formação
                acadêmica e experiência prática, estou entusiasmada em
                compartilhar meu portfólio de projetos que refletem minha paixão
                pelo design e codificação.
              </p>

              <div className={styles.ButtonBanner}>
                <button>
                  <a href="https://www.linkedin.com/in/isadora-vanderlan-2a212b16a/">
                    Linkedin
                  </a>
                </button>
              </div>
            </div>
          </Fade>

          <div className={styles.BannerImg}>
            <img src="./img/cumputer.svg" className={styles.VerticalMove} />
          </div>
        </dir>
      </div>
    </div>
  );
};

export default Banner;
