import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { formState } from '../app/initialState'
import { createAPIObject } from '../api/coterieAPIHandler'

export const fetchCoterieAPI = createAsyncThunk('formState/fetchCoterieAPI', async (formData: any) => {
    const coterieApiBody = createAPIObject(formData)
    const response = await fetch(process.env.REACT_APP_COTERIE_API_URL as string, {
        method: 'POST',
        headers: {
            Authorization: `token ${process.env.REACT_APP_COTERIE_AUTH_TOKEN as string}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(coterieApiBody)
    })
    .then(response => response.json())
    .catch(error => console.error(error))
    return response;
})

export const formStateSlice = createSlice({
    name: 'formState',
    initialState: formState,
    reducers: {
        setActivePage: (formState, action) => {
            formState.activePage = action.payload
            if(action.payload > formState.maxActivePage){
                formState.maxActivePage = action.payload
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCoterieAPI.pending, (formState, action) => {
                formState.status = 'loading'
            })
            .addCase(fetchCoterieAPI.fulfilled, (formState, action) => {
                formState.status = 'succeeded'
                formState.availablePolicyTypes = action.payload.availablePolicyTypes
            })
            .addCase(fetchCoterieAPI.rejected, (formState, action) => {
                formState.status = 'failed'
            })
    }
})

export const {setActivePage} = formStateSlice.actions;

export default formStateSlice.reducer;