import { hasWalletExtension } from './hasWalletExtension';
import { setAccount, setIsConnected, setHasContract } from '../store/walletSlice';

/**
 * Disconnects the user from a wallet extension.
 * @returns A boolean indicating whether the user is disconnected.
 */
export async function disconnectWallet(dispatch): Promise<boolean> {
    if (hasWalletExtension()) {
        try {
            // Request to disconnect from the wallet extension
            // TODO

            // Update the redux state to reflect the disconnection
            dispatch(setAccount(null));
            dispatch(setIsConnected(false));
            dispatch(setHasContract(false));

            // Return true to indicate successful disconnection
            return true;
        } catch (error) {
            // If an error occurs, the user can still be connected
            return false;
        }
    }
    // If the `window` object or the `ethereum` property are undefined, there's no user connected, return true
    dispatch(setAccount(null));
    dispatch(setIsConnected(false));
    dispatch(setHasContract(false));
    return true;
}
