import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserAction } from "../../redux/actions/UserAction";

export default function UserInfo(props) {
  const { user } = props;
  const [userProfile, setUserProfile] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "HV",
    maNhom: "GP04",
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
        maNhom: user.maNhom,
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
    dispatch(updateUserAction(user));
  };


  return (
    <Form
      autoComplete="off"
    >
      <div>
        <Form.Item
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
        <Form.Item
          required
          label="Số điện thoại"
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          name="SoDT"
          value={userProfile.soDT}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <Form.Item
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
        <Form.Item
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
    </Form>
  );
}
