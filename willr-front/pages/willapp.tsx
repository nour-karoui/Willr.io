import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";

import styles from "../styles/jss/nextjs-material-kit/pages/willAppPage";

const useStyles = makeStyles(styles);

export default function WillAppPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Willr.io"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/pattern-2-bg.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <h3 className={classes.title}>Assets List</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
