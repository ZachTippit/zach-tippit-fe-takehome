import React from 'react'
import styles from './FormNav.module.css'

const OfficialTextMobile = () => {
  return (
    <div id={styles.legalText}>
        <a href='https://coterieinsurance.com/privacy-policy/' target='_blank' rel="noopener noreferrer" style={{paddingRight: '16px'}}>Privacy Policy</a>
        <a href='https://coterieinsurance.com/terms-conditions/' target='_blank' rel="noopener noreferrer">Terms & Conditions</a>
        <p style={{textAlign: 'center'}}>© 2022 Coterie Applications Inc.<br />All rights reserved.</p>
    </div>
  )
}

export default OfficialTextMobile