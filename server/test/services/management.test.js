const assert = require('assert');
const app = require('../../src/app');

describe('\'management\' service', () => {
  it('registered the service', () => {
    const service = app.service('management');

    assert.ok(service, 'Registered the service');
  });
});
