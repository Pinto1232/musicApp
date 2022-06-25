import { configureStore } from '@reduxjs/toolkit'
import { albumsApi } from '../services/AllApi'


export const store = configureStore({
    reducer: {
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumsApi.middleware)
})
