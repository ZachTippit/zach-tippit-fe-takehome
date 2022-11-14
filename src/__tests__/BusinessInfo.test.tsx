import React from 'react'
import BusinessInfo from '../pages/BusinessInfo'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testUtils'
import { setBusinessName, setEmployeeCount, setZipCode } from '../features/formDataSlice'
import { setupStore } from '../app/store'
import { MAX_HUMAN_POPULATION } from '../lib/CONSTANTS'

describe('Business Info form tests',() => {
    it('Business Info renders correctly', () => {
        renderWithProviders(<BusinessInfo />)
        expect(screen.queryByText('Business Information')).toBeInTheDocument()
    }),
    it('Business name updates state', () => {
        const store = setupStore()
        store.dispatch(setBusinessName('Test Business'))
        const storeSlice = store.getState()
        const { businessName } = storeSlice.formData;
        expect(businessName).toBe('Test Business')
    }),
    it('Employee count updates state', () => {
        const store = setupStore()
        store.dispatch(setEmployeeCount(42))
        const storeSlice = store.getState()
        const { employeeCount } = storeSlice.formData;
        expect(employeeCount).toBe(42)
    }),
    it('Employee count is less than the human population of the Earth', () => {
        const store = setupStore()
        store.dispatch(setEmployeeCount(999999999999))
        const storeSlice = store.getState()
        const { employeeCount } = storeSlice.formData;
        expect(employeeCount).toBe(MAX_HUMAN_POPULATION)
    }),
    it('Zip code updates state', () => {
        const store = setupStore()
        store.dispatch(setZipCode('32779'))
        const storeSlice = store.getState()
        const { zipCode } = storeSlice.formData;
        expect(zipCode).toBe('32779')
    }),
    it('Zip code is limited to 5 digits', () => {
        const store = setupStore()
        store.dispatch(setZipCode('32779'))
        const storeSlice = store.getState()
        const { zipCode } = storeSlice.formData;
        expect(zipCode.length).toBe(5)
    })
})

