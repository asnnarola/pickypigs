import React, { lazy, Suspense } from 'react';
import { BrowserRouter,HashRouter,Route, Switch} from 'react-router-dom';
import withSplashScreen from './components/withSplashScreen';

import './App.css';
import { AppStateProvider } from './context';
import Routes from './routes';
import MobileRoutes from './MobileRoutes';
import containers from './state';
import Hidden from '@material-ui/core/Hidden';
import AlertSystemPage from './view/AlertSystemPage/AlertSystemPage';
import ResetPasswordPage from './view/ResetPasswordPage/ResetPasswordPage';

// const Login = lazy(() => import('./view/Login/Login'));
// const Signup = lazy(() => import('./view/Signup/Signup'));

function App() {
  return (
    <AppStateProvider containers={containers}>
      <Suspense fallback={<div></div>}>
        <div>
          <AlertSystemPage/>
        </div>
        {/* <Switch>
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/signup" render={(props) => <Signup {...props} />} />
          <Routes />
        </Switch> */}
        <Hidden only={['xs','sm']}>
            <Switch>
              {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
              {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} /> */}
              <Route exact path="/reset_password/:token" render={(props) => <ResetPasswordPage {...props} />} />

              <Routes />
            </Switch>
        </Hidden>
        <Hidden only={['xs','md','lg','xl']}>
            <Switch>
              {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
              {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} /> */}
              <Routes />
            </Switch>
        </Hidden>
        <Hidden only={['sm','md','lg','xl']}>
            <Switch>
              {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
              {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} /> */}
              <MobileRoutes />
            </Switch>
        </Hidden>

      </Suspense>
    </AppStateProvider>
  );
}
export default App;


// export default withSplashScreen(App);
