import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  privKey: string;
  pubKey: string;
  address: string;
  isConnected: boolean;
  userContract: string;
}

const initialState: WalletState = {
  privKey: "",
  pubKey: "",
  address: "",
  isConnected: false,
  userContract: "",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setPrivKey: (state, action: PayloadAction<string>) => {
      state.privKey = action.payload;
    },
    setPubKey: (state, action: PayloadAction<string>) => {
      state.pubKey = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setUserContract: (state, action: PayloadAction<string>) => {
      state.userContract = action.payload;
    },
  },
});

export const {
  setPrivKey,
  setPubKey,
  setAddress,
  setIsConnected,
  setUserContract,
} = walletSlice.actions;

export default walletSlice.reducer;
