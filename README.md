# Willr.io

Secure the future with willr.io, create smart and secured wills on the blockchain.

## DESCRIPTION

Willr.io is a Web3 platform on the ICON blockchain that uses the ICON's cross-chain functionality to allow users create a digital will on the blockchain. Willr allows its users to will their crypto currencies, NFT's and even documents of their physical assets to their loved ones or next of kin, in order to ensure that their assets are appropriated to the right person in case of unforeseen circumstances like; life threatening illnesses, ghastly accidents that leads to decapitation or even death.
Since the inception of blockchain technology and its number one offspring - crypto currency, a lot of people have acquired these digital assets and have a fortune worth of crypto currencies and NFTs stored in some highly secured wallet or ledger. This is a good thing as blockchain and its products have gone a long way in fixing the problem of dealing with banks and fiat currencies. However, keeping these digital assets requires a high level of security and secretiveness. Hence, asset holders acquire and store them in highly secured non-transferable wallets which their loved ones know nothing about. Therefore, this highly secured and encrypted feature of the blockchain becomes a major setback to assets holders who become hit by unfavorable circumstances of life, such as; accidents that decapitates them, critical illnesses that also bed rids them for years, and even death, as the holders would not be able to transfer these funds and assets to their loved ones after such events occurs.
However, with willr.io this problem is laid to rest as users can will on their assets securely to their loved ones, long before such incidents occur and have them transferred automatically to their beneficiaries at the appointed time.
Willr.io allows its users to store up crypto currencies and NFT's from different blockchains and transfer them on to their desired beneficiaries.

## WHY Willr.io

Willr is a cutting-edge digital platform that offers users the peace of mind they deserve when it comes to managing and transferring their digital assets to future beneficiaries. With a sleek and modern interface that is user-friendly and accessible to everyone, Willr is a one-of-a-kind platform that prioritizes trust, security, and innovation above all else. Our mission is to empower users to take control of their digital assets and pass them on securely to their beneficiaries, and our branding and messaging reflect that commitment. We want our users to feel protected and forward-thinking when they use Willr, and we're dedicated to offering the most reliable and cutting-edge solutions for digital asset management on the market today.
Willr ensures tamper proofing of wills. Hence, users do not have to worry about the authenticity of their will especially when they are gone. Willr not only allows users to will their digital assets but also ownership documents of physical assets to their desired beneficiaries.

At Willr, we believe in the power of blockchain technology to revolutionize the way we manage and transfer digital assets. That's why our Will contracts are deployed on the ICON blockchain, which is designed to be a decentralized platform that can connect various blockchains together, including Ethereum. This means that users can create their will on the DApp and still be able to transfer ownership of digital assets from any Ethereum layer 2 network to their Will Contract on ICON.
Our main goal is to create a truly cross-chain app that allows users to seamlessly manage and transfer their digital assets across various blockchain networks. With Willr, users can trust that their assets will be secure, and that their beneficiaries will receive the assets they are entitled.

## FEATURES OF Willr.io

In order to efficiently provide its unique and promising services, willr.io is properly equipped with the following features.

## CREATE ACCOUNT

This feature requires KYC as it prompts users to create an account with their email address.
ADD ASSETS

The add assets feature enables users to add and store digital token, NFTs and other digital assets on the platform in order to add them to their will contract. When adding assets, the user is giving the luxury to add assets from different blockchain technologies
that are featured on the Willr app.

## ADD INHERITORS

With this feature, the app gives users the permission to add as many beneficiaries as they wish and allow assets to be allocated to the different beneficiaries provided.

## ADD OTHER ASSETS

This feature provides users the opportunity to add documents of ownership of their physical assets to their will contract in order for them to will them easily to beneficiaries unlike the tedious process involved in willing physical assets to beneficiaries.

## ASSETS SUMMARY

With this feature the total value of assets stored by the willer for the beneficiary is displayed in their local currency or dollar value equivalent thereby, enabling users to know the value of the assets stored in the will contract.

## UPDATE WILL

Users are allowed to update the content of their will as often as they like. Thus, they can choose to add or remove assets as they deem necessary. This therefore allows for flexibility of wills, as opposed to the conventional system of drafting and implementing wills where they are written by the testator and signed in the presences of witnesses at a law court. Testators cannot easily update their will as it requires many processes that are tedious and time consuming.

## SERVICE WILL

This function requires the user to login to the Willr.io platform on a periodic basis to confirm their status in order for the smart contract to know if the user is still able to fully control their assets. The smart contract would be able to initiate the automatic transfer of the assets to the provided beneficiaries when the user fails to service the will across the stipulated “will servicing periods”. Moreover, the platform allows the user to define the will servicing periods and the delay period before assets are automatically transferred. The servicing period could be quarterly, biannually, or annually, while the delay period could be set at a year or more depending on the preference of the user.

## TRANSFER ASSETS

The platform transfers assets to the designated beneficiaries according to the value stipulated by the willer. This can be authorized by the willer at the click of the transfer asset function or automatically by the will contract if the user fails to service the will until the delay period is reached.

## SMART CONTRACT

### Will contract

Objective: This contract defines the details of a user's Will, including inheritors and belongings. It also includes functions to manage the digital assets in the Will. Each user can only have one will.

```
contract Will {
	mapping(address => belongings) inheriters;
	string email;
	constructor(string email)
	+addNewDigitalAsset(address inheriter, Belonging belongings)
	+transferAsset()
}
```

Parameters:

