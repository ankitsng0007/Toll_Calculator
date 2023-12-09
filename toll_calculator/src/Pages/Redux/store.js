// store.js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; // Use Redux Thunk for async actions if needed
import rootReducer from './tollReducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
