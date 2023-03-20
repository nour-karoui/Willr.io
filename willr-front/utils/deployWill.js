const {
  IconService,
  IconBuilder,
  IconConverter,
  HttpProvider,
} = require("icon-sdk-js");

// Set up connection to the network

const iconService = new IconService(
  new HttpProvider("https://lisbon.net.solidwallet.io/api/v3")
);

// Define the address of the WillFactory contract
const willFactoryAddress = "cx91f29280157d5ff4a08958c147bad870c08c649b";

// Define the email to pass as argument
const email = "example@example.com";

// Read the JAR file as a byte array
const fs = require("fs");
const path = require("path");
const jarFilePath = path.resolve(__dirname, "willrContract-0.1.0.jar");
const jarBytes = fs.readFileSync(jarFilePath);

// Convert the byte array to a hexadecimal string
const jarHex = IconConverter.fromBytes(jarBytes).substring(2);

// Create the transaction object
const transaction = IconBuilder.CallTransactionBuilder()
  .to(willFactoryAddress)
  .method("createNewWill")
  .params({
    email: email,
    jarBytes: "0x" + jarHex,
  })
  .build();

// Sign and send the transaction
const privateKey =
  "04aee9f766951cf6724780afd3a97b476b1aa34e238263942af4783a0e7b417f";
const signedTransaction = new IconBuilder.SignedTransaction(
  transaction,
  privateKey
);
iconService.sendTransaction(signedTransaction).execute().then(console.log);
