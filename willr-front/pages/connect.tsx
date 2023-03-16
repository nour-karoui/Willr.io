import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header";
// Page sections
import InstallWallettSection from "../pages-sections/ConnectPage-Sections/InstallWalletSection";
import ConnectWallettSection from "../pages-sections/ConnectPage-Sections/ConnectWalletSection";
import CreateWillSection from "../pages-sections/ConnectPage-Sections/CreateWillSection";

import styles from "../styles/jss/nextjs-material-kit/pages/connectPage";

import { checkUserHasContract, hasWalletExtension, checkWalletConnection } from "../utils/wallet-functions"

const useStyles = makeStyles(styles);

export default function ConnectPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [isConnected, setIsConnected] = useState(false);
  const [hasContract, setHasContract] = useState(false);

  const router = useRouter();

  useEffect(() => {
    async function checkConnection() {
      if (hasWalletExtension()) {
        try {
          // Check if user is already connected
          const { account, isConnected } = await checkWalletConnection();

          setIsConnected(isConnected);

          // Check if user has a contract
          if (isConnected) {
            // Replace this with your contract factory logic to check if the user has a contract
            const userHasContract = await checkUserHasContract(account.address);
            if (userHasContract) {
              setHasContract(userHasContract);
            } else {
              // TODO Show fetching contract erro alert
              console.log("Error fetching contract from account")
            }
          }
        } catch (error) {
          // TODO Show checkConnection erro alert
          console.error(error);
        }
      }
    }

    checkConnection();
  }, []);

  useEffect(() => {
    if (hasContract) {
      // Navigate to willapp page if user has a contract
      router.push("/willapp");
    }
  }, [hasContract, router]);

  return (
    <div>
      <Header absolute color="white" brand="Willr.io" {...rest} />
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          {hasWalletExtension() ? (
            isConnected ? (
              <CreateWillSection />
            ) : (
              <ConnectWallettSection />
            )
          ) : (
            <InstallWallettSection />
          )}
        </div>
      </div>
    </div>
  );
}
