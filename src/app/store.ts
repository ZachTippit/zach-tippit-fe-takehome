import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import formStateReducer from '../features/formStateSlice'
import formDataReducer from '../features/formDataSlice'

const rootReducer = combineReducers({
    formState: formStateReducer,
    formData: formDataReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch;