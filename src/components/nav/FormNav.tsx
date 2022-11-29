import React, { useState } from 'react'
import BreadcrumbsMenu from './BreadcrumbsMenu'
import NavLogo from './NavLogo'
import OfficialText from './OfficialText'
import { default as CoterieLogo } from '../../lib/img/coterie-logo.png'
import { default as Chevron } from '../../lib/img/chevron.png'
import { useSelector } from 'react-redux'
import { titleCase } from '../../utils/textInputHandlers'
import { PAGES } from '../../lib/CONSTANTS'

const FormNavDesktop = () => {
  return (
    <div id='formNavDesktop'>
        <NavLogo />
        <BreadcrumbsMenu />
        <OfficialText />
    </div>
  )
}

const FormNavMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const { activePage } = useSelector((state: any) => state.formState)

  return (
      <div id='formNavMobile'>
          <div className='accordionHeaderContainer' onClick={() => setIsActive(!isActive)}>
              <div className='accordionHeader'>
                  <img src={CoterieLogo} alt='Coterie Logo' className='logo'/>
                  <p>
                      <span className='activeStyle'>{titleCase(PAGES[activePage])}</span>
                      <img src={Chevron} alt='Dropdown toggle' className={isActive ? 'activeToggle' : 'inactiveToggle'} />
                  </p>
              </div>
          </div>
          {isActive && <div className='accordionContent'>
            <BreadcrumbsMenu />
            <div id='legalText'>
              <a href='https://coterieinsurance.com/privacy-policy/' target='_blank' rel="noopener noreferrer" style={{paddingRight: '16px'}}>Privacy Policy</a>
              <a href='https://coterieinsurance.com/terms-conditions/' target='_blank' rel="noopener noreferrer">Terms & Conditions</a>
              <p style={{textAlign: 'center'}}>© 2022 Coterie Applications Inc.<br />All rights reserved.</p>
            </div>
          </div>}
          <div id='progressBarContainer'>
              <div id='progress' style={{width: `${activePage/PAGES.length * 100}%`}}></div>
          </div>
      </div>
)
}

const FormNav = () => {
  return (
    <div id='formNavContainer'> 
      <FormNavDesktop />
      <FormNavMobile />
    </div>
  )
}

export default FormNav