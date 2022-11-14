import React from 'react'
import Industry from '../pages/Industry'
import { fireEvent, getByText, screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testUtils'
import { setSearchingOccupation } from '../features/formDataSlice'
import { setupStore } from '../app/store'
import reducer from '../features/formDataSlice'

describe('Industry form tests',() => {
    it('Component renders -- title visible on screen', () => {
        renderWithProviders(<Industry />)
        expect(screen.queryByText('Industry')).toBeInTheDocument()
    }),
    it('Did you mean... not visible on load', () => {
        renderWithProviders(<Industry />)
        expect(screen.queryByText('Did you mean...')).not.toBeInTheDocument()
    })
    it('Did you mean... visible on Occupation field entry', () => {
        const store = setupStore()
        store.dispatch(setSearchingOccupation('t'))
        renderWithProviders(<Industry />, {store})
        expect(screen.queryByText('Did you mean...')).toBeInTheDocument()
    }),
    it('Displays possible occupations on entry (Autocomplete check)', () => {
        const store = setupStore()
        store.dispatch(setSearchingOccupation('t'))
        renderWithProviders(<Industry />, {store})
        expect(screen.queryByText('Software developer')).toBeInTheDocument()
    }),
    it('Displays nothing on invalid entry (Autocomplete check)', () => {
        const store = setupStore()
        store.dispatch(setSearchingOccupation('x'))
        renderWithProviders(<Industry />, {store})
        expect(screen.queryByText('Software developer')).not.toBeInTheDocument()
    }),
    it('industryId shows up on occupation selection', () => {
        const store = setupStore()
        store.dispatch(setSearchingOccupation('t'))
        renderWithProviders(<Industry />, {store})
        const button = screen.queryByText('Software developer')
        fireEvent.click(button!)
        const storeSlice = store.getState()
        const { industryId } = storeSlice.formData;
        expect(industryId).toBe(10391)
    })
})

