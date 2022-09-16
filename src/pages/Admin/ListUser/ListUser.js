import React from "react";
// import "./AdminUsers.css";
import { useStyles } from "../../../styles/styles";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { actGetKeyword, actGetUserInfo } from "../../../redux/actions/UserAction";
import { OPEN_MODAL } from "../../../redux/actions/type/UserType";
import EditUser from "./EditUser/EditUser";
import UserTable from "./EditUser/UserTable";

export default function ListUsers() {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch({ type: OPEN_MODAL });
  const resetUserEdit = () => dispatch(actGetUserInfo(null));
  const classes = useStyles();

  //handleOnChange
  const handleOnChange = (event) => {
    const { value } = event.target;
    dispatch(actGetKeyword(value));
  };

  return (
    <div className={classes.adminContent}>
      <Button
        variant="outlined"
        className="btn btn-add mt-5"
        onClick={() => {
          resetUserEdit();
          handleOpen();
        }}
      >
        <AddBoxIcon fontSize="large" />
        Thêm Người Dùng
      </Button>
      <EditUser />
      <div className="search-box mt-4">
        <SearchIcon sx={{ marginLeft: "20px" }} />
        <input
          className="admin-search"
          type="text"
          placeholder="Tìm người dùng..."
          onChange={handleOnChange}
        />
      </div>
      <UserTable/>
    </div>
  );
}
