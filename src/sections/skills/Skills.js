'use client';
import React from 'react';
import styles from '@/sections/skills/Skills.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.Skills} id='skills'>
      <div className="container">
        <Fade top>
          <div className={styles.SkillsCaixa}>
            <h2>Skills</h2>
            <p>
              Veja abaixo minhas skills, você é bem vindo ao meu portifolio
              para, aqui você vai entender um pouco sobre meus conhecimento em
              programação.
            </p>

            <div className={styles.Carousel}>
              <Slider {...settings} className={styles.CarouselItem}>
                <div>
                  <img src="./img/react.svg" alt="" />
                </div>
                <div>
                  <img src="./img/javascript.svg" alt="" />
                </div>
                <div>
                  <img src="./img/git.svg" alt="" />
                </div>
                <div>
                  <img src="./img/npm.svg" alt="" />
                </div>
                <div>
                  <img src="./img/html5.svg" alt="" />
                </div>
                <div>
                  <img src="./img/css.svg" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
