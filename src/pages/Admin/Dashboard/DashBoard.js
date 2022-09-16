import React from "react";



export default function DashBoard() {

    const hoTen = JSON.parse(localStorage.getItem("GV")).hoTen;
    console.log(hoTen);
    return (
        <div >
            <div>`Hi! ${hoTen}`</div>
        </div>
    );
}
