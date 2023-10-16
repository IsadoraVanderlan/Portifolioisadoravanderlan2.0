import React from 'react';
import styles from '@/componentes/button/Button.module.css'

const Button = () => {
  return (
    <div className={styles.Button}>
      <button><a href="https://api.whatsapp.com/send?phone=5511966502947">Contato</a></button>
    </div>
  )
}

export default Button
