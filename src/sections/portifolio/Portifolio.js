'use client';
import React from 'react';
import styles from '@/sections/portifolio/Portifolio.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useMediaQuery from '@/hooks/useMediaQuery';
import Fade from 'react-reveal/Fade';

const Portifolio = () => {
  const isMobile = useMediaQuery(575);

  const isTablete = useMediaQuery(860);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablete ? 2 : 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.Portifolio} id='portifolio'>
      <div className="container">
        <div className={styles.PortifolioCaixa}>
          <h2>Portifolio</h2>
          <p>Ultimos trabalhos</p>
          <Fade left>
            <div className={styles.Carousel}>
              <Slider {...settings} className={styles.CarouselItem}>
                <div>
                  <img src="./img/iba.svg" alt="https://institutobernalmeida.com.br/" />
                </div>
                <div>
                  <img src="./img/portifolio 1.0.svg" alt="https://isadoravanderlan.github.io/portifolioisadoravanderlan.github.io/" />
                </div>
                <div>
                  <img src="./img/ma&lu.svg" alt="https://maelumodaseuniformes.com.br/" />
                </div>
                <div>
                  <img src="./img/cdg.svg" alt="https://casadosgrampos.com.br/" />
                </div>
                <div>
                  <img src="./img/cqc.svg" alt="https://cqccartasqcuram.com.br/" />
                </div>
              </Slider>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
