import React, { ReactElement } from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
// core components
import styles from "../../styles/jss/nextjs-material-kit/components/headerStyle";

const useStyles = makeStyles(styles);

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (changeColorOnScroll) {
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[color || "primary"]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[changeColorOnScroll.color]);
      } else {
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[color || "primary"]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[changeColorOnScroll.color]);
      }
    }
  };
  const { color, profileMenu, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color || "primary"]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <Link href="/landing" as="/landing">
      <Button className={classes.title}>{brand}</Button>
    </Link>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {brandComponent}
        {profileMenu !== undefined ? profileMenu : null}
      </Toolbar>
    </AppBar>
  );
}

export interface HeaderProps {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "transparent"
    | "white"
    | "rose"
    | "dark";
  profileMenu?: ReactElement;
  brand: string;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll?: {
    height: number;
    color:
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "transparent"
      | "white"
      | "rose"
      | "dark";
  };
}
