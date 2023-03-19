import {
  setPrivKey,
  setPubKey,
  setAddress,
  setIsConnected,
} from "../store/walletSlice";

/**
 * Function that checks if the user is connected to a wallet extension.
 * @param isConnected The current connection status from the Redux store.
 * @param account The current account from the Redux store.
 * @returns A promise that resolves to a boolean value indicating if the user is connected to a wallet extension and has an account.
 */
export async function checkWalletConnection(dispatch: any): Promise<boolean> {
  // Define a function to check the wallet extension
  const checkConnection = async () => {
    try {
      // Retrieve the object from local storage
      const walletString = localStorage.getItem("icon-wallet");
      if (walletString) {
        // Convert the string back to an object using JSON.parse
        const wallet = JSON.parse(walletString);

        // Update the Redux store with the account and connection status
        dispatch(setPrivKey(wallet.privKey));
        dispatch(setPubKey(wallet.pubKey));
        dispatch(setAddress(wallet.address));
        dispatch(setIsConnected(walletString !== null));
        // Return the connection status
        return true;
      } else {
        // If an error occurs, the user is not connected and does not have an account
        dispatch(setPrivKey(""));
        dispatch(setPubKey(""));
        dispatch(setAddress(""));
        dispatch(setIsConnected(false));
        return false;
      }
    } catch (error) {
      // If an error occurs, the user is not connected and does not have an account
      dispatch(setPrivKey(""));
      dispatch(setPubKey(""));
      dispatch(setAddress(""));
      dispatch(setIsConnected(false));
      return false;
    }
  };

  // Return a promise that resolves to a boolean value indicating if the user is connected and has an account
  return Promise.resolve(checkConnection());
}
