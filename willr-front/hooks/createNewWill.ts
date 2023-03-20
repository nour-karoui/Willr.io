import IconService from "icon-sdk-js";
import { setUserContract } from "../store/walletSlice";

async function readByteArrayFromFile(fileUrl: string): Promise<Uint8Array> {
  const response = await fetch(fileUrl);
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
}

/**
 * Creates a new will on the ICON blockchain using the user's address, email, and private key
 * @param userAddress The user's ICON wallet address
 * @param userEmail The user's email address
 * @param userPrivateKey The user's private key
 * @param dispatch The Redux dispatch function
 * @returns A boolean indicating if the transaction was successful
 */

export async function createNewWill(
  userAddress: string,
  userEmail: string,
  userPrivateKey: string,
  dispatch: any
): Promise<boolean> {
  // Create an instance of IconService.
  const iconService = new IconService(
    new IconService.HttpProvider("https://lisbon.net.solidwallet.io/api/v3")
  );

  const byteArray = await readByteArrayFromFile("../utils/file.json");
  if (byteArray) {
    console.log(byteArray);

    // Create a new transaction builder for the 'createNewWill' method
    const transactionBuilder =
      new IconService.IconBuilder.CallTransactionBuilder()
        .nid(IconService.IconConverter.toBigNumber("1")) // Set the network ID
        .nonce(IconService.IconConverter.toBigNumber("1")) // Set the transaction nonce
        .from(userAddress) // Set the sender's address
        .to("cx91f29280157d5ff4a08958c147bad870c08c649b") // Set the contract address
        .stepLimit(IconService.IconConverter.toBigNumber("2000000")) // Set the maximum step limit
        .version(IconService.IconConverter.toBigNumber("3")) // Set the ICON network version
        .timestamp(new Date().getTime() * 1000) // Set the transaction timestamp
        .method("createNewWill") // Set the method name
        .params({
          email: userEmail, // Set the email parameter
          jarBytes: byteArray, // Set the jarBytes parameter by calling the fetchJarBytes() function
        })
        .build(); // Build the transaction object

    // Sign the transaction with the user's private key
    const signedTransaction = new IconService.SignedTransaction(
      transactionBuilder,
      IconService.IconWallet.loadPrivateKey(userPrivateKey)
    );

    // Send the transaction to the network and wait for the result
    const result = await iconService
      .sendTransactionAndWait(signedTransaction)
      .execute();

    console.log("result:", result);

    if (result) {
      // If the transaction was successful, set the user's contract address in the Redux store
      dispatch(setUserContract(result));
      console.log("Transaction succeeded");
      return true;
    } else {
      console.log("Transaction failed");
      return false;
    }
  } else {
    console.log("Not able to fetch contract data");
    return false;
  }
}
