import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers'
//引入中间件 redux-thunk 可以在action 中派发动作
import ReduxThunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import {routerMiddleware} from 'react-router-redux';

let history = createHistory();
let middleware = [ReduxThunk, routerMiddleware(history)];
//applyMiddleware
export default createStore(reducers, applyMiddleware(...middleware));