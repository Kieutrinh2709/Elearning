import React, { useEffect, useState } from 'react';
import './FormCourse.css';
import { Modal, Row, Col, Form, Input, Button, Upload, DatePicker, Select } from 'antd';
import moment from 'moment';
import logo from '../../../../asset/images/logo.png';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { GROUP_ID } from '../../../../util/setting';
import { addCourseAction, updateCourseAction } from '../../../../redux/actions/CourseAction';
const { TextArea } = Input;
const { Option } = Select;
export default function FormEditFilm(props) {

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const courseUpdate = props.courseUpdate;

  useEffect(() => {
    if (props.type == 'update') {
      form.setFieldsValue({
        maKhoaHoc: courseUpdate.maKhoaHoc,
        tenKhoaHoc: courseUpdate.tenKhoaHoc,
        biDanh: courseUpdate.biDanh,
        luotXem: courseUpdate.luotXem,
        danhGia: courseUpdate.danhGia,
        maNhom: GROUP_ID,
        hinhAnh: courseUpdate.hinhAnh,
        ngayTao: moment(courseUpdate.ngayTao, 'YYYY-MM-DD'),
        maDanhMucKhoaHoc: courseUpdate.maDanhMucKhoaHoc,
        taiKhoanNguoiTao: courseUpdate.taiKhoanNguoiTao,
        moTa: courseUpdate.moTa
      });
    } else {
      form.setFieldsValue({
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: "",
        danhGia: "",
        hinhAnh: "",
        maNhom: GROUP_ID,
        ngayTao: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: "",
      });
    }

  }, [props.type, courseUpdate])


  const onFinish = (values) => {

    // console.log('success', values['hinhAnh'][0])
    if (props.type == 'update') {
      let data = {
        ...values,
        'hinhAnh': values['hinhAnh'][0].originFileObj,
        'ngayTao': moment(values['ngayTao']).format("DD/MM/YYYY"),
        'maNhom': 'GP01'

      }
      console.log('update', data);
      var form_data = new FormData();
      for (var key in data) {
        form_data.append(key, data[key]);
      }
      dispatch(updateCourseAction(form_data));
    } else {
      let data = {
        ...values,
        'hinhAnh': values['hinhAnh'][0].originFileObj,
        'ngayTao': moment(values['ngayTao']).format("DD/MM/YYYY"),
        'maNhom': 'GP01'
      }
      var form_data = new FormData();
      for (var key in data) {
        form_data.append(key, data[key]);
      }
      dispatch(addCourseAction(form_data));
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  return (
    <Modal title={<div className="modalTitle">
      <img className="modalImg" src={logo} />
      <span className="modalInform">{props.type == 'update' ? 'CHỈNH SỬA KHÓA HỌC' : 'THÊM KHÓA HỌC'}</span>
    </div>} visible={props.show}
      footer={null} onCancel={props.close}
    >
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        initialValues={{}}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label="Mã Khóa Học"
              name="maKhoaHoc"
              rules={[{ required: true, message: 'Hãy nhập mã khóa học!' }]}
              labelCol={{ span: 8 }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tên Khóa Học"
              name="tenKhoaHoc"
              rules={[{ required: true, message: 'Hãy nhập tên khóa học!' }]}
              labelCol={{ span: 0 }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="hinhAnh"
              label="Hình Ảnh:"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: 'Hãy tải hình ảnh khóa học!' }]}
              labelCol={{ span: 8 }}
            >
              <Upload listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Bí Danh"
              name="biDanh"
              // rules={[{ required: true, message: 'Hãy nhập bí danh!' }]}
              labelCol={{ span: 8 }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="ngayTao" label="Ngày K/C" labelCol={{ span: 8 }} rules={[{ required: true, message: 'Hãy chọn ngày tạo!' }]}>
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Người Tạo"
              name="taiKhoanNguoiTao"
              rules={[{ required: true, message: 'Hãy nhập tên người tạo!' }]}
              labelCol={{ span: 0 }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Đánh Giá"
              name="danhGia"
              rules={[{ required: true, message: 'Hãy nhập đánh giá!' }]}
              labelCol={{ span: 8 }}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Mô Tả"
          name="moTa"
          rules={[{ required: true, message: 'Hãy nhập mô tả!' }]}
          labelCol={{ span: 4 }}
        >
          <TextArea />
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
          <Button type="primary" danger htmlType="submit">
            Submit
          </Button>
          <Button onClick={props.close}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>

  )
}