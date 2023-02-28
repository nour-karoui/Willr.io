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

export default function InstallWallettSection() {
  const classes = useStyles();
  return (
    <GridContainer justifyContent="center" align="center">
      <GridItem xs={12} md={5}>
        <img
          alt="Install Wallet illustration"
          src="/img/illustrations/installWallet.svg"
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
                  You need to install a <strong>Crypto Wallet</strong> extension
                  in your browser and reload the page.
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </GridItem>
    </GridContainer>
  );
}
