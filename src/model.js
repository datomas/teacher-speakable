import RepositoryFactory from './api/RepositoryFactory';
import { thunk, useDispatch } from 'easy-peasy';
const API = RepositoryFactory.get('auth');


const model = {

  user: {
    authenticated: false,
    items: [],
    login: thunk(async(user, form) => {
      const email = form.email;
      const password = form.password;
      const { data } = await API.login({
        email,
        password
      });
      return data;
    }),
    logout: (state) => {
      localStorage.removeItem('speakablekey');
      state.authenticated = false;
    },
    save: (state, payload) => {
      state.items = payload;
      // state.items.push(payload);
    },
    setAuthenticated: (state, payload) => {
      state.authenticated = payload;
    }
  },

  entity: {
    data: {entity_id: "123123"}
  }
}

export default model;