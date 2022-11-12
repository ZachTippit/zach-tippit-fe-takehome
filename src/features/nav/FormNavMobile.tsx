import React, { useState } from 'react'
import { default as CoterieLogo } from '../../coterie-logo.png'
import { default as Chevron } from '../../chevron.png'
import { useSelector } from 'react-redux'
import styles from './FormNav.module.css'
import { titleCase } from '../../utils/textParser'
import BreadcrumbsMenuMobile from './BreadcrumbsMenuMobile'
import OfficialTextMobile from './OfficialTextMobile'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const FormNavMobile = () => {

    const [isActive, setIsActive] = useState(false);
    const { pages, activePage } = useSelector((state: any) => state.formState)

    return (
        <div id={styles.formNavMobile}>
            <div className={styles.accordionHeaderContainer} onClick={() => setIsActive(!isActive)}>
                <div className={styles.accordionHeader}>
                    <img src={CoterieLogo} alt='Coterie Logo' className={styles.logo}/>
                    <p>
                        <span className={styles.activeStyle}>{titleCase(pages[activePage])}</span>
                        <img src={Chevron} alt='Dropdown toggle' className={isActive ? styles.activeToggle : styles.inactiveToggle} />
                    </p>
                </div>
            </div>
            {isActive && <div className={styles.accordionContent}>
                <BreadcrumbsMenuMobile />
                <OfficialTextMobile />
            </div>}
            <div id={styles.progressBarContainer}>
                <div id={styles.progress} style={{width: `${activePage/pages.length * 100}%`}}></div>
            </div>
        </div>
  )
}

export default FormNavMobile