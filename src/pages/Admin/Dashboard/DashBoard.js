import React from "react";


export default function DashBoard() {

    const hoTen = JSON.parse(localStorage.getItem("AdminClient")).hoTen;
    return (
        <div className={{ marginLeft: '250px', padding: '15px' }}>
            <div className={{ background: 'url(./img/dashboard.jpg)', backgroundSize: 'cover', width: '100%', height: '90vh' }}>Welcome ${hoTen}</div>
        </div>
    );
}
