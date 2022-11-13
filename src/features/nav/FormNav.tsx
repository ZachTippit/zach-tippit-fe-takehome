import React, { useEffect } from 'react'
import styles from './FormNav.module.css';
import FormNavDesktop from './FormNavDesktop';
import FormNavMobile from './FormNavMobile';
import { useLocation } from 'react-router-dom';

const FormNav = () => {
  
  return (
    <div id={styles.formNavContainer}> 
      <FormNavDesktop />
      <FormNavMobile />
    </div>
  )
}

export default FormNav