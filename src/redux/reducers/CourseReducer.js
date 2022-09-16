import { ADMIN_REGISTER_COURSE_FAILED, ADMIN_REGISTER_COURSE_REQUEST, ADMIN_REGISTER_COURSE_SUCCESS, COURSE_ADD_TO_CARD, COURSE_CATEGORY_SUCCESS, COURSE_DETAIL_SUCCESS, COURSE_FAILED, COURSE_LIST_SUCCESS, COURSE_REQUEST, GET_CODECOURSE, REGISTER_COURSE_FAILED, REGISTER_COURSE_REQUEST, REGISTER_COURSE_SUCCESS, USER_JOINED_FAILED, USER_JOINED_REQUEST, USER_JOINED_SUCCESS, USER_SELECTOR_FAILED, USER_SELECTOR_REQUEST, USER_SELECTOR_SUCCESS, USER_WAITING_FAILED, USER_WAITING_REQUEST, USER_WAITING_SUCCESS } from "../actions/type/CourseType";

const stateDefault = {
    loading: false,
    dataCourseList: null,
    error: null,
    courseDetailData: null,
    dataCourseCategory: null,
    courseListInCart: [],
    registerData: null,
    registerError: null,

    loadingUserSelector: false,
    dataUserSelector: null,
    errorUserSeletor: null,

    loadingUserWaiting: false,
    dataUserWaiting: null,
    errorUserWaiting: null,

    loadingUserJoined: false,
    dataUserJoined: null,
    errorUserJoined: null,

    courseCode: "",

}


export const CourseReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case COURSE_REQUEST: {
            const newState = { ...state, loading: true };
            state = newState;
            return { ...state }
        }

        case COURSE_LIST_SUCCESS: {
            const newState = { ...state, loading: false, dataCourseList: action.payload };
            state = newState;
            return { ...state }
        }

        case COURSE_FAILED: {
            const newState = { ...state, loading: false, error: action.payload };
            state = newState;
            return { ...state }
        }
        case COURSE_DETAIL_SUCCESS: {
            const newState = { ...state, loading: false, courseDetailData: action.payload };
            state = newState;
            return { ...state }
        }
        case COURSE_CATEGORY_SUCCESS: {
            const newState = { ...state, loading: false, dataCourseCategory: action.payload };
            state = newState;
            return { ...state }
        }

        case USER_SELECTOR_REQUEST: {
            state.loadingUserSelector = true;
            state.dataUserSelector = null;
            state.errorUserSeletor = null;
            return { ...state };
        }
        case USER_SELECTOR_SUCCESS: {
            state.loadingUserSelector = false;
            state.dataUserSelector = action.payload;
            state.errorUserSeletor = null;
            return { ...state };
        }
        case USER_SELECTOR_FAILED: {
            state.loadingUserSelector = false;
            state.dataUserSelector = null;
            state.errorUserSeletor = action.payload;
            return { ...state };
        }

        // user waiting
        case USER_WAITING_REQUEST: {
            state.loadingUserWaiting = true;
            state.dataUserWaiting = null;
            state.errorUserWaiting = null;
            return { ...state };
        } 
        case USER_WAITING_SUCCESS: {
            state.loadingUserWaiting = false;
            state.dataUserWaiting = action.payload;
            state.errorUserWaiting = null;
            return { ...state };
        }
        case USER_WAITING_FAILED: {
            state.loadingUserWaiting = false;
            state.dataUserWaiting = null;
            state.errorUserWaiting = action.payload;
            return { ...state };
        }

        // user joied
        case USER_JOINED_REQUEST: {
            state.loadingUserJoined = true;
            state.dataUserJoined = null;
            state.errorUserJoined = null;
            return { ...state };
        }
        case USER_JOINED_SUCCESS: {
            state.loadingUserJoined = false;
            state.dataUserJoined = action.payload;
            state.errorUserJoined = null;
            return { ...state };
        }
        case USER_JOINED_FAILED: {
            state.loadingUserJoined = false;
            state.dataUserJoined = null;
            state.errorUserJoined = action.payload;
            return { ...state };
        }

        // get code course
        case GET_CODECOURSE: {
            state.courseCode = action.payload;
            return { ...state };
        }

        // admin register course
        case ADMIN_REGISTER_COURSE_REQUEST: {
            state.loading = true;
            state.registerData = null;
            state.registerError = null;
            return { ...state };
        }
        case ADMIN_REGISTER_COURSE_SUCCESS: {
            state.loading = false;
            state.registerData = action.payload;
            state.registerError = null;
            return { ...state };
        }
        case ADMIN_REGISTER_COURSE_FAILED: {
            state.loading = false;
            state.registerData = null;
            state.registerError = action.payload;
            return { ...state };
        }
        case COURSE_ADD_TO_CARD: {
            const idx = state.courseListInCart.findIndex(course => course.maKhoaHoc === action.payload.maKhoaHoc);
            if (idx !== -1) {
                return { ...state }
            }
            const newCourseListInCart = [...state.courseListInCart, action.payload];
            console.log(newCourseListInCart);
            const newState = { ...state, courseListInCart: newCourseListInCart };
            state = newState;
            return { ...state }
        }
        case REGISTER_COURSE_REQUEST: {
            state.loading = true;
            state.registerData = null;
            state.registerError = null;
            return { ...state }
        }
        case REGISTER_COURSE_SUCCESS: {
            state.loading = false;
            state.registerData = action.payload;
            state.registerError = null;
            return { ...state }
        }
        case REGISTER_COURSE_FAILED: {
            state.loading = false;
            state.registerData = null;
            state.registerError = action.payload;
            return { ...state }
        }
        default:
            return { ...state };
    }
} 