import React from 'react';
import Text from '../../atoms/Text';
import styles from './TableHeading.module.scss';

const TableHeading: React.FC = ({ children }) => {
  return (
    <div className={`${styles.title} ${styles.align}`}>
      <Text type="title" color="black">
        Title
      </Text>
      <Text type="title" color="black">
        Author
      </Text>
      <Text type="title" color="black">
        Pub Year
      </Text>
      <div>{children}</div>
    </div>
  );
};

export default TableHeading;
