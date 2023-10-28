'use client';
import React from 'react';
import styles from '@/sections/formacao/Formacao.module.css';
import Fade from 'react-reveal/Fade';

const Formacao = () => {
  return (
    <div className={styles.Formacao}>
      <div className="container">
        <div className={styles.FormacaoContainer}>
          <Fade left>
            <div className={styles.FormacaoImg}>
              <img
                src="./img/mixkit-person-wearing-a-vr-mask-in-a-virtual-reality-room-64-original-large.jpg"
                alt=""
              />
            </div>
          </Fade>

          <Fade right>
            <div className={styles.FormacaoCaixa}>
              <h2>Formação em Tecnologia da Informação</h2>
              <div>
                <img src="" alt="" />
                <h3>Sistemas da Informação</h3>
                <p>Bacharel</p>
                <p>UNINOVE</p>
              </div>

              <div>
                <img src="" alt="" />
                <h3>Cursos</h3>
                <p>
                  Desenvolvimento Web <span>114h</span>
                </p>
                <p>
                  Wordpress Profissional <span>25h</span>
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Formacao;
