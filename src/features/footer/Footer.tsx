import React, { useEffect } from 'react'
import styles from './Footer.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, setAvailablePolicyTypes } from '../formStateSlice';
import { createAPIObject, fetchCoterieAPI } from '../../api/coterieAPIHandler';

const Footer = () => {

  const { pages, activePage, availablePolicyTypes } = useSelector((state: any) => state.formState)
  const formData = useSelector((state: any) => state.formData)

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const prevPage = () => {
    if(activePage > 0){
      navigate(pages[activePage - 1])
      dispatch(setActivePage(activePage - 1))
    }
  }

  const nextPage = () => {
    if(canUserProceed()){
      navigate(`/${pages[activePage + 1]}`)
      dispatch(setActivePage(activePage + 1))
    }
  }

  const canUserProceed = (): boolean => {
    const activePageLessThanMaxLength = activePage < (pages.length - 1)
    if(activePageLessThanMaxLength){
      switch(location.pathname){
      case '/industry':
        if(typeof formData.industryId !== 'undefined'){
          return true
        } else {
          break
        }
      case '/business_information':
        if(typeof formData.businessName !== 'undefined' && typeof formData.employeeCount !== 'undefined' && typeof formData.zipCode !== 'undefined'){
          return true
        } else {
          break
        }
      case '/finance_basics':
        if(typeof formData.businessEarnings !== 'undefined' && typeof formData.personalEarnings !== 'undefined'){
          return true
        } else {
          break
        }
      case '/contact_details':
        if(typeof formData.contactEmail !== 'undefined'){
          return true
        } else {
          break
        }
      default:
        break;
      }
    }
    return false;
  }

  const submitForm = async () => {
    const object = createAPIObject(formData)
    const response = await fetchCoterieAPI(object)
    console.log(response)
    if(typeof response.availablePolicyTypes !== 'undefined'){
      dispatch(setAvailablePolicyTypes(response.availablePolicyTypes))
    }
  }

  useEffect(() => {
    console.log(availablePolicyTypes)
  }, [availablePolicyTypes])

  return (
    <div id={styles.footer}>
      <div id={styles.buttonContainer}>
        <button 
          className={(activePage > 0) ? styles.backBtn : styles.inactiveBtn} 
          onClick={() => prevPage()}
        >
          Back
        </button>
        {activePage === 3 ? 
          <button 
            className={canUserProceed() ? styles.nextBtn : styles.inactiveBtn} 
            onClick={() => submitForm()}
          >
            Submit
          </button>
        :
          <button 
            className={canUserProceed() ? styles.nextBtn : styles.inactiveBtn} 
            onClick={() => nextPage()}
          >
            Next
          </button>
        }
      </div>
      <a id={styles.saveForLaterText}>Save for Later</a>
    </div>
  )
}

export default Footer