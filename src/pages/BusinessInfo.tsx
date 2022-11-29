import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessName, setEmployeeCount, setZipCode } from '../features/formDataSlice';
import { Helmet } from 'react-helmet'
import { setActivePage } from '../features/formStateSlice';

const BusinessInfo = () => {

  const dispatch = useDispatch();
  const { businessName, employeeCount, zipCode } = useSelector((state: any) => state.formData)
  
  useEffect(() => {
    dispatch(setActivePage(1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkInput = (input: string) => {
    const onlyNums = RegExp(/^[0-9]+$/)
    if(onlyNums.test(input)){
      dispatch(setEmployeeCount(input))
    }
  }

  return (
  <div className='formPage'>
    <Helmet>
      <title>Coterie - Business Info</title>
    </Helmet>
    <h1>Business Information</h1>

    <label htmlFor='businessName' className='formLabel'>
      Business name
    </label>
    <input 
      id='businessName'
      className='formInput'
      placeholder="Enter your business name"
      value={businessName || ''}
      onChange={(e) => dispatch(setBusinessName(e.target.value))} 
    />

    <label htmlFor='employeeCount' className='formLabel'>
      How many employees does your business have?
    </label>
    <input
      id='employeeCount'
      className='formInput'
      type='number'
      placeholder="1"
      value={employeeCount || ''}
      onChange={(e) => checkInput(e.target.value)} 
    />

    <label htmlFor='zipCode' className='formLabel'>
      Business zip code
    </label>
    <input
      id='zipCode'
      type='text'
      placeholder="45242"
      value={zipCode || ''}
      pattern="[0-9]*"
      onChange={(e) => dispatch(setZipCode(e.target.value))}
      className='formInput'
    />
  </div>
  )
}

export default BusinessInfo