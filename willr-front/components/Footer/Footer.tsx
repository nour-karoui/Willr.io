/*eslint-disable*/
import React from "react";
import Link from "next/link";

// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { IconButton, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Button from "../CustomButtons/Button";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../styles/jss/nextjs-material-kit/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props: FooterProps) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link href="/about" as="/about">
                <a className={classes.block}>About us</a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/license" as="/license">
                <a className={classes.block}>Licenses</a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/contact" as="/contact">
                <a className={classes.block}>Contact</a>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>Willr.io</div>
      </div>
    </footer>
  );
}

export interface FooterProps {
  whiteFont?: boolean;
}
