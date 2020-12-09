const assert = require('assert');
const app = require('../../src/app');

describe('\'crate\' service', () => {
  it('registered the service', () => {
    const service = app.service('crate');

    assert.ok(service, 'Registered the service');
  });
});
