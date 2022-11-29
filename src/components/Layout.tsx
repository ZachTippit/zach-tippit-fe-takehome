import React from 'react'
import { Outlet } from 'react-router-dom'
import FormNav from './nav/FormNav'

const Layout = () => {
  return (
    <div id='app-container'>
        <FormNav />
        <div id='form'>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout