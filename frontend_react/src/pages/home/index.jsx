import React from 'react';
import styles from './home.module.scss'; // Você precisará criar este arquivo SCSS

const Home = () => {
  return (
    <div className={styles.institutionalPage}>
      <section className={styles.headerSection}>
        <h1>Nome da Instituição</h1>
      </section>

      <section className={styles.welcomeSection}>
        <h2>Bem-vindo!</h2>
        <p>Estamos felizes em vê-lo por aqui. Descubra mais sobre nós e o que fazemos.</p>
      </section>

      <section className={styles.aboutSection}>
        <h2>Sobre nós</h2>
        <p>Aqui vai um texto informativo sobre a missão, visão e os valores da instituição.</p>
      </section>

      <section className={styles.contactSection}>
        <h2>Contato</h2>
        <p>Tem perguntas? Entre em contato através do nosso e-mail: contato@instituicao.com</p>
      </section>
    </div>
  );
};

export default Home;