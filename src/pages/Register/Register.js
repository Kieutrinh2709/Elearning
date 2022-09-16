import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/actions/UserAction';
import { Alert } from '@mui/material';


export default function Register() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
        },
        validationSchema: Yup.object().shape({
            soDt: Yup.number().required("SĐT không được bỏ trống !"),
            email: Yup.string().email('Email không đúng định dạng !').required('Email không được bỏ trống !'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !').min(6,'Họ tên tối thiểu 6 ký tự !').max(50,'Mật khẩu tối đa 50 ký tự !'),
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !').min(6,'Tài khoản tối thiếu 6 ký tự !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(3,'Mật khẩu tối thiểu 3 ký tự !').max(32,'Mật khẩu tối đa 32 ký tự !')
        }),
        onSubmit: (values) => {
            values.maLoaiNguoiDung = "HV";
            values.maNhom = "GP01";
            dispatch(registerAction(values));
        },
    });

    const onChange = (date, dateString) => {
        console.log(dateString);
    }
    if(localStorage.getItem("HV")){
        return <Redirect to="/" />
    }
    return (
        <div className="register">
            <div className="registerForm col-10 col-sm-10 col-md-8 col-lg-5">
                <h2 className="text-center"><NavLink to="/">Register</NavLink></h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-12 col-sm-6">
                            <input type="text" name="hoTen" className="form-control input__line" onChange={formik.handleChange} placeholder="Họ Tên" id="displayName" />
                            {formik.errors.hoTen? <Alert message={formik.errors.hoTen} type="error" showIcon /> : ''}
                            {/* <p className="text-danger">{formik.errors.hoTen}</p>  */}
                        </div>
                        <div className="col-12 col-sm-6">
                            <input type="email" name="email" className="form-control input__line" onChange={formik.handleChange} placeholder="Email" id="email" />
                            {formik.errors.email? <Alert message={formik.errors.email} type="error" showIcon /> : ''}
                            {/* <p className="text-danger">{formik.errors.email}</p>  */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12 col-sm-6">
                            <input type="text" name="taiKhoan" className="form-control input__line" onChange={formik.handleChange} placeholder="Tài Khoản" id="displayName" />
                            {/* <p className="text-danger">{formik.errors.taiKhoan}</p>  */}
                            {formik.errors.taiKhoan? <Alert message={formik.errors.taiKhoan} type="error" showIcon /> : ''}
                        </div>
                        <div className="col-12 col-sm-6">
                            <input type="password" name="matKhau" className="form-control input__line" onChange={formik.handleChange} placeholder="Mật Khẩu" id="email" />
                            {formik.errors.matKhau? <Alert message={formik.errors.matKhau} type="error" showIcon /> : ''}
                            {/* <p className="text-danger">{formik.errors.matKhau}</p>  */}
                        </div>
                    </div>
                    <div className="form-group row" >
                        {/* <div className="col-12 col-sm-4">
                            <DatePicker style={{ width: '100%' }} placeholder="Ngày Sinh" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.ngaySinh}</p> 
                        </div> */}
                        <div className="col-12 col-sm-6">
                            <input type="number" name="soDt" className="form-control input__line" onChange={formik.handleChange} placeholder="SĐT"  />
                            {formik.errors.soDt? <Alert message={formik.errors.soDt} type="error" showIcon /> : ''}
                            {/* <p className="text-danger">{formik.errors.soDt}</p>  */}
                        </div>
                    </div>
                    <div className="form-group row" >
                        <div className="col-sm-12">
                            <button type="submit" className="buttonRegister">Register</button>
                        </div>
                        <div className="col-sm-12 row" style={{ alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
                            <NavLink to="/login" className="registerLink"> Sign in now!</NavLink>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
