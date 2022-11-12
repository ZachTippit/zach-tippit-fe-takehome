import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessName, setEmployeeCount, setZipCode } from '../formDataReducer';
import styles from './QuoteForm.module.css'
import { Helmet } from 'react-helmet'

const BusinessInfo = () => {

  const dispatch = useDispatch();
  const { businessName, employeeCount, zipCode } = useSelector((state: any) => state.formData)

  return (
  <div className={styles.formPage}>
    <Helmet>
      <title>Coterie - Business Info</title>
    </Helmet>
    <h1>Business Information</h1>

    <p><b>Business name</b></p>
    <input 
      placeholder="Enter your business name"
      value={businessName || ''}
      onChange={(e) => dispatch(setBusinessName(e.target.value))} 
      className={styles.textInput} 
    />

    <p><b>How many employees does your business have?</b></p>
    <input
      placeholder="1" 
      value={employeeCount || ''}
      onChange={(e) => dispatch(setEmployeeCount(e.target.value))} 
      className={styles.textInput} 
    />

    <p><b>Business zip code</b></p>
    <input
      placeholder="45242"
      value={zipCode || ''}
      onChange={(e) => dispatch(setZipCode(e.target.value))}
      className={styles.textInput}  
    />

  </div>
  )
}

export default BusinessInfo