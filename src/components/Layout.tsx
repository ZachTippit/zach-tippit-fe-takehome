import React from 'react'
import Footer from '../features/footer/Footer'
import QuoteForm from '../features/form/QuoteForm'
import FormNav from '../features/nav/FormNav'
import { Outlet } from 'react-router-dom'
import styles from '../features/form/QuoteForm.module.css'

const Layout = () => {
  return (
    <div id='app-container'>
        <FormNav />
        <div id={styles.form}>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout