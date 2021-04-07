import React from 'react';
import Text from '../../atoms/Text/index';
import styles from './Home.module.scss';


const Home = () => {
  return (
    <div className={styles.Home}>
        <Text type="heading" color="black" size="40px">Welcome to Books with Hooks</Text>
    </div>
  );
};

export default Home;