import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, fetchCoterieAPI } from '../features/formStateSlice';
import { AppDispatch } from '../app/store';
import { validateEmail } from '../utils/textInputHandlers';
import { PAGES } from '../lib/CONSTANTS';

const Footer = () => {

  const { activePage } = useSelector((state: any) => state.formState)
  const formData = useSelector((state: any) => state.formData)

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const prevPage = () => {
    if(activePage > 0){
      navigate(PAGES[activePage - 1])
      dispatch(setActivePage(activePage - 1))
    }
  }

  const nextPage = () => {
    if(canUserProceed()){
      navigate(`/${PAGES[activePage + 1]}`)
      dispatch(setActivePage(activePage + 1))
    }
  }

  const submitForm = async () => {
    dispatch(fetchCoterieAPI(formData))
    nextPage();
  }

  const canUserProceed = (): boolean => {
    const activePageLessThanMaxLength = activePage < (PAGES.length - 1)
    if(activePageLessThanMaxLength){
      switch(location.pathname){
      case '/industry':
        if(typeof formData.industryId !== 'undefined'){
          return true
        } else {
          break
        }
      case '/business_information':
        if(typeof formData.businessName !== 'undefined' && typeof formData.employeeCount !== 'undefined' && formData.zipCode.length === 5){
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
        if(validateEmail(formData.contactEmail)){
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

  return (
    <div id='footer'>
      <div id='buttonContainer'>
        <button 
          className={((activePage > 0) ? 'back' : 'inactive') + ' button'} 
          onClick={() => prevPage()}
        >
          Back
        </button>
        {activePage === 3 ? 
          <button 
            className={(canUserProceed() ? 'next' : 'inactive') + ' button'} 
            onClick={() => submitForm()}
          >
            Submit
          </button>
        :
          <button 
            className={(canUserProceed() ? 'next' : 'inactive') + ' button'} 
            onClick={() => nextPage()}
          >
            Next
          </button>
        }
      </div>
    </div>
  )
}

export default Footer