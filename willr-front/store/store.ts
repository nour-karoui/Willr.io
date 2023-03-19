import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
