import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContactEmail } from '../features/formDataSlice'
import { Helmet } from 'react-helmet'
import { setActivePage } from '../features/formStateSlice'

const ContactDetails = () => {

  const dispatch = useDispatch();
  const { contactEmail } = useSelector((state: any) => state.formData)

  useEffect(() => {
    dispatch(setActivePage(3))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  return (
    <div className='formPage'>
      <Helmet>
        <title>Coterie - Contact Details</title>
      </Helmet>
      <h1>Contact Details</h1>

      <p><b>Email</b></p>
      <input 
        placeholder="jane.doe@gmail.com"
        type="email"
        value={contactEmail || ''}
        onChange={(e) => dispatch(setContactEmail(e.target.value))}
        className='formInput'
      />

    </div>
  )
}

export default ContactDetails