import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header";
// Page sections
import ConnectWallettSection from "../pages-sections/ConnectPage-Sections/ConnectWalletSection";
import CreateWillSection from "../pages-sections/ConnectPage-Sections/CreateWillSection";

import styles from "../styles/jss/nextjs-material-kit/pages/connectPage";

import { RootState } from "../store/store";

import { checkWalletConnection, checkUserHasContract } from "../hooks";

const useStyles = makeStyles(styles);

export default function ConnectPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const isConnected = useSelector(
    (state: RootState) => state.wallet.isConnected
  );
  const userAddress = useSelector((state: RootState) => state.wallet.address);
  const userContract = useSelector(
    (state: RootState) => state.wallet.userContract
  );
  useEffect(() => {
    async function checkConnection() {
      try {
        // Check if user is already connected
        const connected = await checkWalletConnection(dispatch);

        // Check if user has a contract
        if (connected && userAddress !== "") {
          // Replace this with your contract factory logic to check if the user has a contract
          const userHasContract = await checkUserHasContract(
            userAddress,
            dispatch
          );
          if (userHasContract && userContract !== "") {
            // Navigate to willapp page if user has a contract
            console.log("Contract found:", userContract);
            router.push("/willapp");
          } else {
            // TODO Show fetching contract erro alert
            console.log("Not contract found.");
          }
        }
      } catch (error) {
        // TODO Show checkConnection erro alert
        console.log("Error fetching contract from account.");
        console.error(error);
      }
    }
    checkConnection();
  }, [userAddress, userContract]);

  return (
    <div>
      <Header absolute color="white" brand="Willr.io" {...rest} />
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          {isConnected ? <CreateWillSection /> : <ConnectWallettSection />}
        </div>
      </div>
    </div>
  );
}
