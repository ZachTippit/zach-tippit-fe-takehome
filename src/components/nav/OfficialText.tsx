import React from 'react'
import styles from './FormNav.module.css'

const OfficialText = () => {
  return (
    <div id={styles.legalText}>
        <a href='https://coterieinsurance.com/privacy-policy/' target='_blank' rel="noopener noreferrer">Privacy Policy</a>
        <br />
        <a href='https://coterieinsurance.com/terms-conditions/' target='_blank' rel="noopener noreferrer">Terms & Conditions</a>
        <p>© 2022 Coterie Applications Inc.<br />All rights reserved.</p>
    </div>
  )
}

export default OfficialText