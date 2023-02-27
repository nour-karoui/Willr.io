import React from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
// core components
import styles from "../../styles/jss/nextjs-material-kit/components/customCircularProgressStyle";

const useStyles = makeStyles(styles);

export default function CustomCircularProgress(
  props: CustomCircularProgressProps
) {
  const classes = useStyles();
  const { color, ...rest } = props;
  return (
    <CircularProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[(color || "gray") + "Background"],
        bar: classes.bar + " " + classes[color || "gray"],
      }}
    />
  );
}

export interface CustomCircularProgressProps {
  color:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "rose"
    | "gray";
}
