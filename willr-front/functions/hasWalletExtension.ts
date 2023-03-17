/**
 * Checks if the user has a wallet extension installed in their browser.
 * @returns A boolean value indicating whether a wallet extension is installed.
 */
export function hasWalletExtension(): boolean {
  // Check if the `window` object is defined and if it has an `ethereum` property
  // This indicates that a wallet extension is installed in the user's browser
  return typeof window !== 'undefined' && window.ethereum !== undefined;
}