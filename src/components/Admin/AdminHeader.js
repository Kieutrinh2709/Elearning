import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Image } from 'antd';
import { UserSwitchOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router';
// import logo from '../../../asset/images/logo.png'
import { Select } from 'antd';
import { TOKEN, TYPE_USER, USER_LOGIN } from '../../util/setting';

const { Option } = Select;


export default function AdminHeader() {
    const username = localStorage.getItem(USER_LOGIN) ? JSON.parse(localStorage.getItem(USER_LOGIN)).taiKhoan : '';
    const handleChange = (value) => {
        if (value == 'logout') {
    
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TYPE_USER);
            localStorage.removeItem(TOKEN);
            window.location.reload();
    
        }
    }
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/" />
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light navAdmin">
            {/* <NavLink className="navbar-brand" to="/"><img src={logo} width={50} height={50} /></NavLink> */}
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId navAdminItem">
                <form className="form-inline my-2 my-lg-0 mr-auto ">
                    <input className="form-control navSearchInput mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success navSearchButton my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav  mt-2 mr-5 mt-lg-0">
                    <li className="user">
                        <Avatar size="large" style={{ color: '#F5F5F5', backgroundColor: '#000000', marginRight: "10px" }} icon={<UserSwitchOutlined />} />
                        <Select value={username} style={{ width: 120 }} onChange={handleChange}>
                            <Option value="logout" >Logout</Option>
                        </Select>
                    </li>
                </ul>
            </div>
        </nav>
    )


}
