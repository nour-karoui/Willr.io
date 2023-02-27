/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Menu from "@material-ui/core/Menu";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";

import styles from "../../styles/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Menu}
          dropdownList={[
            <CustomInput labelText="Contract Email" />,
            <Button color={"primary"}>
              <i className={"fab fa-instagram"} /> Disconnect Wallet
            </Button>,
          ]}
        />
      </ListItem>
    </List>
  );
}
