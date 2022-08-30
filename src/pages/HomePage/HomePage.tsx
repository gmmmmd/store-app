import React from 'react';

import styles from './HomePage.module.scss';

const Homepage: React.FC = () => {
  return (
    <main className="Container">
      <h1 className={styles.Block__title}>Welcome to store-app</h1>
    </main>
  );
};

export default Homepage;
