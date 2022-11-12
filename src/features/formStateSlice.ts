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
        setMaxActivePage: (formState, action) => {
            if(action.payload > formState.maxActivePage){
               
            }
        }
    }
})

export const {setActivePage, setMaxActivePage} = formStateSlice.actions;

export default formStateSlice.reducer;