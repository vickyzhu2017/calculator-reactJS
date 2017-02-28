import { createStore, applyMiddleware } from 'redux';
import { counter } from '../components/Counter/CounterRedux';
// import loggerMiddleware from './loggerMiddleware';
import createLogger from 'redux-logger';
// import thunk from 'redux-thunk';

const store = createStore( counter, applyMiddleware( createLogger()));

export default store;