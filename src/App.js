
// import './App.css';
import './css/main.css';
import { Route, BrowserRouter, Switch, Router } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageNotFound/PageNotFound';


// Cấu hình thư viện điều hướng trang
import { createBrowserHistory } from 'history';
import { UserTemplate } from './template/UserTemplate/UserTemplate';
import { AdminTemplate } from './template/AdminTemplate/AdminTemplate';
import AppProvider from './context/AppProvider';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import UserProfile from './pages/User/UserProfile';
import ListCourses from './components/ListCourse/ListCourse';
import ListUser from './pages/Admin/ListUser/ListUser';
export const history = createBrowserHistory();



function App() {
  return (
    <Router history={history}>
      <div className="App">
        {/* <AppProvider> */}
          <Switch>
            <UserTemplate path="/" exact component={Home} />
            <UserTemplate path="/home" exact component={Home} />
            <UserTemplate path="/login" exact component={Login} />
            <UserTemplate path="/register" exact component={Register} />
            <Route path="/course/:maKhoaHoc" component={CourseDetail} />
            <Route path="/user-profile/0" component={UserProfile}/>
            <AdminTemplate path="/admin/list-course" exact component={ListCourses} />
            <AdminTemplate path="/admin/list-user" exact component={ListUser} />
            {/* <AdminTemplate path="/admin/i-detail/:taiKhoan" exact component={PersonBooked} /> */}
            <Route parth="*" component={PageNotFound} />
          </Switch>
        {/* </AppProvider> */}
      </div>
    </Router>
  );
}

export default App;
