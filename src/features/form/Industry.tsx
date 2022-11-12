import React, { useEffect } from 'react'
import styles from './QuoteForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setOccupation } from '../formDataReducer';
import { Helmet } from 'react-helmet'

const Industry = () => {

  const dispatch = useDispatch();
  const { occupation } = useSelector((state: any) => state.formData)

  return (
    <div className={styles.formPage}>
      <Helmet>
        <title>Coterie - Industry</title>
      </Helmet>
      <h1>Industry</h1>
      <p><b>
          What type of business are you in?
        </b><br/>
          Select the option that best describes your business
      </p>
      <input 
        placeholder="Family dentists' offices"
        value={occupation || ''}
        onChange={(e) => dispatch(setOccupation(e.target.value))}
        className={styles.textInput}  
      />
    </div>
  )
}

export default Industry