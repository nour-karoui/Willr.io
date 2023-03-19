import React, { ReactNode, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Button from "../../components/CustomButtons/Button";

import styles from "../../styles/jss/nextjs-material-kit/components/customModalStyle";

const useStyles = makeStyles(styles);

export default function CustomModal(props: CustomModalProps) {
  const classes = useStyles();
  const { open, onClose } = props;
  const modalRef = useRef(null);

  return (
    <Modal
      open={open}
      onClose={onClose}
      ref={modalRef}
      className={classes.modal}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div className={classes.children}>{props.children}</div>
        </div>
      </Fade>
    </Modal>
  );
}

export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}
