import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "../features/auth/authSlice";
import { encryptTransform } from "redux-persist-transform-encrypt";
import plantsSlice from "../features/management/plants/plantsSlice";
import shiftsSlice from "../features/management/shifts/shiftsSlice";
import usersSlice from "../features/users/usersSlice";
import equipmentSlice from "../features/management/equipment/equipmentSlice";
import sensorsSlice from "../features/management/sensors/sensorsSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  //auth: authReducer,
  auth: authSlice,
  plants: plantsSlice,
  shifts: shiftsSlice,
  users: usersSlice,
  equipments: equipmentSlice,
  sensors: sensorsSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }).concat(apiSlice.middleware),
  devTools: true,
});
