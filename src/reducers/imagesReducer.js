import { IMAGES } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...action.images];
    default:
      return state;
  }
};
