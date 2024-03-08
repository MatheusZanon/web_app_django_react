import React from 'react';
import styles from '../../pages/main/main.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles['app-container']}>
      <div>
      <header className={styles.header}>
        {/* Cabeçalho aqui */}
      </header>

      <main className={styles.main}>
        {children} {/* Conteúdo principal */}
      </main>

      <footer className={styles.footer}>
        {/* Rodapé aqui */}
      </footer>
      </div>
    </div>
  );
};

export default Layout;