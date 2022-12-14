import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { convertToFullName } from '../utils/textInputHandlers'
import { setActivePage } from '../features/formStateSlice'

type PolicyCardProps = {
  policyName: string
}

const PolicyCard: React.FunctionComponent<PolicyCardProps> = ({policyName}) => {
  return (
    <div className='policyCard'>
      <h3>{convertToFullName(policyName)}</h3>
      <p>This is a text description of the policy.</p>
      <a href='https://www.zachtippit.com' target='_blank' rel="noopener noreferrer">Learn More</a>
      <input type='checkbox' />
    </div>
  )
}

const Policies = () => {

  const dispatch = useDispatch();
  const { availablePolicyTypes, status } = useSelector((state: any) => state.formState)
  
  useEffect(() => {
    dispatch(setActivePage(4))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const displayPolicies = () => {
    console.log(status)
    switch(status){
      case 'failed':
        return <p>We could not retrieve policies at this time. We apologize for the inconvenience. Please try again later.</p>
      case 'succeeded':
        return availablePolicyTypes.map((policy:string) => (<PolicyCard policyName={policy} />))
      default:
        return <p>Loading Policies...</p>
    }
  }

  return (
    <div>
      <Helmet>
        <title>Coterie - Policies</title>
      </Helmet>
      { displayPolicies() }
    </div>
  )
}

export default Policies