import React, { useEffect, useState } from 'react'
import styles from './QuoteForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchingOccupation, setOccupation } from '../formDataSlice';
import { capitalizeFirstLetter } from '../../utils/textInputHandlers';
import { Helmet } from 'react-helmet'
import { setActivePage } from '../formStateSlice';

const jobList = [
  {
    name: 'plumber',
    industryId: 10537
  },
  {
    name: 'software developer',
    industryId: 10391
  },
  {
    name: 'lawyer',
    industryId: 10415
  },
  {
    name: 'handyman',
    industryId: 10109
  }
]

const Industry = () => {

  const dispatch = useDispatch();
  const { searchingOccupation, occupation } = useSelector((state: any) => state.formData)
  const [ filteredArray, setFilteredArray ] = useState<any[]>([{name: '', industryId: ''}])

  const selectIndustry = (occ: string) => {
    let jobArray: any[] = []
    jobList.map(job => {
      if(job.name.includes(occ)){
        jobArray.push(job)
      }
    })

    setFilteredArray(jobArray)
  }

  useEffect(() => {
    selectIndustry(occupation)
  }, [occupation])

  useEffect(() => {
    dispatch(setActivePage(0))
  }, [])

  return (
    <div className={styles.formPage}>
      <Helmet>
        <title>Coterie - Industry</title>
      </Helmet>
      <h1>Industry</h1>
      <p><b>
          What type of business are you in?
        </b><br/>
          Select the option that best describes your business
      </p>
      <input 
        placeholder="Family dentists' offices"
        value={occupation || ''}
        onChange={(e) => dispatch(setSearchingOccupation(e.target.value.toLowerCase()))}
        className={styles.textInput}  
      />
      <div>
        <p><b>Did you mean...</b></p>
        {filteredArray.map(job => (
          <button 
            key={job.name} 
            className={styles.occupationButton}
            onClick={() => dispatch(setOccupation(job))}
          >
            {capitalizeFirstLetter(job.name)}
          </button>
        ))

        }
      </div>
    </div>
  )
}

export default Industry