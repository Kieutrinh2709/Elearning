import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Upload, DatePicker, Select } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { GROUP_ID } from '../../../../util/setting';
import { addCourseAction, addCourseUploadImgAction, getCourseDetailAction, updateCourseAction } from '../../../../redux/actions/CourseAction';
import { useFormik } from 'formik';
const { TextArea } = Input;
const { Option } = Select;
const NewCourse = (props) => {

    const [imgSrc, setImgSrc] = useState('');

    const dispatch = useDispatch();
    // useEffect(() => {
    //     let { id } = props.match.params;

    //     dispatch(getCourseDetailAction(id));


    // }, [])

    const formik = useFormik({
        initialValues: {
            maKhoaHoc: '',
            tenKhoaHoc: '',
            biDanh: '',
            luotXem: 0,
            maNhom: GROUP_ID,
            hinhAnh: {},
            ngayTao: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: '',
            moTa: '',
        },
        onSubmit: (values) => {
            console.log('values', values);
            values.maNhom = GROUP_ID;

            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);

                    }
                }
            }
            dispatch(addCourseUploadImgAction(formData));

        }
    })


    const handleChangeDatePicker = (value) => {
        let ngayTao = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayTao', ngayTao);

    }

    const handleChangeFile = async (e) => {

        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            await formik.setFieldValue('hinhAnh', file);
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {

                setImgSrc(e.target.result);
            }
            formik.setFieldValue('hinhAnh', file);

        }
    }
    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // }

    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
        >
            <h3>Thêm khóa học mới</h3>
            <Form.Item
                label="Tên Khóa Học"
            >
                <Input name="tenKhoaHoc" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name="hinhAnh"
                label="Hình Ảnh:"
            >
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  onChange={handleChangeFile}
                />
                <br />
                <div style={{ width: 200, height: "auto" }}>
                  <img src={imgSrc} alt="" />
                </div>
            </Form.Item>
            <Form.Item
                label="Bí Danh"
                name="biDanh"
                // rules={[{ required: true, message: 'Hãy nhập bí danh!' }]}
                
            >
                <Input name="biDanh" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Ngày taọ" >
                <DatePicker onChange={handleChangeDatePicker} format="DD/MM/YYYY"  />
            </Form.Item>
            <Form.Item
                label="Người Tạo"
                name="taiKhoanNguoiTao"
            >
                <Input name="taiKhoanNguoiTao"  onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                label="Mô Tả"
                name="moTa"
                rules={[{ required: true, message: 'Hãy nhập mô tả!' }]}
                labelCol={{ span: 4 }}
            >
                <Input name="moTa" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Danh mục khóa học"
                name="maDanhMucKhoaHoc"
                rules={[{ required: true, message: 'Hãy nhập danh mục khóa học!' }]}
                >
                <Select onChange={(values)=> formik.setFieldValue('maDanhMucKhoaHoc', values )} >
                    <Option value="BackEnd">Lập trình Backend</Option>
                    <Option value="FrontEnd">Lập trình Front end</Option>
                    <Option value="FullStack">Lập trình Full Stack</Option>
                    <Option value="Design">Thiết kế Web</Option>
                    <Option value="DiDong">Lập trình di động</Option>
                    <Option value="TuDuy">Tư duy lập trình</Option>
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="submit" danger className="mr-5">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}
export default NewCourse;