
// import './App.css';
import './css/main.css';
import { Route, BrowserRouter, Switch, Router } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';

// Cấu hình thư viện điều hướng trang
import { createBrowserHistory } from 'history';
import { renderRouteAdmin, renderRouteHome, renderRouteLogin, renderRouteRegister } from './Routes/Routes';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';
export const history = createBrowserHistory();



function App() {
  return (
    <Suspense fallback={
      <div>
        <Loader/>
      </div>
    }>
      <Router history={history}>
        <div className="App">
          <Switch>
            {renderRouteLogin()}
            {renderRouteRegister()}
            {renderRouteAdmin()}
            {renderRouteHome()}

            <Route parth="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
