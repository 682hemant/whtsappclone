import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import Chatreducer from '../reducers/ChatRducer';
import UserReducer from '../reducers/UserReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
     cht:Chatreducer,
     user:UserReducer
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export default store;