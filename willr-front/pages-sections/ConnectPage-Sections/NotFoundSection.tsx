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

export default function NotFoundSection() {
  const classes = useStyles();
  return (
    <GridContainer justifyContent="center" align="center">
      <GridItem xs={12} md={5}>
        <img
          alt="Not Found illustration"
          src="/img/illustrations/notFound.svg"
          className={classes.imgFluid}
        />
      </GridItem>

      <GridItem xs={12} md={5}>
        <div className={classes.section}>
          <GridContainer>
            <GridItem>
              <h3 className={classes.title}>
                Oops!
                <br />
                Page Not Found
              </h3>
            </GridItem>
            <GridItem>
              <div className={classes.description}>
                <h4>
                  We couldn't find the page you were looking for. Let's go back
                  to the home page and try again
                </h4>
              </div>
            </GridItem>
            <GridItem>
              <Link href="/updatewill" as="/updatewill">
                <Button color={"primary"} className={classes.button}>
                  <i className={`fa fa-warehouse ${classes.icon}`} /> Back to
                  Home
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </GridItem>
    </GridContainer>
  );
}
