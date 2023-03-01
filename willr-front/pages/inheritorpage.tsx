import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";

import styles from "../styles/jss/nextjs-material-kit/pages/willAppPage";
import { Divider, Paper, Tooltip, Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function InheritorPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      borderRadius: "25px 8px 25px 25px",
      padding: "1rem",
      boxShadow: theme.shadows[3],
      fontSize: 12,
    },
  }))(Tooltip);

  return (
    <div>
      <Header
        color="transparent"
        brand="Willr.io"
        profileMenu={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <div className={classes.pageHeader}>
        <Parallax small image="/img/illustrations/backgroundPatternWillApp.svg">
          <div
            className={classNames(classes.container, classes.containerDetails)}
          >
            <GridContainer
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              className={classes.containerBalance}
            >
              <GridItem xs={12} sm={8} md={6}>
                <GridContainer
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  className={classes.containerIcons}
                >
                  <GridItem xs={1}>
                    <Link href="/willapp" as="/willapp">
                      <i
                        className={`fa fa-arrow-left ${classes.icon} ${classes.iconPointer}`}
                      />
                    </Link>
                  </GridItem>
                  <GridItem xs={1}>
                    <LightTooltip
                      placement="bottom-end"
                      title={
                        <>
                          <Typography
                            color="white"
                            align="center"
                            paragraph
                            variant="subtitle2"
                          >
                            Estimated value
                          </Typography>
                          <Typography
                            color="white"
                            align="center"
                            variant="body2"
                          >
                            Check below for <br /> full list of assets
                          </Typography>
                        </>
                      }
                    >
                      <i
                        className={`fa fa-info ${classes.icon} ${classes.iconPointer}`}
                      />
                    </LightTooltip>
                  </GridItem>
                </GridContainer>
                <h1 align="center" className={classes.title}>
                  $1,224.47
                </h1>
                <p align="center" className={classes.title}>
                  Inherit Balance
                </p>
              </GridItem>

              <GridItem xs={12} sm={8} md={6}>
                <Link href="/updatewill" as="/updatewill">
                  <Button fullWidth color="primary">
                    Add Assets
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.container}>
          <GridContainer justifyContent="center" alignItems="center">
            <GridItem xs={12} sm={8} md={6}>
              <div className={classes.assetListPaper}>
                <GridContainer
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <>
                    {Array.from(Array(12).keys()).map((item, index) => {
                      return (
                        <GridItem key={index} xs={12}>
                          <GridContainer
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            className={classes.assetItem}
                          >
                            <GridItem xs={9}>
                              <Typography variant="body1">
                                0x000...000
                              </Typography>
                            </GridItem>
                            <GridItem xs={2}>
                              <Typography variant="body2" align="center">
                                7.582,00
                              </Typography>
                              <Typography variant="caption" align="center">
                                USDC
                              </Typography>
                            </GridItem>
                          </GridContainer>
                          <Divider />
                        </GridItem>
                      );
                    })}
                  </>
                </GridContainer>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
