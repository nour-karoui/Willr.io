import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../components/Header/Header";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
// Page sections
import AddAssetSection from "../pages-sections/UpdatePage-Sections/AddAssetSection";

import styles from "../styles/jss/nextjs-material-kit/pages/updateWillPage";

const useStyles = makeStyles(styles);

export default function addInheritors(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header absolute color="white" brand="Willr.io" {...rest} />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage:
            "url('/img/illustrations/backgroundPatternLightGray.svg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} md={8} lg={6}>
              <AddAssetSection />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
