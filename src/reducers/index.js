import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  images: imagesReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;
