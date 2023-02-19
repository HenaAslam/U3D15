import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectReducer from "../reducer/selectReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

import songReducer from "../reducer/songReducer";
import favReducer from "../reducer/favReducer";

const persistConfig = {
  storage: localStorage,
  key: "root",
};
const combinedReducer = combineReducers({
  songDetails: songReducer,
  select: selectReducer,
  fav: favReducer,
});
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistedStore = persistStore(store);

export { persistedStore, store };

// transforms: [
//     encryptTransform({
//       secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
//     }),
//   ]

//

// middleware: (getDefaultMiddleware) => {
//   return getDefaultMiddleware({
//     serializableCheck: false,

//   })
// },
