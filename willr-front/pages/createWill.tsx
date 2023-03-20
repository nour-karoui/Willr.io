import React, { useState } from "react";
import Link from "next/link";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "../components/Header/Header";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import CustomInput from "../components/CustomInput/CustomInput";
import Button from "../components/CustomButtons/Button";

import styles from "../styles/jss/nextjs-material-kit/pages/updateWillPage";
import { createNewWill } from "../hooks/createNewWill";

const useStyles = makeStyles(styles);

export default function CreateWill(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const dispatch = useDispatch();

  const userAddress = useSelector((state: RootState) => state.wallet.address);
  const userPrivateKey = useSelector(
    (state: RootState) => state.wallet.privKey
  );

  const [userEmail, setUserEmail] = useState("");

  const handleUserEmail = (event: any) => {
    setUserEmail(event.target.value);
  };

  const handleCreateNewWill = async () => {
    console.log("Request to create will");
    await createNewWill(userAddress, userEmail, userPrivateKey, dispatch);
    console.log("Request made");
  };

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
              <Paper className={classes.section}>
                <GridContainer
                  justifyContent="center"
                  align="center"
                  spacing={4}
                >
                  <GridItem>
                    <h3 className={classes.title}>Create Your Will Contract</h3>
                    <div className={classes.description}>
                      <p>
                        Enter your email to get started and create your will. It
                        only takes a few minutes to set up and gives you peace
                        of mind knowing that your assets are in good hands.
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
                        value: userEmail,
                        onChange: handleUserEmail,
                      }}
                    />
                  </GridItem>

                  <GridItem>
                    {/* <Link href="/willapp" as="/willapp"> */}
                    <Button
                      color={"primary"}
                      className={classes.button}
                      onClick={handleCreateNewWill}
                    >
                      <i className={`fa fa-newspaper ${classes.icon}`} /> Create
                      Will
                    </Button>
                    {/* </Link> */}
                    <Link href="/landing" as="/landing">
                      <Button
                        simple
                        color={"primary"}
                        className={classes.button}
                      >
                        Cancel
                      </Button>
                    </Link>
                  </GridItem>
                </GridContainer>
              </Paper>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
