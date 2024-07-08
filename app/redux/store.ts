import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Importe o storage correto

import { userReducer } from "./user/slice"; // Substitua pelo seu rootReducer

const persistConfig = {
  key: "root",
  storage: storage, // Configure o armazenamento corretamente
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
