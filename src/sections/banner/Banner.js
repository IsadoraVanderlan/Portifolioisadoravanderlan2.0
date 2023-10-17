import React from 'react';
import styles from '@/sections/banner/Banner.module.css';
import Button from '@/componentes/button/Button';

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className="container">
        <dir className={styles.BannerCaixa}>
          <div className={styles.BannerTexto}>
            <h1>Olá, eu sou a Isadora</h1>
            <h2>Desenvolvedora front-end</h2>
            <p>
              Sou uma apaixonada pelo desenvolvimento front-end dedicada a criar
              experiências web incríveis e funcionais. Com uma sólida formação
              acadêmica e experiência prática, estou entusiasmada em
              compartilhar meu portfólio de projetos que refletem minha paixão
              pelo design e codificação.
            </p>

            <div className={styles.ButtonBanner}>
              <Button />
            </div>
          </div>
          <div className={styles.BannerImg}>
            <img src="./img/cumputer.svg" alt="" />
          </div>
        </dir>
      </div>
    </div>
  );
};

export default Banner;
