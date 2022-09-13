import { Alert, Modal } from '@mui/material';
import React, { useState } from 'react'
import logo from './../../asset/images/logo.png';

export default function Infom(props) {
    const [isModalVisible, setIsModalVisible] = useState(true);
    
    const handleOk = () => {
        setIsModalVisible(false);
        window.location.reload();
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Modal title={<div className="modalTitle">
                <img className="modalImg" src={logo} />
                <span className="modalInform">THÔNG BÁO</span>
            </div>} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Alert
                    message={props.message}
                    type={props.type}
                    showIcon
                />
            </Modal>
        </div>
    )
}
