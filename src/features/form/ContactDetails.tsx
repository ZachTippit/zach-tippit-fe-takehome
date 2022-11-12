import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../formDataReducer'
import { Helmet } from 'react-helmet'
import styles from './QuoteForm.module.css'

const ContactDetails = () => {

  const dispatch = useDispatch();
  const { email } = useSelector((state: any) => state.formData)

  return (
    <div className={styles.formPage}>
      <Helmet>
        <title>Coterie - Contact Details</title>
      </Helmet>
      <h1>Contact Details</h1>

      <p><b>Email</b></p>
      <input 
        placeholder="jane.doe@gmail.com"
        value={email || ''}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        className={styles.textInput}
      />

    </div>
  )
}

export default ContactDetails