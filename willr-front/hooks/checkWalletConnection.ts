import { RootState } from '../store/store';
import { setAccount, setIsConnected } from '../store/walletSlice';
import { hasWalletExtension } from './hasWalletExtension';

/**
 * Function that checks if the user is connected to a wallet extension.
 * @param isConnected The current connection status from the Redux store.
 * @param account The current account from the Redux store.
 * @returns A promise that resolves to a boolean value indicating if the user is connected to a wallet extension and has an account.
 */
export async function checkWalletConnection(isConnected: boolean, account: string | null, dispatch: any): Promise<boolean> {

  // Define a function to check the wallet extension
  const checkConnection = async () => {
    if (hasWalletExtension()) {
      try {
        // Request the accounts from the wallet extension
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const hasAccount = accounts.length > 0;
        
        // Update the Redux store with the connection status and account
        dispatch(setIsConnected(hasAccount));
        dispatch(setAccount(accounts[0]));

        // Return the connection status
        return hasAccount;
      } catch (error) {
        // If an error occurs, the user is not connected and does not have an account
        dispatch(setIsConnected(false));
        dispatch(setAccount(null));
        return false;
      }
    } else {
      // If the user does not have a wallet extension, they are not connected and do not have an account
      dispatch(setIsConnected(false));
      dispatch(setAccount(null));
      return false;
    }
  };

  // Return a promise that resolves to a boolean value indicating if the user is connected and has an account
  return Promise.resolve(isConnected && account !== null && checkConnection());
};
