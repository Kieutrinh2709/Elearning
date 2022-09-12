import React, { Fragment, useState } from 'react'
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import './AdminTemplate.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from '../../../src/asset/images/favicon.co.png';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    InsertRowBelowOutlined,
} from '@ant-design/icons';
import { TYPE_USER } from '../../util/setting';
import AdminHeader from '../../components/Admin/AdminHeader';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {

    const [state, setState] = useState({ collapsed: false })
    const collapsed = state.collapsed;
    const getPath = props.location.pathname;
    const path = getPath.split("/");
    const defaultKey = (path) => {
        let key = "1";
        if (path == 'list-course') {
            key = "7";
        }
        if (path == 'list-user' || path == 'i-detail') {
            key = "3";
        }
        return key;
    }
    const getLink = (path, index) => {
        let result = '';
        for (let i = 0; i < index; i++) {
            result += `/${path[i]} `;
        }
        console.log(result);
        return result;
    }
    const renderPath = () => {
        let arrR = [];
        for (let i = 0; i < path.length; i++) {
            let data = <Breadcrumb.Item><NavLink to={`/${path[i - 1]}/${path[i]}`}>{path[i]}</NavLink></Breadcrumb.Item>
            arrR.push(data);
        }
        return arrR;
    }
    const onCollapse = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return <Route path={props.path} exact render={(propsRoute) => {
        return localStorage.getItem(TYPE_USER) === "\"GV\"" ? <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    {/* <div className="logo" /> */}
                    <Menu theme="dark" defaultSelectedKeys={[defaultKey(path[2])]} mode="inline" style={{ height: '200px' }}>
                        <Menu.Item id="logoAdmin" icon={<img src={logo} />} >
                            <NavLink to="/">  ADMIN MANAGER</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Notifications
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Quản Lý Người Dùng">
                            <Menu.Item key="3"><NavLink to="/admin/list-user">Danh Sách Người Dùng</NavLink></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<InsertRowBelowOutlined />} title="Quản Lý Khóa Học">
                            <Menu.Item key="7"><NavLink to="/admin/list-course">Danh Sách Khóa Học</NavLink></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <AdminHeader />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                            {path.map((v, index) => {
                                return <Breadcrumb.Item><NavLink key={index} to={`/${v}`}>{v}</NavLink></Breadcrumb.Item>
                            })
                            }
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, height: '90%' }}>
                            <props.component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> ©2021 Created by antd </Footer>
                </Layout>
            </Layout>
        </Fragment> : <Redirect to="/" />
    }} />
}