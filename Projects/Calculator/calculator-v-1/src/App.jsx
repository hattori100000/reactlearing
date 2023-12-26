import React from 'react';
import './App.module.css'; // This import doesn't need a variable assignment

import styles from './App.module.css';
import Display from './Components/Display';
import ButtonsContainer from './Components/ButtonsContainer';

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
     <ButtonsContainer />
      </div>
    
  );
}

export default App;