- Belonging: A struct that includes token address, token ID (which can be null), and a token amount.
- inheritors: A mapping of the addresses of the inheritors to their belongings.
- email: The string email address of the owner of the Will.

Functions:

- addNewInheritor(address inheritor, Belonging[] belongings): Adds a new digital asset to the Will, with the specified inheritor and an array of belongings.

  - Parameters:
    inheritor: The address of the inheritor for the new digital asset.
    belongings: The belongings (tokens) to be inherited by the inheritor.
  - Modifiers: onlyOwner: Ensures that only the owner of the Will can add new digital assets.
  - Returns: None.

- removeInheritor(address inheritor): Removes a digital asset from the Will.

  - Parameters:
    inheritor: The address of the inheritor for the digital asset to be removed
  - Modifiers: onlyOwner: Ensures that only the owner of the Will can remove digital assets.
  - Returns: None.

- transferAsset(): Sends the assets to the corresponding inheritor. This function can only be called by the owner or the Will contract itself
  - Parameters: None
  - Modifiers: onlyOwnerOrContract: Ensures that only the owner or the Will contract can call this function
  - Returns: None.

### Will Factory

Objective: This contract provides functionality to create and retrieve Will contract.

```
Contract WillFactory {
	Mapping(string => address) wills;
	Constructor()
	+createNewWill(string email);
	+getwill(string email);
}
```

Parameters:

- wills: A mapping of string email addresses to the corresponding Will contract addresses.

Functions:

- createNewWill(string email): Creates a new Will contract with the specified email address, and adds it to the mapping of Wills.

  - Parameters:
    email: The email address to be associated with the new Will contract.
  - Modifiers: None
  - Returns: The address of the new Will contract.

- getWill(string email): Returns the address of the Will contract associated with the specified email address.
  - Parameters: email: The email address associated with the Will contract to be retrieved.
  - Modifiers: None
  - Returns: The address of the Will contract associated with the specified email address.

Blockchain email reminder system

A backend that needs to fetch emails from the block chain in order to send reminder emails.
Objective: to develop a backend system that retrieves email addresses from the blockchain and sends reminder emails to the respective owners of Will contracts.

### Cross-chain contract

“ICON Blockchain is designed to be a decentralized platform that can connect various blockchains together, including Ethereum. This means that you can build your DApp on the ICON platform and still allow users to transfer ownership of digital assets from any Ethereum layer 2 network to your Will Contract on ICON.”
https://docs.icon.community/

To do this, we will create a smart contract on ICON that will act as a bridge between the different blockchain networks. This smart contract will need to include the logic for receiving digital assets from one blockchain network, and then transferring them to our Contract on ICON. This part is currently under development and is yet to be completed.

## GETTING STARTED

Users can enjoy the features of this platform when they log-on to the willr.io web application. Where they would be greeted with a lovely and responsive user interface, on which they would have to click on the “get started button” that will then take them to the page where they need to sign up with their email and add their ICON wallet address.
Afterwards, they can proceed to click on the “Create My will” button and start defining the contents of the will. That is, they can add inheritors, digital tokens, NFTs, and other digital assets as they please. After they are done defining the contents of their will, they will have to set the will servicing period according to the provided options which are – quarterly, biannually, and yearly. Furthermore, they would have to set the will transfer delay period; that is the number of days the smart contract would have to wait before transferring the funds to the beneficiary.

## ROAD MAP

As a team of developers with desire and drive to create a fully functional and scalable platform with as many problem-solving functionalities as possible, we have laid out the following mile stones for progress tracking, in order to achieve our ultimate goal.
Smart contract development: Build and deploy all the needed smart contracts that would enable the platform to function as intended and as well make it marketable.
Front end (GUI) development: design and build fully functional and responsive graphical interfaces for android, IOS, and as well as a web application
Make the platform a fully cross-chain platform that has its roots planted in the ICON blockchain.
Build and implement the feature that allows users to also will their physical assets on our platform.
Build an implement the function that gives users the access to compose custom messages for their loved ones. These messages could be pre-recorded video messages or Emails that the system would ask the user to add when creating their will contract. This feature is very important to the platform and users alike as it would enable beneficiaries to believe the authenticity of the email our platform would send to them when the funds are finally transferred.
Onboard more developers to the team for quicker development of the project.
Get the company registered.
Seek for investors and collaborators.
Employ a team of business experts to graft and implement a business model for the project.
Fully deploy the platform on the ICON ecosystem and get it online.

## ACHIEVEMENTS

So far, we are proud to declare the following achievements for investors and collaborators alike to see;
We have built a functional GUI.
We have created the smart contract that allow users to create wills for assets related to the ICON blockchain; that is the ICX token, ICON’s NFT’s and other tokens on the ICON blockchain.

## SPECIAL THANKS

We sincerely want to send hearty appreciations to our family and friends who encouraged us so much while we were working on this project. Thank you for your support and advice to us to keep a positive mindset especially during the times we hit road blocks.
We also want to thank every member of the ICON Discord community for their timely supports and suggestions towards fixing the bugs in our code. Massive appreciation goes to the Hyper-Build Hackathon’s support team Devera Academy for your timely response and support to us when we needed help. Finally, we want to thank the ICON Foundation and the Organizers of the ICON Hyper Build Hackathon massively for creating this opportunity and platform for us to learn about the ICON blockchain, and to be able to build on the technology, which is a massive leap for us towards fulfilling our dream of fixing a long-standing real-life issue.
