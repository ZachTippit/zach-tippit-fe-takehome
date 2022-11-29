import React from 'react'
import BusinessInfo from '../pages/BusinessInfo'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testUtils'
import { MAX_HUMAN_POPULATION } from '../lib/CONSTANTS'

const setup = (labelText: string) => {
    const utils = renderWithProviders(<BusinessInfo />)
    const input = utils.getByLabelText(labelText)
    return { input, ...utils }
}

describe('Business Info form tests',() => {
    it('Business Info renders correctly', () => {
        renderWithProviders(<BusinessInfo />)
        expect(screen.queryByText('Business Information')).toBeInTheDocument()
    }),
    // it('Business name updates state', () => {
    //     const store = setupStore()
    //     store.dispatch(setBusinessName('Test Business'))
    //     const storeSlice = store.getState()
    //     const { businessName } = storeSlice.formData;
    //     expect(businessName).toBe('Test Business')
    // }),
    it('Business Info Value Input', () => {
        const { input, store } = setup('Business name')
        fireEvent.change(input, {target: {value: 'Test Name'}})
        const storeSlice = store.getState()
        const { businessName } = storeSlice.formData;
        expect(businessName).toBe('Test Name')
    }),
    it('Employee count updates state', () => {
        const { input, store } = setup('How many employees does your business have?')
        fireEvent.change(input, {target: {value: 42}})
        const storeSlice = store.getState()
        const { employeeCount } = storeSlice.formData;
        expect(employeeCount).toBe('42')
    }),
    it('Employee count is less than the human population of the Earth', () => {
        const { input, store } = setup('How many employees does your business have?')
        fireEvent.change(input, {target: {value: 999999999999}})
        const storeSlice = store.getState()
        const { employeeCount } = storeSlice.formData;
        expect(employeeCount).toBe(MAX_HUMAN_POPULATION)
    }),
    it('Zip code updates state', () => {
        const { input, store } = setup('Business zip code')
        fireEvent.change(input, {target: {value: '32779'}})
        const storeSlice = store.getState()
        const { zipCode } = storeSlice.formData;
        expect(zipCode).toBe('32779')
    })
})
