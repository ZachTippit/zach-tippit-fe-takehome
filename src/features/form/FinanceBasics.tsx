import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBusinessEarnings, setPersonalEarnings } from '../formDataReducer'
import styles from './QuoteForm.module.css'
import { Helmet } from 'react-helmet'

const FinanceBasics = () => {

  const dispatch = useDispatch();
  const { businessEarnings, personalEarnings } = useSelector((state: any) => state.formData)

  return (
    <div className={styles.formPage}>
      <Helmet>
        <title>Coterie - Finance Basics</title>
      </Helmet>
      <h1>Finance Basics</h1>

      <p><b>Annually, my business earns (before taxes)</b></p>
      <input 
        placeholder="e.g., $500,000"
        value={businessEarnings || ''}
        onChange={(e) => dispatch(setBusinessEarnings(e.target.value))}
        className={styles.textInput}
      />

      <p><b>Annually, I pay myself and my employees a total of</b></p>
      <input
        placeholder="e.g., $500,000"
        value={personalEarnings || ''}
        onChange={(e) => dispatch(setPersonalEarnings(e.target.value))}
        className={styles.textInput}  
      />
    </div>
  )
}

export default FinanceBasics