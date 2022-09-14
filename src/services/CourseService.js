import { GROUP_ID } from "../util/setting";
import { baseService } from "./baseService";

export class CourseService extends baseService {

    constructor() {
        super();
    }
    getListCourse = (tenKhoaHoc) => {
        if (tenKhoaHoc.trim() !== '') {
            return this.get(
                `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&maNhom=${GROUP_ID}`
            )
        }
        return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=${GROUP_ID}`);
    };
    getListCategory = () => {
        return this.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
    }
    getCourseByCategory = (category) => {
        return this.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&maNhom=${GROUP_ID}`);
    }
    paginateCourse = () => {
        return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=3&maNhom=${GROUP_ID}`);
    }
    getDetailCourse = (maKhoaHoc) => {
        return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
    };
    updateCourse =(formData)=>{
        return this.put(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,formData )

    }
    addCourseUploadImg = (formData) => {
        return this.post(`api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, formData);
    };

    updateCourseUpload = (formData) => {
        return this.post(`api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`, formData);
    };

    deleteCourse = (maKhoaHoc) => {
        return this.delete(`api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
    };
    addCourse=(formData)=>{
        return this.post(`/api/QuanLyKhoaHoc/ThemKhoaHoc`, formData);
    }
    registerCourse=(courseInfor)=>{
        return this.post(`/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`, courseInfor);
    }
    cancelCourse = (courseInfor)=>{
        return this.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, courseInfor);
    }
    
}

export const courseService = new CourseService();