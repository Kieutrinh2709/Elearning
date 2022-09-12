
const stateDefault = {
    isLoading:true,
    listCourseShowing:[],
    courseDetail:[],
    listCategoryShowing: [],
    listCourseByCategoryShowing: [],
    paginateCourse: [],
    courseRegister: [],
    courseListInCart: [],
    courseCancel: [],
    keyword: "",

}


export const CourseReducer = (state=stateDefault, action)=>{
    switch(action.type){
        case 'GET_LIST_COURSE':{
            state.listCourseShowing= action.listCourse;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'GET_DETAIL_COURSE':{
            state.courseDetail = action.detailCourse;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'RESET_LOADING':{
            state.isLoading = true;
            return {...state};
        }
        case 'GET_LIST_CATEGORY':{
            state.listCategoryShowing = action.listCategory;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'GET_LIST_COURSE_BY_CATEGORY':{
            state.listCourseByCategoryShowing = action.listCourseByCategory;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'INTO_PAGINATION':{
            state.paginateCourse = action.paginationData;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'REGISTER_COURSE':{
            state.courseRegister = action.registerCourse;
            state.isLoading = action.isLoading;
            return {...state};
        }
        case 'COURSE_ADD_TO_CART':{
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
        case 'CANCEL_REGISTER_COURSE':{
            state.courseCancel = action.cancelCourse;
            state.isLoading = action.isLoading;
            return {...state};



        }
        case 'GET_KEYWORD':{
            state.keyword=action.payload;
            return {...state}
        }

        
        default: return {...state};
    }
} 