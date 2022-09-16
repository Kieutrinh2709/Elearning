import https from '../../services/baseService';
import { GROUP_ID } from '../../util/setting';
import { ADMIN_REGISTER_COURSE_FAILED, ADMIN_REGISTER_COURSE_REQUEST, ADMIN_REGISTER_COURSE_SUCCESS, COURSE_ADD_TO_CARD, COURSE_CATEGORY_SUCCESS, COURSE_DETAIL_SUCCESS, COURSE_FAILED, COURSE_LIST_SUCCESS, COURSE_REQUEST, GET_CODECOURSE, REGISTER_COURSE_FAILED, REGISTER_COURSE_REQUEST, REGISTER_COURSE_SUCCESS } from './type/CourseType';



export const actCourseSearch = (tenKhoaHoc) => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .get(
                `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&maNhom=${GROUP_ID}`
            )
            .then((result) => {
                dispatch(actCourseListSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actCourseFailed(error));
            });
    };
};

export const actCourseDelete = (maKhoaHoc) => {
    return (dispatch) => {
        // dispatch(actCourseRequest());

        https
            .delete(
                `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`
            )
            .then((result) => {
                alert(result.data);
                dispatch(actCourseAllGet());
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };
};

export const actCourseAdd = (data, form) => {
    return (dispatch) => {
        dispatch(actCourseRequest());
        https
            .post(
                `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`,
                data
            )
            .then(() => {
                dispatch(actCourseImageAdd(form));
                console.log("Add course success");
                dispatch(actCourseAllGet());
            })
            .catch((error) => {
                console.log(error.response.data);
                dispatch(actCourseFailed(error));
            });
    };
};
const actCourseImageUpdate = (form) => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .post(
                `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`,
                form
            )
            .then(() => {
                console.log("Update image success");
            })
            .catch((error) => {
                console.log(error.response.data);
                dispatch(actCourseFailed(error));
            });
    };
};
export const actCourseUpdate = (data, form) => {
    return (dispatch) => {
        dispatch(actCourseRequest());
        https
            .post(
                `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,
                data
            )
            .then(() => {
                dispatch(actCourseImageUpdate(form));
                console.log("Update course success");
                dispatch(actCourseAllGet());
            })
            .catch((error) => {
                console.log(error.response.data);
                dispatch(actCourseFailed(error));
            });
    };
};




const actCourseImageAdd = (form) => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .post(
                `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
                form
            )
            .then(() => {
                console.log("Add image success");
            })
            .catch((error) => {
                console.log(error.response.data);
                dispatch(actCourseFailed(error));
            });
    };
};
export const actCourseCategoryGet = () => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .get("QuanLyKhoaHoc/LayDanhMucKhoaHoc")
            .then((result) => {
                dispatch(actCourseCategorySuccess(result.data));
            })
            .catch((error) => {
                dispatch(actCourseFailed(error));
            });
    };
};

// Lấy danh sách tất cả khóa học
export const actCourseAllGet = () => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)
            .then((result) => {
                dispatch(actCourseListSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actCourseFailed(error));
            });
    };
};

// Lấy danh sách khóa học theo danh mục
export const actCourseByCategoryGet = (category) => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .get(
                `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=${GROUP_ID}`
            )
            .then((result) => {
                dispatch(actCourseListSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actCourseFailed(error));
            });
    };
};

// Lấy danh sách khóa học cho trang home
export const actCourseListHomeGet = () => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .get(
                `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=3&MaNhom=${GROUP_ID}`
            )
            .then((result) => {
                dispatch(actCourseListSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actCourseFailed(error));
            });
    };
};


const actCourseCategorySuccess = (data) => {
    return {
        type: COURSE_CATEGORY_SUCCESS,
        payload: data,
    };
};

const actCourseListSuccess = (data) => {
    return {
        type: COURSE_LIST_SUCCESS,
        payload: data,
    };
};

export const actCourseDetailGet = (maKhoaHoc) => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        https
            .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
            .then((result) => dispatch(actCourseDetailSuccess(result.data)))
            .catch((error) => dispatch(actCourseFailed(error)));
    };
};

export const actCourseAddToCard = (khoaHoc) => {
    return (dispatch) =>
        dispatch({
            type: COURSE_ADD_TO_CARD,
            payload: khoaHoc,
        });
};

const actCourseRequest = () => {
    return {
        type: COURSE_REQUEST,
    };
};
const actCourseDetailSuccess = (data) => {
    return {
        type: COURSE_DETAIL_SUCCESS,
        payload: data,
    };
};
const actCourseFailed = (error) => {
    return {
        type: COURSE_FAILED,
        payload: error,
    };
};

// action register course
export const actRegisterCourse = (courseInfo) => {
    return (dispatch) => {
        dispatch(actRegisterCourseRequest());
        https
            .post(`QuanLyKhoaHoc/DangKyKhoaHoc`, courseInfo)
            .then((result) => {
                dispatch(actRegisterCourseSuccess(result.data));
                console.log(result.data);
            })
            .catch((error) => {
                dispatch(actRegisterCourseFailed(error));
                console.log(error);
            });
    };
};

const actRegisterCourseRequest = () => {
    return {
        type: REGISTER_COURSE_REQUEST,
    };
};
const actRegisterCourseSuccess = (data) => {
    return {
        type: REGISTER_COURSE_SUCCESS,
        payload: data,
    };
};
const actRegisterCourseFailed = (error) => {
    return {
        type: REGISTER_COURSE_FAILED,
        payload: error,
    };
};
// action register course
export const actAdminRegisterCourse = (courseInfo) => {
    return (dispatch) => {
        dispatch(actAdminRegisterCourseRequest());
        https
            .post("QuanLyKhoaHoc/GhiDanhKhoaHoc", courseInfo)
            .then((result) => {
                dispatch(actAdminRegisterCourseSuccess(result.data));
                alert('Xác nhận thành công!')
            })
            .catch((error) => {
                dispatch(actAdminRegisterCourseFailed(error));
                console.log(error);
            });
    };
};
const actAdminRegisterCourseRequest = () => {
    return {
        type: ADMIN_REGISTER_COURSE_REQUEST,
    };
};
const actAdminRegisterCourseSuccess = (data) => {
    return {
        type: ADMIN_REGISTER_COURSE_SUCCESS,
        payload: data,
    };
};
const actAdminRegisterCourseFailed = (error) => {
    return {
        type: ADMIN_REGISTER_COURSE_FAILED,
        payload: error,
    };
};
export const actGetCodeCourse = (courseCode) => {
    return {
        type: GET_CODECOURSE,
        payload: courseCode,
    };
};
