// import { ethers } from "ethers";

const CONTRACT_FACTORY_ADDRESS = "<INSERT_CONTRACT_FACTORY_ADDRESS_HERE>";
const CONTRACT_ABI = [
  // <INSERT_CONTRACT_ABI_HERE>
];

/**
 * Check if the user has a contract in their wallet.
 * @param userAddress The user's Ethereum address.
 * @returns The contract address if found, otherwise null.
 */
export async function checkUserHasContract(userAddress: string): Promise<boolean | null> {
  if (typeof window === "undefined" || !window.ethereum) {
    // Wallet not installed or not running
    return null;
  }

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const contractFactory = new ethers.Contract(CONTRACT_FACTORY_ADDRESS, CONTRACT_ABI, provider);

  try {
    // const contractAddress = await contractFactory.getUserContract(userAddress);
    if (true) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Checks if the user has a wallet extension installed in their browser.
 * @returns A boolean value indicating whether a wallet extension is installed.
 */
export function hasWalletExtension(): boolean {
  // Check if the `window` object is defined and if it has an `ethereum` property
  // This indicates that a wallet extension is installed in the user's browser
  return typeof window !== 'undefined' && window.ethereum !== undefined;
}

/**
 * Checks if the user is connected to a wallet extension.
 * @returns An object with the user's account (if connected) and their connection status.
 */
export async function checkWalletConnection(): Promise<{ account: any, isConnected: boolean }> {
  // Check if the `window` object is defined and if it has an `ethereum` property
  if (hasWalletExtension()) {
    try {
      // Request the accounts from the wallet extension
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      // If the accounts array is not empty, the user is connected to the wallet extension
      const isConnected = accounts.length > 0;

      // Return the first account in the array (if there is one) and the connection status
      return { account: accounts[0], isConnected };
    } catch (error) {
      // If an error occurs while trying to get the accounts, the user is not connected
      return { account: null, isConnected: false };
    }
  } else {
    // If the `window` object or the `ethereum` property are undefined, the user is not connected
    return { account: null, isConnected: false };
  }
}

/**
 * Connects the user to a wallet extension.
 * @returns An object containing the user's account (if they are connected) and a boolean indicating whether they are connected.
 */
export async function connectWallet(): Promise<any> {
  // Check if the `window` object is defined and if it has an `ethereum` property
  if (hasWalletExtension()) {
    try {
      // Request the user's permission to connect to the wallet extension
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Return the first account in the array (if there is one) and the connection status
      return accounts[0];
    } catch (error) {
      // If the user does not grant permission to connect, or an error occurs, they are not connected
      return null;
    }
  } else {
    // If the `window` object or the `ethereum` property are undefined, the user is not connected
    return null;
  }
}

/**
 * Disconnects the user from a wallet extension.
 * @returns A boolean indicating whether the user is disconnected.
 */
export async function disconnectWallet(): Promise<boolean> {
  // Check if the `window` object is defined and if it has an `ethereum` property
  if (hasWalletExtension()) {
    try {
      // Request to disconnect from the wallet extension
      await window.ethereum.disconnect();

      // Check if the user is still connected
      const { isConnected } = await checkWalletConnection();

      // If the user is no longer connected, return true
      if (!isConnected) {
        return true;
      }
    } catch (error) {
      // If an error occurs, the user is still connected
      return false;
    }
  }

  // If the `window` object or the `ethereum` property are undefined, there`s user connected, return true
  return true;
}