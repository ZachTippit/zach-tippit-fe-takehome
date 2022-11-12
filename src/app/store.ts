import { configureStore } from '@reduxjs/toolkit'
import { formData, formState } from './initialState'
import formStateReducer from '../features/formStateSlice'
import formDataReducer from '../features/formDataReducer'

export const initialState = {
    formData,
    formState
}

export const store = configureStore({
    reducer: {
        formState: formStateReducer,
        formData: formDataReducer
    },
})

export type AppDispatch = typeof store.dispatch;