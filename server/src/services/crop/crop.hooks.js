
const setTimestamp = require('../../hooks/set-timestamp');

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [setTimestamp('lastUsed')],
        update: [setTimestamp('lastUsed')],
        patch: [setTimestamp('lastUsed')],
        remove: []
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
