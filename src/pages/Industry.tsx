import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchingOccupation, setOccupation } from '../features/formDataSlice';
import { capitalizeFirstLetter } from '../utils/textInputHandlers';
import { Helmet } from 'react-helmet'
import { setActivePage } from '../features/formStateSlice';
import { JOB_LIST } from '../lib/CONSTANTS';



const Industry = () => {

  const dispatch = useDispatch();
  const { occupation, industryId } = useSelector((state: any) => state.formData)
  const [ filteredArray, setFilteredArray ] = useState<any[]>([{name: '', industryId: ''}])

  const selectIndustry = (occ: string) => {
    let jobArray: any[] = []
    JOB_LIST.forEach(job => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='formPage'>
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
        className='formInput'  
      />
      <div>
        {(typeof occupation !== 'undefined' && typeof industryId === 'undefined') && <p><b>Did you mean...</b></p>}
        {filteredArray.map(job => (
          <button 
            key={job.name} 
            className='occupationButton'
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