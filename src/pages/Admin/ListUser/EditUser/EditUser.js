import * as React from "react";

// import "./AdminUsers.css";
import { useSelector, useDispatch } from "react-redux";
import { MenuItem, InputLabel, Select, FormControl } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CLOSE_MODAL, OPEN_MODAL } from "../../../../redux/actions/type/UserType";
import { actAddUser, actUpdateUser } from "../../../../redux/actions/UserAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditUser() {
  const dispatch = useDispatch();

  //handle Open Close Modal
  const open = useSelector((state) => state.UserReducer.open);
  const handleOpen = () => dispatch({ type: OPEN_MODAL });
  const handleClose = () => dispatch({ type: CLOSE_MODAL });

  //get value from Form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  //add User to Reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user !== null) {
      return dispatch(actUpdateUser(event)), handleClose();
    }
    return dispatch(actAddUser(event)), handleClose();
  };

  const [state, setState] = React.useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    email: "",
  });
  // add userInfo to Form
  const user = useSelector((state) => state.UserReducer.userInfo);
  React.useEffect(() => {
    if (user) {
      setState({
        taiKhoan: user.taiKhoan,
        matKhau: "",
        hoTen: user.hoTen,
        soDT: user.soDT,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        email: user.email,
      });
    } else {
      setState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        email: "",
      });
    }
  }, [user]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h1>{user ? "S???a Ng?????i D??ng" : "Th??m Ng?????i D??ng"}</h1>
            <div>
              {user ? (
                <TextField
                  required
                  name="taiKhoan"
                  label="T??i Kho???n"
                  disabled
                  value={state.taiKhoan}
                  onChange={handleChange}
                />
              ) : (
                <TextField
                  required
                  name="taiKhoan"
                  label="T??i Kho???n"
                  value={state.taiKhoan}
                  onChange={handleChange}
                />
              )}

              {user ? (
                <TextField
                  required
                  name="matKhau"
                  label="M???t Kh???u"
                  type="password"
                  value="KhongCoThongTin"
                  disabled
                  onChange={handleChange}
                />
              ) : (
                <TextField
                  required
                  name="matKhau"
                  label="M???t Kh???u"
                  type="password"
                  value={state.matKhau}
                  onChange={handleChange}
                />
              )}

              <TextField
                required
                name="hoTen"
                label="H??? T??n"
                value={state.hoTen}
                onChange={handleChange}
              />
              <TextField
                required
                name="soDT"
                label="S??? ??i???n tho???i"
                value={state.soDT}
                onChange={handleChange}
              />
              <TextField
                required
                name="email"
                label="Email"
                value={state.email}
                onChange={handleChange}
              />

              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel>M?? lo???i ng?????i d??ng</InputLabel>
                <Select
                  defaultValue=""
                  value={state.maLoaiNguoiDung}
                  label="M?? lo???i ng?????i d??ng"
                  name="maLoaiNguoiDung"
                  onChange={handleChange}
                >
                  <MenuItem value="GV">Gi??o V???</MenuItem>
                  <MenuItem value="HV">H???c vi??n</MenuItem>
                </Select>
              </FormControl>
            </div>
            <button
              type="submit"
              className="btn btn-add bg-danger"
              style={{ margin: "auto", width: "100%" }}
            >
              {user ? "S???a" : "Th??m"}
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
