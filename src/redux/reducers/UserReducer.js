import { USER_LOGIN } from "../../util/setting";
import { LOGIN } from "../actions/type/UserType";

let userLogin = '';

if(localStorage.getItem(USER_LOGIN)){
    let usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

    userLogin = usLogin.taiKhoan;
}
const makeid =(length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));
const stateDefault = {
    isLoading:true,
    userAction:'',
    listUser:[],
    userDetail: [],
    listUserSelector:[],
    listUserWaiting: [],
    listUserJoined:[],
    userName: userLogin,
    userType:"",
    courseKey: "",
}

export const UserReducer = (state=stateDefault, action) => {
    switch(action.type){
        case LOGIN:{
            state.userName = action.userName;
            state.userType = action.userType;
            return {...state}
        }
        case 'GET_LIST_USER':{
            state.listUser = action.listUser;
            return{...state};
        }
        case 'GET_DETAIL_USER':{
            state.userDetail = action.detailUser;
            state.isLoading = false;
            return{...state};
        }
        case 'GET_USER_SELECTOR':{
            state.listUserSelector = action.listUserSelector;
            return{...state};
        }
        case 'GET_USER_WAITING':{
            state.listUserWaiting = action.listUserWaiting;
            return{...state};
        }
        case 'GET_USER_JOINED':{
            state.listUserJoined = action.listUserJoined;
            return{...state};
        }
        case 'GET_KEY_COURSE':{
            state.courseKey = action.payload;
            return { ...state };
        }

        case 'RESET_LOADING_USER':{
            state.isLoading = true;
            return{...state};
        }
        default:return {...state}
    }
}