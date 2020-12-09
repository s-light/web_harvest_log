const assert = require('assert');
const app = require('../../src/app');

describe('\'harvest\' service', () => {
  it('registered the service', () => {
    const service = app.service('harvest');

    assert.ok(service, 'Registered the service');
  });
});
