import React from "react";
import { useDispatch } from "react-redux";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { actDeleteUser, actGetUserInfo } from "../../../../redux/actions/UserAction";
import { OPEN_MODAL } from "../../../../redux/actions/type/UserType";

export default function UserItem(props) {
  const { user } = props;
  const dispatch = useDispatch();

  // handle Delete

  // handle Edit
  const handleUserInfo = (user) => {
    dispatch(actGetUserInfo(user));
  };
  // Open Close Modal
  const handleOpen = () => dispatch({ type: OPEN_MODAL });

  return (
    <>
      <TableRow>
        <TableCell>{user.id}</TableCell>
        <TableCell align="center">{user.taiKhoan}</TableCell>
        <TableCell align="center">{user.hoTen}</TableCell>
        <TableCell align="center">{user.soDT}</TableCell>
        <TableCell align="center">{user.email}</TableCell>
        <TableCell align="center">{user.tenLoaiNguoiDung}</TableCell>
        <TableCell align="center">
          <Button
            color="error"
            onClick={() => {
              // Delete confirm
              if (
                window.confirm("Bạn có muốn xoá tài khoản " + user.taiKhoan)
              ) {
                dispatch(actDeleteUser(user.taiKhoan));
              }
            }}
          >
            <DeleteIcon />
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              //Edit
              handleOpen();
              handleUserInfo(user);
            }}
          >
            <EditIcon />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
