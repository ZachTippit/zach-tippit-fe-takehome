import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBusinessEarnings, setPersonalEarnings } from '../features/formDataSlice'
import { Helmet } from 'react-helmet'
import { setActivePage } from '../features/formStateSlice'

const FinanceBasics = () => {

  const dispatch = useDispatch();
  const { businessEarnings, personalEarnings } = useSelector((state: any) => state.formData)

  useEffect(() => {
    dispatch(setActivePage(2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='formPage'>
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
        className='formInput'
      >
        <option disabled value=''style={{fontWeight: '600', color: '#666'}}>Select an Option</option>
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
        className='formInput'
      >
        <option disabled value='' style={{fontWeight: '600', color: '#666'}}>Select an Option</option>
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