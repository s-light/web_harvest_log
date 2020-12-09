const assert = require('assert');
const app = require('../../src/app');

describe('\'serial\' service', () => {
  it('registered the service', () => {
    const service = app.service('serial');

    assert.ok(service, 'Registered the service');
  });
});
