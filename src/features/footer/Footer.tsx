import React from 'react'
import styles from './Footer.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../formStateSlice';

const Footer = () => {

  const { pages, activePage } = useSelector((state: any) => state.formState)

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const prevPage = (e: any) => {
    if(activePage > 0){
      navigate(pages[activePage - 1])
      dispatch(setActivePage(activePage - 1))
    }
  }

  const nextPage = (e: any) => {
    if(activePage < (pages.length - 1)){
      navigate(`/${pages[activePage + 1]}`)
      dispatch(setActivePage(activePage + 1))
    }
  }

  return (
    <div id={styles.footer}>
      <div id={styles.buttonContainer}>
          <button 
            type='button'
            className={(activePage > 0) ? styles.backBtn : styles.inactiveBtn} 
            onClick={(e) => prevPage(e)}
          >
            Back
          </button>
          <a id={styles.saveForLaterText}>Save for Later</a>
          <button 
            type='button'
            className={(activePage < (pages.length - 1)) ? styles.nextBtn : styles.inactiveBtn} 
            onClick={(e) => nextPage(e)}
          >
            Next
          </button>
      </div>
    </div>
  )
}

export default Footer