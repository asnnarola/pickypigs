import React, { lazy, Suspense } from 'react';
import { BrowserRouter,HashRouter,Route, Switch} from 'react-router-dom';
import withSplashScreen from './components/withSplashScreen';

import './App.css';
import { AppStateProvider } from './context';
import Routes from './routes';
import containers from './state';

// const Login = lazy(() => import('./view/Login/Login'));
// const Signup = lazy(() => import('./view/Signup/Signup'));

function App() {
  return (
    <AppStateProvider containers={containers}>
      <Suspense fallback={<div></div>}>
        <Switch>
          {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
          {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} /> */}
          <Routes />
        </Switch>
      </Suspense>
    </AppStateProvider>
  );
}

export default withSplashScreen(App);
