import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector, useDispatch} from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header";
// Page sections
import InstallWallettSection from "../pages-sections/ConnectPage-Sections/InstallWalletSection";
import ConnectWallettSection from "../pages-sections/ConnectPage-Sections/ConnectWalletSection";
import CreateWillSection from "../pages-sections/ConnectPage-Sections/CreateWillSection";

import styles from "../styles/jss/nextjs-material-kit/pages/connectPage";

import { RootState } from "../store/store";
import { setHasContract } from '../store/walletSlice';

import { hasWalletExtension, checkWalletConnection, checkUserHasContract } from "../hooks"

const useStyles = makeStyles(styles);

export default function ConnectPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const userHasWalletExtension = hasWalletExtension();

  const isConnected = useSelector((state: RootState) => state.wallet.isConnected);
  const account = useSelector((state: RootState) => state.wallet.account);
  const hasContract = useSelector((state: RootState) => state.wallet.hasContract);


  useEffect(() => {
    async function checkConnection() {
      if (userHasWalletExtension) {
        try {
          // Check if user is already connected
          const connected  = await checkWalletConnection(isConnected, account, dispatch);

          // Check if user has a contract
          if (connected) {
            // Replace this with your contract factory logic to check if the user has a contract
            const userHasContract = await checkUserHasContract(isConnected, account, dispatch);
            if (userHasContract) {
              dispatch(setHasContract(userHasContract));
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
  }, [isConnected, account, hasContract]);

  useEffect(() => {
    if (isConnected && hasContract) {
      // Navigate to willapp page if user has a contract
      router.push("/willapp");
    }
  }, [hasContract, router]);

  return (
    <div>
      <Header absolute color="white" brand="Willr.io" {...rest} />
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          {userHasWalletExtension ? (
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
