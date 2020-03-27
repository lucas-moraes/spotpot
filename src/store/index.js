import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import favorite from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, favorite);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
