import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middleware = applyMiddleware(promise, thunkMiddleware);

export default createStore(reducer, middleware);
