import axios from 'axios';
import { GROUP_ID, TOKEN } from '../../util/setting';

import Swal from 'sweetalert2';
import { getDetailUserAction } from './UserAction';
import { COURSE_ADD_TO_CART, GET_KEYWORD } from './type/CourseType';

export const getListCourseAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=${GROUP_ID}`,
                method: 'GET'
            });
            dispatch({ type: 'GET_LIST_COURSE', listCourse: result.data, isLoading: false })
        } catch (errors) {
            console.log(errors);
        }
    }
}
export const getListCategoryAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
                method: 'GET'
            });
            dispatch({ type: 'GET_LIST_CATEGORY', listCategory: result.data, isLoading: false })
        } catch (errors) {
            console.log(errors);
        }
    }
}
export const getCourseByCategoryAction = (category) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&maNhom=${GROUP_ID}`,
                method: 'GET',
                data: category
            });
            dispatch({ type: 'GET_LIST_COURSE_BY_CATEGORY', listCourseByCategory: result.data, isLoading: false })
        } catch (errors) {
            console.log(errors);
        }
    }
};
export const paginateAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=3&maNhom=${GROUP_ID}`,
                method: 'GET'
            });
            dispatch({ type: 'INTO_PAGINATION', paginationData: result.data, isLoading: false })
        } catch (errors) {
            console.log(errors);
        }
    }
};
export const searchCourseAction = (tenKhoaHoc) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUP_ID}`,
                method: 'GET',
            });
            dispatch(getListCourseAction(result.data));
        } catch (errors) {
            console.log(errors);
        }
    }
};
export const getCourseDetailAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
                method: 'GET'
            })
            dispatch({ type: 'GET_DETAIL_COURSE', detailCourse: result.data, isLoading: false });
        } catch (errors) {
            console.log(errors);
        }
    }
}
export const addCourseToCart = (khoaHoc) => {
    return (dispatch) =>
      dispatch({
        type: COURSE_ADD_TO_CART,
        payload: khoaHoc,
      });
};

export const updateCourseAction = (courseUpdate) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc',
                method: 'PUT',
                data: courseUpdate,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,

                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Cập nhật thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if(result.isConfirmed){
                        dispatch(getListCourseAction())
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Cập nhật thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}
// const addImgCourseAction = (form) => {
//     return async (dispatch) => {
//         try {
//             let result = await axios({
//                 url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
//                 method: 'POST',
//                 data: form,
//             })
//             if (result.status === 200) {
//                 Swal.fire({
//                     title: 'Thêm hình ảnh thành công!',
//                     icon: 'success',
//                     confirmButtonColor: '#44c020'
//                 }).then((result)=>{
//                     if(result.isConfirmed){
                        
//                     }
//                 })
//             }
            
//         } catch (errors) {
//             console.log(errors);
//         }
//     }
    
// };

export const addCourseAction = (courseAdd) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc',
                method: 'POST',
                data: courseAdd,
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Thêm thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        // dispatch(addImgCourseAction(form));
                        dispatch(getListCourseAction());
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Thêm thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}

export const deleteCourseAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Xóa thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch(getListCourseAction())
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Xóa thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}
export const registerCourseAction = (courseInfor) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc',
                method: 'POST',
                data: courseInfor,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Đăng ký khóa học thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch({type:'REGISTER_COURSE', registerCourse: result.data, isLoading: false});                      
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Đăng ký khóa học thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
};

export const cancelCourseAction = (courseInfor) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',
                method: 'POST',
                data: courseInfor,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: 'Hủy ghi danh thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result)=>{
                    if(result.isConfirmed){
                        dispatch({type:'CANCEL_REGISTER_COURSE', cancelCourse: result.data, isLoading: false});
                        dispatch(getDetailUserAction(courseInfor.taikhoan));                      
                    }
                })
            }
        } catch (errors) {
            console.log('lỗi', errors);
            Swal.fire({
                title: 'Hủy ghi danh thất bại!',
                text: `${errors.response?.data}`,
                icon: 'error',
            })
        }
    }
}
export const getKeyWordAction = (keyword) => {
    return {
      type: GET_KEYWORD,
      payload: keyword,
    };
};
