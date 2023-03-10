/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";

import styles from "../../styles/jss/nextjs-material-kit/components/headerLinksStyle";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <CustomDropdown
      noLiPadding
      navDropdown
      buttonProps={{
        className: classes.navLink,
        color: "transparent",
      }}
      dropdownList={[
        <Typography color="primary" variant="subtitle2">
          Willr.io
        </Typography>,
        <CustomInput
          labelText="<my-email>@<my-provider.com>"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            type: "email",
          }}
        />,
        <Link href="/landing" as="/landing">
          <Button color={"primary"}>
            <i className={`fa fa-sign-out-alt ${classes.iconButtom}`} />
            Disconnect Wallet
          </Button>
        </Link>,
      ]}
    />
  );
}
