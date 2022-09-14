
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
import CourseDetail from './pages/CourseDetail/CourseDetail';
import UserProfile from './pages/User/UserProfile';
import ListUser from './pages/Admin/ListUser/ListUser';
import DashBoard from './pages/Admin/Dashboard/DashBoard';
import NewCourse from './pages/Admin/ListCourse/NewCourse/NewCourse';
import EditCourse from './pages/Admin/ListCourse/EditCourse/EditCourse';
import ListCourse from './pages/Admin/ListCourse/ListCourse';
export const history = createBrowserHistory();



function App() {
  return (
    <Router history={history}>
      <div className="App">
          <Switch>
            <UserTemplate path="/" exact component={Home} />
            <UserTemplate path="/home" exact component={Home} />
            <UserTemplate path="/login" exact component={Login} />
            <UserTemplate path="/register" exact component={Register} />
            <UserTemplate path="/user-profiles/:id" exact component={UserProfile} />
            <Route path="/course/:maKhoaHoc" component={CourseDetail} />
            <AdminTemplate path="/admin" exact component={DashBoard} />
            <AdminTemplate path="/admin/course" exact component={ListCourse} />
            <AdminTemplate path="/admin/course/newcourse" exact component={NewCourse} />
            <AdminTemplate path="/admin/course/editcourse/:id/" exact component={EditCourse} />
            <AdminTemplate path="/admin/user" exact component={ListUser} />
            <Route parth="*" component={PageNotFound} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
