import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import Parallax from "../components/Parallax/Parallax";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Willr.io"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div className={classes.pageHeader}>
        <Parallax
          responsive
          image="/img/illustrations/backgroundPatternLanding.svg"
        >
          <div className={classes.container}>
            <GridContainer justifyContent="flex-start">
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Willr</h1>
                <h3>
                  Enables users to securely transfer their digital assets to
                  future beneficiaries through smart contracts.
                </h3>
                <br />
                <Link href="/connect" as="/connect">
                  <Button color="primary">Get Started</Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
