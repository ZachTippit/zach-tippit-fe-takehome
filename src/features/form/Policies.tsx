import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage } from '../formStateSlice'

const Policies = () => {

  const dispatch = useDispatch();
  const { availablePolicyTypes } = useSelector((state: any) => state.formState)
  
  useEffect(() => {
    dispatch(setActivePage(4))
  }, [])

  return (
    <div>
      <Helmet>
        <title>Coterie - Policies</title>
      </Helmet>

      {availablePolicyTypes.map((policy: string) => (
        <p>{policy}</p>
      ))}  
    </div>
  )
}

export default Policies