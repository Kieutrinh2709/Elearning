import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { getListCourseAction } from '../redux/actions/CourseAction';

export const AppContext = createContext();
export default function AppProvider({ children }) {
    const { listCourseShowing } = useSelector(state => state.CourseReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListCourseAction());
    }, []);
    return (
        <AppContext.Provider value={{ listCourseShowing}}>
            listCourseShowing ? children : <Loader /> : <Loader /> : <Loader />
        </AppContext.Provider>
    )
}
