import { AUTHENTICATE_USER } from '../constants';

const initialState = {
  authenticated: false,
  details: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: true,
        details: action.payload
      };

    default:
      return state;
  }
};