import React from 'react'
import {default as CoterieLogo} from '../../lib/img/coterie-logo.png'

const NavLogo = () => {
  return (
    <div id='navLogo'>
      <img src={CoterieLogo} className='logo' alt='Coterie Logo' />
    </div>
  )
}

export default NavLogo