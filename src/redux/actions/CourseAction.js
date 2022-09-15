import Swal from 'sweetalert2';
import { getDetailUserAction } from './UserAction';
import { CANCEL_REGISTER_COURSE, COURSE_ADD_TO_CART, GET_DETAIL_COURSE, GET_KEYWORD, GET_LIST_CATEGORY, GET_LIST_COURSE, GET_LIST_COURSE_BY_CATEGORY, INTO_PAGINATION, REGISTER_COURSE } from './type/CourseType';
import { courseService } from '../../services/CourseService';

export const getListCourseAction = (tenKhoaHoc = '') => {
    return async (dispatch) => {
        try {
            let result = await courseService.getListCourse(tenKhoaHoc);
            dispatch({
                type: GET_LIST_COURSE,
                listCourse: result.data,
                isLoading: false
            })
        } catch (errors) {
            console.log(errors);
        }
    }
}
export const getListCategoryAction = () => {
    return async (dispatch) => {
        try {
            let result = await courseService.getListCategory();
            dispatch({
                type: GET_LIST_CATEGORY,
                listCategory: result.data,
                isLoading: false
            })
        } catch (errors) {
            console.log(errors);
        }
    }
}
export const getCourseByCategoryAction = (category) => {
    return async (dispatch) => {
        try {
            let result = await courseService.getCourseByCategory(category);
            dispatch({
                type: GET_LIST_COURSE_BY_CATEGORY,
                listCourseByCategory: result.data,
                isLoading: false
            })
        } catch (errors) {
            console.log(errors);
        }
    }
};
export const paginateAction = () => {
    return async (dispatch) => {
        try {
            let result = await courseService.paginateCourse();
            dispatch({
                type: INTO_PAGINATION,
                paginationData: result.data,
                isLoading: false
            })
        } catch (errors) {
            console.log(errors);
        }
    }
};

export const getCourseDetailAction = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            let result = await courseService.getDetailCourse(maKhoaHoc);
            dispatch({
                type: GET_DETAIL_COURSE,
                detailCourse: result.data,
                isLoading: false
            });
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

export const updateCourseAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await courseService.updateCourse(formData);
            if (result.status === 200) {
                Swal.fire({
                    title: 'Cập nhật thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
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
};
export const addCourseUploadImgAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await courseService.addCourseUploadImg(formData);
            if (result.status === 200) {
                Swal.fire({
                    title: 'Thêm khóa học thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(getListCourseAction());

                    }
                })
            }

        } catch (errors) {
            console.log(errors);
        }
    }

};

export const addCourseAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await courseService.addCourse(formData);
            if (result.status === 200) {
                Swal.fire({
                    title: 'Thêm thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
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
            let result = await courseService.deleteCourse(maKhoaHoc);
            if (result.status === 200) {
                Swal.fire({
                    title: 'Xóa thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
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
            let result = await courseService.registerCourse(courseInfor);
            if (result.status === 200) {
                Swal.fire({
                    title: 'Đăng ký khóa học thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch({
                            type: REGISTER_COURSE,
                            registerCourse: result.data,
                            isLoading: false
                        });
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
            let result = await courseService.cancelCourse(courseInfor);
            if (result.status === 200) {
                Swal.fire({
                    title: 'Hủy ghi danh thành công!',
                    icon: 'success',
                    confirmButtonColor: '#44c020'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch({
                            type: CANCEL_REGISTER_COURSE,
                            cancelCourse: result.data,
                            isLoading: false
                        });
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
