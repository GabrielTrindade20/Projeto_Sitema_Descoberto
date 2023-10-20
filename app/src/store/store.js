import { createStore, combineReducers, applyMiddleware } from 'redux';
import radioReducer from '../reducers/authReducer';
import thunk from 'redux-thunk'; // Importe o redux-thunk

const rootReducer = combineReducers({
    radio: radioReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
