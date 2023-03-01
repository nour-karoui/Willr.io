import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CustomInput from "../../components/CustomInput/CustomInput";

import styles from "../../styles/jss/nextjs-material-kit/pages/updatePageSections/emailWillSectionsStyle";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function AddAssetSection() {
  const classes = useStyles();
  return (
    <Paper className={classes.section}>
      <GridContainer justifyContent="center" align="center" spacing={4}>
        <GridItem>
          <h3 className={classes.title}>Inheritor and Assets</h3>
          <div className={classes.description}>
            <p>Add an inheritor and their associated assets</p>
          </div>
        </GridItem>

        <GridItem>
          <CustomInput
            labelText="Inheritor's Address"
            id="inheritorAddress"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "address",
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <Email className={classes.inputIconsColor} />
              //   </InputAdornment>
              // ),
            }}
          />
          <CustomInput
            labelText="Inheritor's Address"
            id="inheritorAddress"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "address",
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <Email className={classes.inputIconsColor} />
              //   </InputAdornment>
              // ),
            }}
          />
          <CustomInput
            labelText="Asset Chain ID"
            id="assetChainID"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "number",
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <Email className={classes.inputIconsColor} />
              //   </InputAdornment>
              // ),
            }}
          />
          <CustomInput
            labelText="Asset Address"
            id="assetAddress"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "address",
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <Email className={classes.inputIconsColor} />
              //   </InputAdornment>
              // ),
            }}
          />
          <CustomInput
            labelText="Asset Amount or Token ID"
            id="assetAmountTokenID"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "address",
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <Email className={classes.inputIconsColor} />
              //   </InputAdornment>
              // ),
            }}
          />
        </GridItem>

        <GridItem>
          <Link href="/willapp" as="/willapp">
            <Button color={"primary"} className={classes.button}>
              <i className={`fa fa-newspaper ${classes.icon}`} /> Update Your
              Contract
            </Button>
          </Link>
          <Link href="/landing" as="/landing">
            <Button simple color={"primary"} className={classes.button}>
              Cancel
            </Button>
          </Link>
        </GridItem>
      </GridContainer>
    </Paper>
  );
}
