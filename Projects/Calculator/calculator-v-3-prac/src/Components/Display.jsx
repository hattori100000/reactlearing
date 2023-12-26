import React from 'react';
import styles from './Display.module.css'; // Make sure the file extension is correct

const Display = ({displayValue}) => {
  return <input className={styles.display} type="text"  value={displayValue} readOnly />;
};

export default Display;
