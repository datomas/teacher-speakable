import axios from 'axios';
import { BASE_URL } from '../constants/utils';

// TODO: set up service for API

const config = {
  // `url` is the server URL that will be used for the request
  // url: '/api',

  // // `method` is the request method to be used when making the request
  // method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: BASE_URL,


};

export default API = axios.request(config);

