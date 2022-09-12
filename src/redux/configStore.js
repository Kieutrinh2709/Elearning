import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import {CourseReducer} from './reducers/CourseReducer';
import {UserReducer} from './reducers/UserReducer';

const rootReducer = combineReducers({
    
    CourseReducer,  
    UserReducer,
    
});


export const store = createStore(rootReducer,applyMiddleware(thunk));