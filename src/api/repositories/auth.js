import axios from 'axios';
import { BASE_URL } from '../../constants/utils';


export default {
  login(form) {
    return axios.post(`${BASE_URL}auth/login?with=entity:[id,name];role:[id,name]`, form);
  }
}