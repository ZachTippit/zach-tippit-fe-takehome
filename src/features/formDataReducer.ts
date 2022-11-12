import { createSlice } from '@reduxjs/toolkit'
import { formData } from '../app/initialState'

export const formDataSlice = createSlice({
    name: 'formData',
    initialState: formData,
    reducers: {
        setOccupation: (formData, action) => {
            formData.occupation = action.payload
        },
        setBusinessName: (formData, action) => {
            formData.businessName = action.payload
        },
        setEmployeeCount: (formData, action) => {
            formData.employeeCount = action.payload
        },
        setZipCode: (formData, action) => {
            formData.zipCode = action.payload
        },
        setBusinessEarnings: (formData, action) => {
            formData.businessEarnings = action.payload
        },
        setPersonalEarnings: (formData, action) => {
            formData.personalEarnings = action.payload
        },
        setEmail: (formData, action) => {
            formData.email = action.payload
        }
    }
})

export const {setOccupation, setBusinessName, setEmployeeCount, setZipCode, setBusinessEarnings, setPersonalEarnings, setEmail} = formDataSlice.actions;

export default formDataSlice.reducer;