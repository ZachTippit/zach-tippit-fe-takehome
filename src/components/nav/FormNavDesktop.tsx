import React from 'react'
import BreadcrumbsMenu from './BreadcrumbsMenu'
import NavLogo from './NavLogo'
import OfficialText from './OfficialText'
import styles from './FormNav.module.css'

const FormNavDesktop = () => {
  return (
    <div id={styles.formNavDesktop}>
        <NavLogo />
        <BreadcrumbsMenu />
        <OfficialText />
    </div>
  )
}

export default FormNavDesktop