import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import styles from "../../styles/jss/nextjs-material-kit/pages/connectSectionsStyle";

const useStyles = makeStyles(styles);

export default function ConnectWalletSection() {
  const classes = useStyles();
  return (
    <GridContainer justifyContent="center" align="center">
      <GridItem xs={12} md={5}>
        <img
          alt="Connect Walle illustration"
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
              <Link href="/updatewill" as="/updatewill">
                <Button color={"primary"} className={classes.button}>
                  <i className={`fa fa-sign-in-alt ${classes.icon}`} /> Connect
                  Wallet
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </GridItem>
    </GridContainer>
  );
}
