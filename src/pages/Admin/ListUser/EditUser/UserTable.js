import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./AdminUsers.css";
import TablePagination from "@mui/material/TablePagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserItem from "./UserItem";
import { actGetUser } from "../../../../redux/actions/UserAction";

export default function UserTable(props) {
  const dispatch = useDispatch();
  // Get data từ Reducer
  let data = useSelector((state) => state.UserReducer.listUser);
  let keyword = useSelector((state) => state.UserReducer.keyword);
  // Thêm Id vào data
  const users = data?.items.map((user, index) => {
    return (user = {
      ...user,
      id: index + 1,
    });
  });

  // Call Api get User
  React.useEffect(() => {
    dispatch(actGetUser());
  }, []);

  //renderTable
  const renderTable = () => {
    let usersList = users?.filter(
      (user) =>
        user.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );

    return usersList
      ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((user, index) => <UserItem key={user.id} user={user} />);
  };

  // Table config
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Tài Khoản</TableCell>
            <TableCell align="center">Họ Tên</TableCell>
            <TableCell align="center">Số điện thoại</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Tên loại người dùng</TableCell>
            <TableCell align="center">Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTable()}</TableBody>
      </Table>
      <TablePagination
        component="div"
        page={page}
        // count={users?.length}
        count={100}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
