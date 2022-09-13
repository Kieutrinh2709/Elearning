import { GROUP_ID } from "../util/setting";
import { baseService } from "./baseService";
export class UserService  extends baseService{

    constructor() {
        super();
    }

    login = (userLogin) => { 
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,userLogin);
    }  
    register = (userRegister) => { 
        return this.post(`/api/QuanLyNguoiDung/DangKy`,userRegister);
    } 

    getDetailUser = (userLogin) => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan', userLogin);
    }
    getListUser = (taiKhoan='') => {
        if(taiKhoan.trim()!=''){
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&taiKhoan=${taiKhoan}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)

    }
    searchUser = (tuKhoa='') => {
        if(tuKhoa.trim()!=''){
            return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tuKhoa}`)
        }
        return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}`)

    }
    deleteUser = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`);
    }
    insertUser = (userInfor) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,userInfor);
    } 
    updateUser = (userUpdate) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,userUpdate);
    }
    getListUserSelector = (keyCode)=>{
        return this.post(`/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`, keyCode);
    }
    getListUserWaiting = (keyCode)=>{
        return this.post(`/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`, keyCode);
    }
    getListUserJoined = (keyCode)=>{
        return this.post(`/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`, keyCode);
    }
  
}



export const userService = new UserService();