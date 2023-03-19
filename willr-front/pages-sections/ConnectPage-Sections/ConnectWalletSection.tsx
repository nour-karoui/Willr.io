import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";
import CustomInput from "../../components/CustomInput/CustomInput";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import styles from "../../styles/jss/nextjs-material-kit/pages/connectSectionsStyle";
import { RootState } from "../../store/store";
import { connectWallet } from "../../hooks";
import CustomModal from "../../components/CustomModal/CustomModal";

const useStyles = makeStyles(styles);

export default function ConnectWalletSection() {
  const classes = useStyles();

  const router = useRouter();
  const dispatch = useDispatch();

  const [isConnecting, setIsConnecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // new state to control modal open/close

  const [keystoreJson, setKeystoreJson] = useState(null);
  const [password, setPassword] = useState("");

  const handleConnectModal = async () => {
    setIsModalOpen(true); // open the modal when Connect Wallet is clicked
  };

  const handleCloseModal = async () => {
    setIsModalOpen(false); // close the modal when user cancels or connection fails
  };

  const handleKeystoreJson = (event: any) => {
    const file = event.target.files[0];

    // create a new FileReader object
    const reader = new FileReader();

    // set up the onload event handler
    reader.onload = (event) => {
      // get the result of the reader's readAsText method
      const result = event.target.result;

      // parse the result as JSON
      const json = JSON.parse(result);

      // do something with the parsed JSON object
      setKeystoreJson(json);
    };

    // read the file as text
    reader.readAsText(file);
  };

  const handlePassword = (event: any) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    try {
      if (keystoreJson && password !== "") {
        console.log("Lets to connect");
        const toConnect = await connectWallet(keystoreJson, password, dispatch);
        if (toConnect) {
          console.log("Connected?", toConnect);
        }
      }
      setIsConnecting(false);
    } catch (error) {
      // TODO Show handleConnectWallet erro alert
      console.error(error);
      setIsConnecting(false);
    }
  };

  return (
    <GridContainer justifyContent="center" align="center">
      <GridItem xs={12} md={5}>
        <img
          alt="Connect Wallet illustration"
          src="/img/illustrations/connectWallet.svg"
          className={classes.imgFluid}
        />
      </GridItem>

      <GridItem xs={12} md={5}>
        <div className={classes.section}>
          <GridContainer>
            <GridItem>
              <h3 className={classes.title}>Welcome to Willr.io!</h3>
            </GridItem>
            <GridItem>
              <div className={classes.description}>
                <h4>
                  You're one step closer to securing your digital assets for
                  your beneficiaries.
                </h4>
              </div>
            </GridItem>
            <GridItem>
              <Button
                color={"primary"}
                className={classes.button}
                onClick={handleConnectModal}
              >
                <i className={`fa fa-sign-in-alt ${classes.icon}`} />
                Connect Wallet
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </GridItem>
      <CustomModal open={isModalOpen} onClose={handleCloseModal}>
        <div className={classes.connectModal}>
          <h3>Upload Your keystore file</h3>
          <p>Please upload it to connect with our application.</p>

          <CustomInput
            labelText="keystore.json"
            id="keystore-file"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "file",
              onChange: handleKeystoreJson,
            }}
          />

          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "password",
              value: password,
              onChange: handlePassword,
            }}
          />
          <div className={classes.buttonWrapper}>
            <Button
              simple
              color={"primary"}
              onClick={handleCloseModal}
              className={classes.cancelButton}
            >
              Close
            </Button>
            <Button
              disabled={isConnecting}
              color={"primary"}
              onClick={handleConnectWallet}
            >
              {isConnecting ? (
                <i className={`fa fa-spinner fa-spin ${classes.icon}`} />
              ) : (
                <i className={`fa fa-sign-in-alt ${classes.icon}`} />
              )}
              Connect
            </Button>
          </div>
        </div>
      </CustomModal>
    </GridContainer>
  );
}
