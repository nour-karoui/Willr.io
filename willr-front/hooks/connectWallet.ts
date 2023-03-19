import IconService from "icon-sdk-js";
import Wallet, { KeyStore } from "icon-sdk-js/build/Wallet";
import {
  setPrivKey,
  setPubKey,
  setAddress,
  setIsConnected,
} from "../store/walletSlice";

/**
 * Connects the user from a wallet extension.
 * @returns A boolean indicating whether the user is connected.
 */
export async function connectWallet(
  keystoreJson: KeyStore | string,
  password: string,
  dispatch: any
): Promise<boolean> {
  try {
    // Import existing wallet using keystore object

    const wallet: Wallet = IconService.IconWallet.loadKeystore(
      keystoreJson,
      password,
      true
    );
    if (wallet) {
      // Convert the object to a string using JSON.stringify
      const walletString = JSON.stringify({
        privKey: wallet.getPrivateKey(),
        pubKey: wallet.getPublicKey(),
        address: wallet.getAddress(),
      });

      // Save the stringified object to local storage using localStorage.setItem
      localStorage.setItem("icon-wallet", walletString);

      // Update the Redux store with the account and connection status
      dispatch(setPrivKey(wallet.getPrivateKey()));
      dispatch(setPubKey(wallet.getPublicKey()));
      dispatch(setAddress(wallet.getAddress()));
      dispatch(setIsConnected(true));
      // Return the connection status
      return true;
    } else {
      // TODO Alert, the user does not have an account or the password is wrong
      console.log("Alert Wallet not found or incorrect password");
      dispatch(setPrivKey(""));
      dispatch(setPubKey(""));
      dispatch(setAddress(""));
      dispatch(setIsConnected(false));
      return false;
    }
  } catch (error) {
    // If the user does not grant permission to connect, or an error occurs, they are not connected
    // TODO Erro Alert Wallet
    console.log("Erro trying to wallet loadKeystore");
    dispatch(setPrivKey(""));
    dispatch(setPubKey(""));
    dispatch(setAddress(""));
    dispatch(setIsConnected(false));
    return false;
  }
}
``;
