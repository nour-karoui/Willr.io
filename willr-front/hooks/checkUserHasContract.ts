import { setUserContract } from "../store/walletSlice";

import IconService from "icon-sdk-js";

/**
 * Check if the user has a contract in their wallet.
 * @param userAddress The user's Ethereum address.
 * @returns
 */
export async function checkUserHasContract(
  checkUserAddress: string,
  dispatch: any
): Promise<boolean> {
  // Create an instance of IconService.
  const iconService = new IconService(
    new IconService.HttpProvider("https://lisbon.net.solidwallet.io/api/v3")
  );
  // Create an instance of CallBuilder class.
  const call = new IconService.IconBuilder.CallBuilder()
    .to("cx91f29280157d5ff4a08958c147bad870c08c649b")
    .method("getWill")
    .params({ userAddress: checkUserAddress })
    .build();
  // Execute the call
  const contractAddress = await iconService.call(call).execute();
  console.log("Check user has contract:", contractAddress);
  if (contractAddress) {
    dispatch(setUserContract(contractAddress));
    return true;
  } else {
    return false;
  }
}
