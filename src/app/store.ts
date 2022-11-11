import { configureStore } from '@reduxjs/toolkit'
import { formData, formState } from './initialState'
// import gameConfigReducer from '../_features/gameConfig/gameConfigSlice'

export const initialState = {
    formData,
    formState
}

export const store = configureStore({
    reducer: {
        // gameConfig: gameConfigReducer,
        // gameState: gameStateReducer,
        // windowHandler: windowHandlerReducer,
    },
})

export type AppDispatch = typeof store.dispatch;