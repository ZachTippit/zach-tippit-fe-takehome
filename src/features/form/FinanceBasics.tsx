import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBusinessEarnings, setPersonalEarnings } from '../formDataSlice'
import styles from './QuoteForm.module.css'
import { Helmet } from 'react-helmet'
import { setActivePage } from '../formStateSlice'

const FinanceBasics = () => {

  const dispatch = useDispatch();
  const { businessEarnings, personalEarnings } = useSelector((state: any) => state.formData)

  useEffect(() => {
    dispatch(setActivePage(2))
  }, [])

  return (
    <div className={styles.formPage}>
      <Helmet>
        <title>Coterie - Finance Basics</title>
      </Helmet>
      <h1>Finance Basics</h1>

      <p><b>Annually, my business earns (before taxes)</b></p>
      <select 
        name="annualBizIncome" 
        id="annualBizIncome" 
        value={businessEarnings || ''}
        onChange={(e) => dispatch(setBusinessEarnings(e.target.value))}
        className={styles.incomeDropdown}
      >
        <option disabled style={{fontWeight: '600', color: '#666'}}>Select an Option</option>
        <option value="50000">$50,000</option>
        <option value="75000">$75,000</option>
        <option value="100000">$100,000</option>
        <option value="150000">$150,000</option>
        <option value="200000">$200,000</option>
      </select>

      <p><b>Annually, I pay myself and my employees a total of</b></p>
      <select 
        name="annualBizIncome" 
        id="annualBizIncome" 
        value={personalEarnings || ''}
        onChange={(e) => dispatch(setPersonalEarnings(e.target.value))}
        className={styles.incomeDropdown}
      >
        <option disabled style={{fontWeight: '600', color: '#666'}}>Select an Option</option>
        <option value="50000">$50,000</option>
        <option value="75000">$75,000</option>
        <option value="100000">$100,000</option>
        <option value="150000">$150,000</option>
        <option value="200000">$200,000</option>
      </select>
    </div>
  )
}

export default FinanceBasics