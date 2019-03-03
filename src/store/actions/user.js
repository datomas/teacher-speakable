// import Cookies form 'js-cookie'; // TODO: install this
// import { TOKEN } from '../../constants/utils';
import RepositoryFactory from '../../api/RepositoryFactory';
import { AUTHENTICATE_USER } from '../constants';

const API = RepositoryFactory.get('auth');

export const authenticate = ({ email, password, rememberMe }) => async (dispatch) => {
  const { data, success } = await API.login({
    email,
    password
  });

  console.log('authentication response---', data, success)

  if (!success) return;

  // if(rememberMe) Cookies.set(TOKEN, data._token, { expires: 7});
  // localStorage.setItem(TOKEN, data._token);

  dispatch({
    type: AUTHENTICATE_USER,
    payload: data
  });
};