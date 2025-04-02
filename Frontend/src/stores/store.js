
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectedItemReducer from "./selectedItem";
import companyReducer from "./informationData/companySlice";
import vesselReducer from "./informationData/vesselSlice";
import { persistReducer, persistStore } from "redux-persist";
import languageReducer from '../stores/language/languageSlice'; //translation
import videoReducer from "../stores/videodata/videoGallerySlice";
import storage from "redux-persist/lib/storage";
// Persist Config
const persistConfig = {
  key: "root",
  storage,
  
};

// Root Reducer with Persist
const rootReducer = combineReducers({
  selectedItem: persistReducer(persistConfig, selectedItemReducer),
  companies: companyReducer,
  vessels: vesselReducer,
  language:languageReducer,
  videos: videoReducer,
});

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,
});

// Persistor
export const persistor = persistStore(store);
