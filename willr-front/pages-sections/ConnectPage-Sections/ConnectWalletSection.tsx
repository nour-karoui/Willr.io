import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import styles from "../../styles/jss/nextjs-material-kit/pages/connectSectionsStyle";
import { RootState } from "../../store/store";
import { hasWalletExtension, connectWallet, checkUserHasContract } from "../../hooks";

const useStyles = makeStyles(styles);

export default function ConnectWalletSection() {
  const classes = useStyles();
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  
  const isConnected = useSelector((state: RootState) => state.wallet.isConnected);
  const account = useSelector((state: RootState) => state.wallet.account);

  const handleConnectWallet = async () => {
    if (hasWalletExtension()) {

      try {
        setIsConnecting(true);
        if (await connectWallet(dispatch)) {
          // check if user has a contract
          const hasContract = await checkUserHasContract(isConnected, account, dispatch);
          if (hasContract) {
            router.push("/willapp");
          }
        } else {
          // TODO Show handleConnectWallet erro alert
          setIsConnecting(false);
        }
        setIsConnecting(false);
      } catch (error) {
        // TODO Show handleConnectWallet erro alert
        console.error(error);
        setIsConnecting(false);
      }
    } else {
      console.error("Web3 provider not found");
      setIsConnecting(false);
    }
  };

  return (
    <GridContainer justifyContent="center" align="center">
      <GridItem xs={12} md={5}>
        <img
          alt="Connect Wallet illustration"
          src="/img/illustrations/connectWallet.svg"
          className={classes.imgFluid}
        />
      </GridItem>

      <GridItem xs={12} md={5}>
        <div className={classes.section}>
          <GridContainer>
            <GridItem>
              <h3 className={classes.title}>Welcome to Willr.io!</h3>
            </GridItem>
            <GridItem>
              <div className={classes.description}>
                <h4>
                  You're one step closer to securing your digital assets for
                  your beneficiaries.
                </h4>
              </div>
            </GridItem>
            <GridItem>
              <Button
                color={"primary"}
                className={classes.button}
                onClick={handleConnectWallet}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <i className={`fa fa-spinner fa-spin ${classes.icon}`} />
                ) : (
                  <i className={`fa fa-sign-in-alt ${classes.icon}`} />
                )}
                Connect Wallet
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </GridItem>
    </GridContainer>
  );
}
