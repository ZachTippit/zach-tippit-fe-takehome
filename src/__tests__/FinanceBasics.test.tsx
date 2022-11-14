import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testUtils'
import { setBusinessEarnings, setPersonalEarnings } from '../features/formDataSlice'
import { setupStore } from '../app/store'
import FinanceBasics from '../pages/FinanceBasics'

describe('Finance Basics form tests',() => {
    it('Finance Basics renders correctly', () => {
        renderWithProviders(<FinanceBasics />)
        expect(screen.queryByText('Finance Basics')).toBeInTheDocument()
    }),
    it('Business Earnings updates state', () => {
        const store = setupStore()
        store.dispatch(setBusinessEarnings(50000))
        const storeSlice = store.getState()
        const { businessEarnings } = storeSlice.formData;
        expect(businessEarnings).toBe(50000)
    }),
    it('Personal Earnings updates state', () => {
        const store = setupStore()
        store.dispatch(setPersonalEarnings(50000))
        const storeSlice = store.getState()
        const { personalEarnings } = storeSlice.formData;
        expect(personalEarnings).toBe(50000)
    })
})

// describe('Contact Details form tests', () => {
    //it('Only accepts email entry', () => {}),
    //it('Submit button shows up on successful email entry', () => {}),\
//})

//describe('API Calls', () => {
    //it('API Object Creator formats correctly', () => {}),
    //it('API Call works', () => {})
//})

//describe('Policies page tests', () => {
    //it('Renders policy objects on page')
//})

//describe('Footer tests', () => {
    //it('Shows next button after correct entry', () => {
    // Next button shows up on industryId
    //})
//})
 

