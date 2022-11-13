import { createSlice } from '@reduxjs/toolkit'
import { formData } from '../app/initialState'
import { capitalizeFirstLetter } from '../utils/textInputHandlers'

export const formDataSlice = createSlice({
    name: 'formData',
    initialState: formData,
    reducers: {
        setSearchingOccupation: (formData, action) => {
            formData.occupation = action.payload
            formData.industryId = undefined
        },
        setOccupation: (formData, action) => {
            formData.occupation = capitalizeFirstLetter(action.payload.name)
            formData.industryId = action.payload.industryId
        },
        setBusinessName: (formData, action) => {
            formData.businessName = action.payload
        },
        setEmployeeCount: (formData, action) => {
            if(action.payload <= 0){
                formData.employeeCount = 0
            } else {
                formData.employeeCount = action.payload
            }
        },
        setZipCode: (formData, action) => {
            if(action.payload >= 0){
                formData.zipCode = action.payload
            }
        },
        setBusinessEarnings: (formData, action) => {
            formData.businessEarnings = action.payload
        },
        setPersonalEarnings: (formData, action) => {
            formData.personalEarnings = action.payload
        },
        setContactEmail: (formData, action) => {
            formData.contactEmail = action.payload
        }
    }
})

export const {setSearchingOccupation, setOccupation, setBusinessName, setEmployeeCount, setZipCode, setBusinessEarnings, setPersonalEarnings, setContactEmail} = formDataSlice.actions;

export default formDataSlice.reducer;