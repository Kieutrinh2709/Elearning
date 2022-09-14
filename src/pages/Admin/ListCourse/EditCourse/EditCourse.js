import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Upload, DatePicker, Select } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { GROUP_ID } from '../../../../util/setting';
import { addCourseAction, getCourseDetailAction, updateCourseAction } from '../../../../redux/actions/CourseAction';
import { useFormik } from 'formik';
const { TextArea } = Input;
const { Option } = Select;
const EditCourse = (props) => {

  const { courseDetail } = useSelector(state => state.CourseReducer);
  const [imgSrc, setImgSrc] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;

    dispatch(getCourseDetailAction(id));


  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: courseDetail.maKhoaHoc,
      tenKhoaHoc: courseDetail.tenKhoaHoc,
      biDanh: courseDetail.biDanh,
      luotXem: courseDetail.luotXem,
      maNhom: GROUP_ID,
      hinhAnh: courseDetail.hinhAnh,
      ngayTao: courseDetail.ngayTao,
      maDanhMucKhoaHoc: courseDetail.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: courseDetail.taiKhoanNguoiTao,
      moTa: courseDetail.moTa
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
      dispatch(updateCourseAction(formData));

    }
  })


  const handleChangeDatePicker = (value) => {
    let ngayTao = moment(value);
    formik.setFieldValue('ngayTao', ngayTao);

  }


  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    }
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

    }
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

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
      <h3>Cập nhật khóa học</h3>

      <Form.Item
        label="Tên Khóa Học"
        name="tenKhoaHoc"
        rules={[{ required: true, message: 'Hãy nhập tên khóa học!' }]}
        labelCol={{ span: 0 }}
      >
        <Input name="tenKhoaHoc" onChange={formik.handleChange} value={formik.values.tenKhoaHoc} />
      </Form.Item>
      <Form.Item
        name="hinhAnh"
        label="Hình Ảnh:"
      >
        <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
          <br />
          <img width={100} height={100} src={imgSrc === '' ? courseDetail.hinhAnh : imgSrc} />
      </Form.Item>
      <Form.Item
        label="Bí Danh"
        name="biDanh"
        // rules={[{ required: true, message: 'Hãy nhập bí danh!' }]}
        labelCol={{ span: 8 }}
      >
         <Input name="biDanh" onChange={formik.handleChange} value={formik.values.biDanh} />
      </Form.Item>
      <Form.Item label="Ngày taọ" >
      <DatePicker onChange={handleChangeDatePicker} format="DD/MM/YYYY" value={moment(formik.values.ngayTao)} />
      </Form.Item>
      <Form.Item
        label="Người Tạo"
        name="taiKhoanNguoiTao"
        rules={[{ required: true, message: 'Hãy nhập tên người tạo!' }]}
        labelCol={{ span: 0 }}
      >
         <Input name="taiKhoanNguoiTao" onChange={formik.handleChange} value={formik.values.taiKhoanNguoiTao} />
      </Form.Item>
      <Form.Item
        label="Mô Tả"
        name="moTa"
        rules={[{ required: true, message: 'Hãy nhập mô tả!' }]}
        labelCol={{ span: 4 }}
      >
         <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
      </Form.Item>
      <Form.Item label="Danh mục khóa học"
        name="maDanhMucKhoaHoc"
        rules={[{ required: true, message: 'Hãy nhập danh mục khóa học!' }]}
        labelCol={{ span: 8 }}>
        <Select onChange={handleChange} >
          <Option value="BackEnd">Lập trình Backend</Option>
          <Option value="FrontEnd">Lập trình Front end</Option>
          <Option value="FullStack">Lập trình Full Stack</Option>
          <Option value="Design">Thiết kế Web</Option>
          <Option value="DiDong">Lập trình di động</Option>
          <Option value="TuDuy">Tư duy lập trình</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="submit" danger htmlType="submit" className="mr-5">
          Submit
        </Button>
      </Form.Item>
    </Form>

  )
}
export default EditCourse;