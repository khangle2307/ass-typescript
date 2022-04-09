import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer , persistStore, PURGE, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from '../features/index';

const persistConfig = {
   key : "root",
   storage,
   whitelist : ['user','cart']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
   reducer : persistedReducer,
   middleware : (getDefaultMiddleware) => 
      getDefaultMiddleware({
         serializableCheck : {
            ignoreActions : [FLUSH , REHYDRATE , PAUSE, PERSIST ,PURGE]
         }
      })
});

export const persister = persistStore(store);

export default store;