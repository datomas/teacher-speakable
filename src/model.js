import RepositoryFactory from './api/RepositoryFactory';
import { thunk, useStore } from 'easy-peasy';

const Auth = RepositoryFactory.get('auth');
const Entity = RepositoryFactory.get('entity');
// const Auth = RepositoryFactory.get('auth');


const model = {
  user: {
    authenticated: false,
    items: [],
    login: thunk(async(user, form) => {
      const email = form.email;
      const password = form.password;
      const { data } = await Auth.login({
        email,
        password
      });
      return data;
    }),
    logout: (state) => {
      state.items = {};
      state.authenticated = false;
    },
    save: (state, payload) => {
      state.items = payload;
      state.authenticated = true;
    },
    setAuthenticated: (state, payload) => {
      state.authenticated = payload;
    }
  },

  entity: {
    data: {entity_id: "123123"},
    show: thunk(async() => {

    }),
    index: thunk(async() => {

    }),
    create: thunk(async(action, form) => {
      const { data } = await Entity.create(form.form, form.token);
      return data;
    })
    update: thunk(async(action, form) => {
      const { data } = await Entity.create(form.form, form.token);
      return data;
    })
    destroy: thunk(async(action, form) => {
      const { data } = await Entity.create(form.form, form.token);
      return data;
    })
  }
}

export default model;