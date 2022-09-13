import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { TOKEN, TYPE_USER, USER_LOGIN } from '../../util/setting';
import logo from './../../asset/images/logo.png';
import avatar from './../../asset/images/avatar.png';
import button from './../../asset/images/icons/menu-options.png';
import next from './../../asset/images/icons/next-session.png';

export default function Header() {
    const { userName, userType } = useSelector(state => state.UserReducer);
    const [hidden, setHidden] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <div className="container-fluid" style={{ padding: '0', position: 'fixed', zIndex: '10001', top: '-1px' }}>
                <nav className="header">
                    <div className="header__logo">
                        <NavLink to="/"><img src={logo} /></NavLink>
                    </div>
                    <div className="header__nav">
                        <ul>
                            <li><a href="#home">Trang chủ</a> </li>
                            <li><a href="#courseList">Khóa học</a></li>
                            <li><a href="#news">Tin tức</a></li>
                        </ul>
                    </div>
                    <div className="header__detail">
                        <div className="header__detail__login">
                            {localStorage.getItem(USER_LOGIN) ? <span  style={{ display: 'flex' }}><img src={avatar} /><div className="dropdown">
                                <div className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {userName}
                                </div>
                                <div className="dropdown-menu user" aria-labelledby="dropdownMenuButton">
                                    {localStorage.getItem(TYPE_USER) == "\"GV\"" ? <NavLink className="dropdown-item" to="/admin">Dashboard</NavLink> : ''}
                                    <a href="/user-profiles/0" className="dropdown-item" to="" >Thông tin tài khoản</a>
                                    <a className="dropdown-item" onClick={() => {
                                        localStorage.removeItem(USER_LOGIN);
                                        localStorage.removeItem(TYPE_USER);
                                        localStorage.removeItem(TOKEN);
                                        window.location.reload();
                                    }}>Đăng Xuất</a>
                                </div>
                            </div></span> : <NavLink to="/login">
                                <img src={avatar}></img>
                                <span>Đăng Nhập</span>
                            </NavLink>}
                        </div>
                    </div>
                    <div onClick={() => { setHidden(true) }} className="header__button">
                        <img src={button} />
                    </div>
                </nav>
            </div>
            <div onClick={()=>{setHidden(false)}} className={hidden ? "header__dropdown active" : "header__dropdown"}>
                <div className={hidden ? "dropdown__content active" : "dropdown__content"}>
                    <div className="mobile__user ">
                        <img src={avatar} />
                        {localStorage.getItem(USER_LOGIN) ? <span>{userName}</span> : <NavLink to="/login">Đăng Nhập</NavLink>}
                        <span onClick={() => { setHidden(false) }} className="button__close">
                            <img src={next} />
                        </span>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">Trang chủ</a>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">Khóa học</a>
                    </div>
                    <div className="mobile__nav">
                        <a href="#">Tin Tức</a>
                    </div>
                    <div className="mobile__nav">
                        {localStorage.getItem(USER_LOGIN) ? <a onClick={() => {
                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(TYPE_USER);
                            localStorage.removeItem(TOKEN);
                            window.location.reload();
                        }}>Đăng Xuất</a> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}
