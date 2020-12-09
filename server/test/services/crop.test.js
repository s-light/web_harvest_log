const assert = require('assert');
const app = require('../../src/app');

describe('\'crop\' service', () => {
  it('registered the service', () => {
    const service = app.service('crop');

    assert.ok(service, 'Registered the service');
  });
});
