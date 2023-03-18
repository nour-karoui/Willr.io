import { setAccount, setIsConnected } from '../store/walletSlice';
import { hasWalletExtension } from './hasWalletExtension';

/**
 * Connects the user from a wallet extension.
 * @returns A boolean indicating whether the user is connected.
 */
export async function connectWallet(dispatch): Promise<boolean> {

  if (hasWalletExtension()) {
    try {
      // Request the user's permission to connect to the wallet extension
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      // If the accounts array is not empty, the user is connected to the wallet extension
      const isConnected = accounts.length > 0;

      // Update the Redux store with the account and connection status
      dispatch(setAccount(accounts[0]));
      dispatch(setIsConnected(isConnected));

      return isConnected;
    } catch (error) {
      // If the user does not grant permission to connect, or an error occurs, they are not connected
      dispatch(setAccount(null));
      dispatch(setIsConnected(false));
      
      return false;
    }
  } else {
    // If the `window` object is undefined, the user is not connected
    dispatch(setAccount(null));
    dispatch(setIsConnected(false));    
    return false;
  }
}
