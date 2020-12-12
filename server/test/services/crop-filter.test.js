const assert = require('assert');
const app = require('../../src/app');

describe('\'cropFilter\' service', () => {
  it('registered the service', () => {
    const service = app.service('crop-filter');

    assert.ok(service, 'Registered the service');
  });
});
