import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import UserSelector from "./UserSelector";
import UserJoined from "./UserJoined";
import UserWaiting from "./UserWaiting";
import { makeStyles } from "@mui/styles";

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
export {registerStyle};
export default function RegisterModal(props) {
  const classes = registerStyle();
  const { showRegisterModal, handleCloseRegisterModal } = props;

  const dataUserSelector = useSelector(
    (state) => state.CourseReducer.dataUserSelector
  );
  const dataUserWaiting = useSelector(
    (state) => state.CourseReducer.dataUserWaiting
  );
  const dataUserJoined = useSelector(
    (state) => state.CourseReducer.dataUserJoined
  );
  let courseCode = useSelector((state) => state.CourseReducer.courseCode);

  return (
    <Modal
      open={showRegisterModal}
      onClose={handleCloseRegisterModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ overflow: "scroll" }}
    >
      <Box className={classes.modalRegister}>
        <UserSelector dataUserSelector={dataUserSelector} courseCode={courseCode} />
        <UserWaiting dataUserWaiting={dataUserWaiting} courseCode={courseCode} />
        <Divider variant="inset" component="li" sx={{ margin: 2 }} />
        <UserJoined dataUserJoined={dataUserJoined} courseCode={courseCode}/>
      </Box>
    </Modal>
  );
}
