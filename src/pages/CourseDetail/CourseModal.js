import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const CourseModal= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Thông báo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Đăng ký thành công khóa học</p>
      </Modal>
    </>
  );
};

export default CourseModal;
