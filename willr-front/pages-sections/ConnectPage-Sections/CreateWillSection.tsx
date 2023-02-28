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

export default function CreateWillSection() {
  const classes = useStyles();
  return (
    <GridContainer justifyContent="center" align="center">
      <GridItem xs={12} md={5}>
        <img
          alt="Create Will illustration"
          src="/img/illustrations/createWill.svg"
          className={classes.imgFluid}
        />
      </GridItem>

      <GridItem xs={12} md={5}>
        <div className={classes.section}>
          <GridContainer>
            <GridItem>
              <h3 className={classes.title}>
                Create Your
                <br />
                Digital Legacy
              </h3>
            </GridItem>
            <GridItem>
              <div className={classes.description}>
                <h4>
                  Secure your digital assets for your beneficiaries today.
                </h4>
              </div>
            </GridItem>
            <GridItem>
              <Link href="/updatewill" as="/updatewill">
                <Button color={"primary"} className={classes.button}>
                  <i className={`fa fa-newspaper ${classes.icon}`} /> Create My
                  Will
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </GridItem>
    </GridContainer>
  );
}
