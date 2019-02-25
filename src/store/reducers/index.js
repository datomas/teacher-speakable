import { combineReducers } from "redux";
import dashboard from './dashboard';
import user from './user';

export default combineReducers({
  user,
  dashboard
});
