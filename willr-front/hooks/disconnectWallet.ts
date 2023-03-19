import {
  setPrivKey,
  setPubKey,
  setAddress,
  setIsConnected,
  setUserContract,
} from "../store/walletSlice";

/**
 * Disconnects the user from a wallet extension.
 * @returns A boolean indicating whether the user is disconnected.
 */
export async function disconnectWallet(dispatch: any): Promise<boolean> {
  try {
    console.log("disconect");
    // Remove a specific item from the local storage
    localStorage.removeItem("icon-wallet");
    // Update the redux state to reflect the disconnection
    dispatch(setPrivKey(""));
    dispatch(setPubKey(""));
    dispatch(setAddress(""));
    dispatch(setIsConnected(false));
    dispatch(setUserContract(""));

    // Return true to indicate successful disconnection
    return true;
  } catch (error) {
    // If an error occurs, the user can still be connected
    return false;
  }
}
