
import { CANCEL_COURSE_FAILED, CANCEL_COURSE_REQUEST, CANCEL_COURSE_SUCCESS, CLOSE_MODAL, GETKEYWORD, GET_USERINFO_REQUEST, LOGIN, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, ONSUBMIT_FAILED, ONSUBMIT_REQUEST, ONSUBMIT_SUCCESS, OPEN_MODAL, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_PROFILE_FAILED, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../actions/type/UserType";

// let userLogin = '';

// if (localStorage.getItem(USER_LOGIN)) {
//     let usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

//     userLogin = usLogin.taiKhoan;
// }
// const makeid = (length) => {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() *
//             charactersLength));
//     }
//     return result;
// }

// console.log(makeid(5));
const stateDefault = {
    loading: false,
    data: null,
    listUser: null,

    loadingUser: false,
    dataUser: null,
    errorUser: null,

    loadingUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    loadingCancel: false,
    dataCancel: null,
    errorCancel: null,

    error: null,
    userInfo: null,
    open: false,
    keyword: "",

}

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case LOGIN_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case LOGIN_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }
        case REGISTER_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }
        case REGISTER_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }
        case REGISTER_FAILED:{
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }
        case USER_LIST_REQUEST: {
            state.loading = true;
            state.listUser = null;
            state.error = null;
            return { ...state };
        }
        case USER_LIST_SUCCESS: {
            state.loading = false;
            state.listUser = action.payload;
            state.error = null;
            return { ...state };
        }
        case USER_LIST_FAILED: {
            state.loading = false;
            state.listUser = null;
            state.error = action.payload;
            return { ...state };
        }

        //SUBMIT USER
        case ONSUBMIT_REQUEST: {
            state.loading = true;
            state.error = null;
            return { ...state };
        }
        case ONSUBMIT_SUCCESS: {
            state.loading = false;

            let userList = [...state.listUser.items];
            if (action.payload.taiKhoan) {
                const index = userList.findIndex(
                    (user) => user.taiKhoan === action.payload.taiKhoan
                );
                if (index !== -1) {
                    userList[index] = action.payload;
                } else {
                    // ADD
                    const userNew = { ...action.payload };
                    userList.push(userNew);
                }
            }
            state.listUser.items = userList;
            state.error = null;
            return { ...state };
        }
        case ONSUBMIT_FAILED: {
            state.loading = false;
            state.error = action.payload;
            return { ...state };
        }

        //GETUSERINFO
        case GET_USERINFO_REQUEST: {
            state.userInfo = action.payload;
            return { ...state };
        }

        //MODAL
        case OPEN_MODAL: {
            state.open = true;
            return { ...state };
        }
        case CLOSE_MODAL: {
            state.open = false;
            return { ...state };
        }
        case USER_PROFILE_REQUEST: {
            state.loadingUser = true;
            state.dataUser = null;
            state.errorUser = null;
            return { ...state }
        }
        case USER_PROFILE_SUCCESS: {
            state.loadingUser = false;
            state.dataUser = action.payload;
            state.errorUser = null;
            return { ...state }
        }
        case USER_PROFILE_FAILED: {
            state.loadingUser = false;
            state.dataUser = null;
            state.errorUser = action.payload;
            return { ...state }
        }
        // update profile
        case UPDATE_PROFILE_REQUEST: {
            state.loadingUpdate = true;
            state.dataUpdate = null;
            state.errorUpdate = null;
            return { ...state }
        }
        case UPDATE_PROFILE_SUCCESS: {
            state.loadingUpdate = false;
            state.dataUpdate = action.payload;
            state.errorUpdate = null;
            return { ...state }
        }
        case UPDATE_PROFILE_FAILED: {
            state.loadingUpdate = false;
            state.dataUpdate = null;
            state.errorUpdate = action.payload;
            return { ...state }
        }
        // cancel course
        case CANCEL_COURSE_REQUEST: {
            state.loadingCancel = true;
            state.dataCancel = null;
            state.errorCancel = null;
            return { ...state }
        }
        case CANCEL_COURSE_SUCCESS: {
            state.loadingCancel = false;
            state.dataCancel = action.payload;
            state.errorCancel = null;
            return { ...state }
        }
        case CANCEL_COURSE_FAILED: {
            state.loadingCancel = false;
            state.dataCancel = null;
            state.errorCancel = action.payload;
            return { ...state }
        }


        // SEARCH
        case GETKEYWORD: {
            state.keyword = action.payload;
            return { ...state };
        }

        default:
            return { ...state };

    }
}