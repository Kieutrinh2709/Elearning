import React from "react";
import { TYPE_USER, USER_LOGIN } from "../../../util/setting";


export default function DashBoard() {

    const hoTen = JSON.parse(localStorage.getItem(USER_LOGIN) && localStorage.getItem(TYPE_USER) === "\"GV\"").hoTen;
    return (
        <div className={{ marginLeft: '250px', padding: '15px' }}>
            <div className={{ background: 'url(./img/dashboard.jpg)', backgroundSize: 'cover', width: '100%', height: '90vh' }}>Welcome {hoTen}</div>
        </div>
    );
}
