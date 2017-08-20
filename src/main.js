import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'

//HashRouter 是#
//BrowserRouter /
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createHashHistory';

let history = createHistory();

import Home from './containers/Home';
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from './containers/App';

//引入公有样式
import './common/css/index.less'
//应用store
import store from './redux/store';


ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/lesson" component={Lesson}/>
            <Route path="/profile" component={Profile}/>
            <Redirect to="/home"/>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);