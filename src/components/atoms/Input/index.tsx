import React from 'react';

import styles from './Input.module.scss';
import {InputProps} from '../../../datatype/interface';

const Input: React.FC<InputProps> = ({type = "text", ...props}) => {
  return <input className={styles.Input} value={props.value} type={type} {...props}></input>;
};

export default Input;