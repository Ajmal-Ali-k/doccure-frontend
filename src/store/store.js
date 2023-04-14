import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { ClientSlice } from "./slice/userSlice";
import { AdminSlice } from "./slice/adminSlice";



const persistConfigClient = { key: "client", storage, version: 1 };   
const persistConfigAdmin = { key: "admin", storage, version: 1 };


const clientPersistedReducer = persistReducer(
    persistConfigClient,
    ClientSlice.reducer
);

const AdminPersisteReducer = persistReducer(
  persistConfigAdmin,
  AdminSlice.reducer
);

export const store = configureStore({
  reducer: {
    clientLogin: clientPersistedReducer,
    adminLogin: AdminPersisteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor= persistStore(store)