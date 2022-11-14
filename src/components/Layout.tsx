import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../pages/QuoteForm.module.css'
import FormNav from './nav/FormNav'

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