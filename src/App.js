import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter,HashRouter,Route, Switch} from 'react-router-dom';
import withSplashScreen from './components/withSplashScreen';

import './App.css';
import { AppStateProvider } from './context';
import Routes from './routes';
import MobileRoutes from './MobileRoutes';
import containers from './state';
import Hidden from '@material-ui/core/Hidden';
import AlertSystemPage from './view/AlertSystemPage/AlertSystemPage';
import LoadonTop from './components/LoadonTop';
import store from './redux/store';
import { getUserProfileDetail } from './redux/actions/userProfileAction';
import { useDispatch } from 'react-redux';

// const Login = lazy(() => import('./view/Login/Login'));
// const Signup = lazy(() => import('./view/Signup/Signup'));

const ResetPasswordPage = lazy(() => import('./view/ResetPasswordPage/ResetPasswordPage'));

function App() {
    const dispatch=useDispatch();
    const token = localStorage.getItem("access_token");
    useEffect(()=>{
      if(localStorage.access_token){
        store.dispatch(getUserProfileDetail())
      }
    },[dispatch]);

  return (
    <AppStateProvider containers={containers}>
      <Suspense fallback={<div></div>}>
        <div>
          <AlertSystemPage/>
        </div>
        <LoadonTop/>
        {/* <Switch>
            <Route exact path="/login" render={(props) => <Login {...props} />} />
            <Route exact path="/signup" render={(props) => <Signup {...props} />} />
          <Routes />
        </Switch> */}
        <Hidden only={['xs','sm']}>
            <Switch>
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
