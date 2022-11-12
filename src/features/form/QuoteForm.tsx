import React, { useEffect } from 'react'
import BusinessInfo from './BusinessInfo'
import ContactDetails from './ContactDetails'
import FinanceBasics from './FinanceBasics'
import Industry from './Industry'
import styles from './QuoteForm.module.css'
import { useSelector } from 'react-redux'

const QuoteForm = () => {
  const { page } = useSelector((state: any) => state.formState)

  useEffect(() => {
    console.log(page[0])
  }, [])

  return (
    <div id={styles.form}>
      <Industry />
      <BusinessInfo /> 
      <FinanceBasics />
      <ContactDetails />
    </div>
  )
}

export default QuoteForm