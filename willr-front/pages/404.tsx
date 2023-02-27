import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";

import styles from "../styles/jss/nextjs-material-kit/pages/connectPage";

const useStyles = makeStyles(styles);

export default function NotFoundPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header absolute color="white" brand="Willr.io" {...rest} />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/full-light-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justifyContent="center" align="center">
            <GridItem xs={12} sm={5}>
              <img
                alt="..."
                src="/img/examples/studio-1.jpg"
                className={classes.imgFluid}
              />
            </GridItem>

            <GridItem xs={12} sm={4}>
              <GridContainer
                style={{
                  height: "100%",
                  width: "80%",
                }}
              >
                <GridItem>
                  <h3 className={classes.title}>Oops! Page Not Found</h3>
                </GridItem>
                <GridItem>
                  <div className={classes.description}>
                    <p>
                      We couldn't find the page you were looking for. Let's go
                      back to the home page and try again
                    </p>
                  </div>
                </GridItem>
                <GridItem>
                  <Link href="/landing" as="/landing">
                    <Button color={"primary"}>
                      <i className={"fab fa-instagram"} /> Back to Home
                    </Button>
                  </Link>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
