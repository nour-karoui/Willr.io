import { RootState } from '../store/store';
import { setAccount, setIsConnected } from '../store/walletSlice';
import { hasWalletExtension } from './hasWalletExtension';

import IconService from "icon-sdk-js";

/**
 * Check if the user has a contract in their wallet.
 * @param userAddress The user's Ethereum address.
 * @returns 
 */
export async function checkUserHasContract(isConnected: boolean, account: string | null, dispatch: any): Promise<boolean> {

  // Return a promise that resolves to a boolean value indicating if the user is connected and has an account
  return Promise.resolve(isConnected && account !== null);
};
