import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './slices'

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home', 'payment'] // Add reducer names you want to persist here
}

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, reducer)

// mount it on the Store
const store = configureStore({
  reducer: persistedReducer
})

// Create a persistor
const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor } // Export persistor
