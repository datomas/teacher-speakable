import Auth from './repositories/auth';

const repositories = {
  auth: Auth
};

export default {
  get: name => repositories[name]
};