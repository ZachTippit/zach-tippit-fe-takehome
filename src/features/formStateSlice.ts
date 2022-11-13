import { createSlice } from '@reduxjs/toolkit'
import { formState } from '../app/initialState'

export const formStateSlice = createSlice({
    name: 'formState',
    initialState: formState,
    reducers: {
        setActivePage: (formState, action) => {
            formState.activePage = action.payload
            if(action.payload > formState.maxActivePage){
                formState.maxActivePage = action.payload
            }
        },
        setAvailablePolicyTypes: (formState, action) => {
            formState.availablePolicyTypes = action.payload
        }
    }
})

export const {setActivePage, setAvailablePolicyTypes} = formStateSlice.actions;

export default formStateSlice.reducer;