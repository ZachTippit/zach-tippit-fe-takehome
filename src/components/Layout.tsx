import React from 'react'
import Footer from '../features/footer/Footer'
import QuoteForm from '../features/form/QuoteForm'
import FormNav from '../features/nav/FormNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div id='app-container'>
        <FormNav />
        <Outlet />
    </div>
  )
}

export default Layout