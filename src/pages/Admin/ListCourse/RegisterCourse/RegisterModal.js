import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/material";
import UserSelector from "./UserSelector";
import UserWaiting from "./UserWaiting";
import UserJoined from "./UserJoined";

const registerStyle = makeStyles({
    pagination: {
      textAlign: "right",
      marginTop: 15,
    },
    title: {
      "& h2": {
        marginBottom: 10,
      },
    },
    modalRegister: {
      position: "absolute",
      top: "250%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: '65%',
      backgroundColor: "white",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      padding: 40
    },
    button: {
      padding: "10px 24px",
      fontSize: "16px",
      margin: "5px",
    },
  
});
export default function RegisterModal(props) {
  const classes = registerStyle();
  const { showRegisterModal, handleCloseRegisterModal } = props;

  const listUserSelector = useSelector(
    (state) => state.UserReducer.listUserSelector
  );
  const listUserWaiting = useSelector(
    (state) => state.UserReducer.listUserWaiting
  );
  const listUserJoined = useSelector(
    (state) => state.UserReducer.listUserJoined
  );
  let courseKey = useSelector((state) => state.UserReducer.courseKey);

  return (
    <Modal
      open={showRegisterModal}
      onClose={handleCloseRegisterModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ overflow: "scroll" }}
    >
      <Box className={classes.modalRegister}>
        <UserSelector listUserSelector={listUserSelector} courseKey={courseKey} />
        <UserWaiting listUserWaiting={listUserWaiting} courseKey={courseKey} />
        <Divider variant="inset" component="li" sx={{ margin: 2 }} />
        <UserJoined listUserJoined={listUserJoined} courseKey={courseKey}/>
      </Box>
    </Modal>
  );
}
