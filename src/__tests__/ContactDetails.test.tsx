import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testUtils'
import { setBusinessEarnings, setContactEmail, setPersonalEarnings } from '../features/formDataSlice'
import { setupStore } from '../app/store'
import ContactDetails from '../pages/ContactDetails'

describe('Contact Details form tests',() => {
    it('Contact Details renders correctly', () => {
        renderWithProviders(<ContactDetails />)
        expect(screen.queryByText('Contact Details')).toBeInTheDocument()
    }),
    it('Email updates state', () => {
        const store = setupStore()
        store.dispatch(setContactEmail('test@gmail.com'))
        const storeSlice = store.getState()
        const { contactEmail } = storeSlice.formData;
        expect(contactEmail).toBe('test@gmail.com')
    })
})

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
 

