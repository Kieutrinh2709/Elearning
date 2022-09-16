import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { actUpdateProfile } from "../../redux/actions/UserAction";


export default function UserInfor(props) {
 
  const { user } = props;
  const [userProfile, setUserProfile] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "HV",
    email: "",
  });
  useEffect(()=>{
    if(user){
      setUserProfile({
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        hoTen: user.hoTen,
        soDT: user.soDT,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        email: user.email,
      })
    }
  },[user])

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const handleUpdate = (user) => {
    dispatch(actUpdateProfile(user));
  };


  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "55%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          label="Họ và tên"
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          name="hoTen"
          value={userProfile.hoTen}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <TextField
          required
          label="Số điện thoại"
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          name="SoDt"
          value={userProfile.soDt}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <TextField
          required
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          name="email"
          value={userProfile.email}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <TextField
          required
          label="Mật khẩu"
          type="password"
          name="matKhau"
          InputLabelProps={{
            shrink: true,
          }}
          value={userProfile.matKhau}
          onChange={handleOnChange}
        />
      </div>
      <Button
        onClick={handleUpdate(userProfile)}
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Cập nhật
      </Button>
    </Box>
  );
}
