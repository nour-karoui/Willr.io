import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import CustomInput from "../../components/CustomInput/CustomInput";

import styles from "../../styles/jss/nextjs-material-kit/pages/updatePageSections/emailWillSectionsStyle";

const useStyles = makeStyles(styles);

export default function EmailWillSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center" align="center" spacing={4}>
        <GridItem>
          <h3 className={classes.title}>Create Your Will Contract</h3>
          <div className={classes.description}>
            <p>
              Enter your email to get started and create your will. It only
              takes a few minutes to set up and gives you peace of mind knowing
              that your assets are in good hands.
            </p>
          </div>
        </GridItem>

        <GridItem>
          <CustomInput
            labelText="Email..."
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "email",
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
        </GridItem>

        <GridItem>
          <Link href="/updatewill" as="/updatewill">
            <Button color={"primary"} className={classes.button}>
              <i className={`fa fa-newspaper ${classes.icon}`} /> Add Digital
              Assets
            </Button>
          </Link>
          <Link href="/landing" as="/landing">
            <Button simple color={"primary"} className={classes.button}>
              Cancel
            </Button>
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
}
