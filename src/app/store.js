import { configureStore } from "@reduxjs/toolkit";
import { persistReducer , persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from '../features/index';

const persistConfig = {
   key : "root",
   storage,
   whitelist : ['user','cart']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
   reducer : persistedReducer
})

export const persister = persistStore(store);

export default store;