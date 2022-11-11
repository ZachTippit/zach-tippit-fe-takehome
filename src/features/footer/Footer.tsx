import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div id={styles.footer}>
        <div id={styles.buttonContainer}>
            <button>Back</button>
            <button>Next</button>
        </div>
    </div>
  )
}

export default Footer