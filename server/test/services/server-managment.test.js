const assert = require('assert');
const app = require('../../src/app');

describe('\'serverManagment\' service', () => {
  it('registered the service', () => {
    const service = app.service('server-managment');

    assert.ok(service, 'Registered the service');
  });
});
