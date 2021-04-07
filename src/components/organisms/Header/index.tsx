import React from 'react';
import Text from '../../atoms/Text/index';
import styles from './Header.module.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Search from '../Search';

const Header = () => {
  return (
    <div className={styles.Header}>
      <header>
        <Text type="heading" color="white" size="18px" weight={400}>
          Books with Hooks
        </Text>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
