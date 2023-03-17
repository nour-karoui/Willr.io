import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  account: string | null;
  isConnected: boolean;
}

const initialState: WalletState = {
  account: null,
  isConnected: false,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string | null>) => {
      state.account = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
  },
});

export const { setAccount, setIsConnected } = walletSlice.actions;

export default walletSlice.reducer;
