import { lazy } from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate";

const routesHome = [
  //Home
  {
    page: "Trang chủ",
    exact: true,
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
  },

  //Courses
  {
    page: "Khoá học",
    exact: false,
    path: "/course",
    component: lazy(() => import("../components/ListCourse/CourseList")),
  },
  {
    page: "Tin tức",
    exact: false,
    path: "/news",
    component: lazy(() => import("../components/News/News")),
  },
  //Course detail
  {
    exact: false,
    path: "/course-detail/:maKhoaHoc",
    component: lazy(() => import("../pages/CourseDetail/CourseDetail")),
  },
  //User profile
  {
    page: "Người dùng",
    exact: false,
    path: "/user-profiles/:id",
    component: lazy(() => import("../pages/User/UserProfile")),
  },
];

const routeAdmin = [
  {
    page: "Quản Trị",
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../pages/Admin/Dashboard/DashBoard")),
  },
  {
    page: "Quản Lý Người Dùng",
    exact: false,
    path: "/list-users",
    component: lazy(() => import("../pages/Admin/ListUser/ListUser")),
  },
  {
    page: "Quản Lý Khoá Học",
    exact: true,
    path: "/list-courses",
    component: lazy(() => import("../pages/Admin/ListCourse/ListCourse")),
  },
  {
    page: "Thêm hoặc Thay Đổi Khóa Học",
    exact: false,
    path: "/list-courses/:action",
    component: lazy(() =>
      import(
        "../pages/Admin/ListCourse/EditCourse/EditCourse"
      )
    ),
  },
];

const routeLogin = [
  {
    exact: false,
    path: "/login",
    component: lazy(() => import("../pages/Login/Login")),
  },
]
const routeRegister=[
  {
    exact: false,
    path: "/register",
    component: lazy(() => import("../pages/Register/Register")),
  },
];

const renderRouteAdmin = () => {
  return routeAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

const renderRouteHome = () => {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

const renderRouteLogin = () => {
  return routeLogin.map((route, index) => {
    return (
      <Login
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};
const renderRouteRegister = () => {
    return routeRegister.map((route, index) => {
      return (
        <Register
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      );
    });
  };


export {
  renderRouteAdmin,
  renderRouteHome,
  renderRouteLogin,
  renderRouteRegister,
  routesHome,
  routeLogin,
  routeRegister

};
