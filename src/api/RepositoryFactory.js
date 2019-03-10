import Auth from './repositories/auth';
import Entity from './repositories/entity';

const repositories = {
  auth: Auth,
  entity: Entity
};

export default {
  get: name => repositories[name]
};