import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers/index';


const Store = createStore(
    Reducers,
    applyMiddleware(thunk)
);

export default Store;