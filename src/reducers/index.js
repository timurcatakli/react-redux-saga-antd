import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;
