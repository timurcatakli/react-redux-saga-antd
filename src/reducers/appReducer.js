import { APP } from '../constants';

const initialState = {
  sidebarCollapsed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    default:
      return state;
  }
};
