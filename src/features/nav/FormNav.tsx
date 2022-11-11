import React from 'react'
import BreadcrumbsMenu from './BreadcrumbsMenu';
import styles from './FormNav.module.css';
import NavLogo from './NavLogo';
import OfficialText from './OfficialText';

const FormNav = () => {
  return (
    <div id={styles.formnav}>
        <NavLogo />
        <BreadcrumbsMenu />
        <OfficialText />
    </div>
  )
}

export default FormNav