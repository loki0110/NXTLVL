import React from 'react';
import { Button } from 'reactstrap';
import styles from './ToggleButton.module.css';

const ToggleButton = ({ toggleMode, isDarkMode }) => {
  return (
    <Button onClick={toggleMode} className={styles.toggleButton}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ToggleButton;
