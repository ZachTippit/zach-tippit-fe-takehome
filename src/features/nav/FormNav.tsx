import React, { useEffect } from 'react'
import { Accordion } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import BreadcrumbsMenu from './BreadcrumbsMenu';
import styles from './FormNav.module.css';
import NavLogo from './NavLogo';
import OfficialText from './OfficialText';
import { default as CoterieLogo } from '../../coterie-logo.png'
import FormNavDesktop from './FormNavDesktop';
import FormNavMobile from './FormNavMobile';

const FormNav = () => {

  return (
    <div id={styles.formNavContainer}> 
      <FormNavDesktop />
      <FormNavMobile />
    </div>
  )
}

export default FormNav