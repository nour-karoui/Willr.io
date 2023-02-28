import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header";
// Page sections
import InstallWallettSection from "../pages-sections/ConnectPage-Sections/InstallWalletSection";
import ConnectWallettSection from "../pages-sections/ConnectPage-Sections/ConnectWalletSection";
import CreateWillSection from "../pages-sections/ConnectPage-Sections/CreateWillSection";

import styles from "../styles/jss/nextjs-material-kit/pages/connectPage";

const useStyles = makeStyles(styles);

export default function ConnectPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header absolute color="white" brand="Willr.io" {...rest} />
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          {/* <InstallWallettSection /> */}
          <ConnectWallettSection />
          {/* <CreateWillSection /> */}
        </div>
      </div>
    </div>
  );
}
