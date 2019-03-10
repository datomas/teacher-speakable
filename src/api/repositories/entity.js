import axios from 'axios';
import { BASE_URL } from '../../constants/utils';

export default {
  create(form, token) {
    if(token){
      return axios.post(`${BASE_URL}entities`, form, {headers: {'Authorization': 'Bearer '+token}}); 
    }
    return axios.post(`${BASE_URL}entities`, form);
  },
  update(form, token) {
    if(token){
      return axios.put(`${BASE_URL}entities`, form, {headers: {'Authorization': 'Bearer '+token}}); 
    }
    return axios.put(`${BASE_URL}entities`, form);
  },
  delete(form, token) {
    if(token){
      return axios.delete(`${BASE_URL}entities`, form, {headers: {'Authorization': 'Bearer '+token}}); 
    }
    return axios.delete(`${BASE_URL}entities`, form);
  }
}