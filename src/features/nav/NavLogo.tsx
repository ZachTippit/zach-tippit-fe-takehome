import React from 'react'
import {default as CoterieLogo} from '../../coterie-logo.png'
import styles from './FormNav.module.css'

const NavLogo = () => {
  return (
    <div id={styles.navLogo}>
      <img src={CoterieLogo} className={styles.logo} alt='Coterie Logo' />
    </div>
  )
}

export default NavLogo