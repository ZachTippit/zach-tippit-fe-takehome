import React from 'react'
import { NavLink } from 'react-router-dom'
import { setActivePage } from '../../features/formStateSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './FormNav.module.css'
import { titleCase } from '../../utils/textInputHandlers'
import { PAGES } from '../../lib/CONSTANTS'

const BreadcrumbsMenu = () => {
  
  const { maxActivePage } = useSelector((state: any) => state.formState)
  const dispatch = useDispatch();
  let activeStyle = {
    width: 'fit-content',
    color: '#4123ff',
    borderBottom: '1px dashed rgb(65, 35, 255)',
  }

  let inactiveStyle = {
    color: 'rgb(13, 13, 70)'
  }

  let unselectable = {
    cursor: 'auto',
    color: 'rgb(184, 184, 188)',
    userSelect: 'none !important',
    pointerEvents: 'none'
  }

  return (
    <div>
      { PAGES.map((page: string, index: number) => (
        <div key={page} className={styles.navLink}>
          <div className={styles.navStepperSegment}>
            <div className={(index <= maxActivePage) ? styles.activeNavDot : styles.inactiveNavDot} />
            {index<(PAGES.length - 1) && <div className={(index <= maxActivePage) ? styles.activeNavLine : styles.inactiveNavLine} />}
          </div>
          <div className={styles.navTextContainer}>
            <NavLink 
              to={page}
              className={styles.navText} 
              style={({isActive}) => (index <= maxActivePage) ? (isActive ? activeStyle : inactiveStyle) : unselectable }
              onClick={() => dispatch(setActivePage(index))}
            >
              {titleCase(page)}
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BreadcrumbsMenu