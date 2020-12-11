

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [
            context => {
                const { service, result } = context;
                // console.log('service', service);
                // console.log('result', result);
                switch (result.id) {
                case 'baudRate':
                case 'port': {
                    service.reconnect();
                } break;
                    // default:
                }
                // if (result.summer) {
                //     service.FeathersVuexModel.store.commit('handleSummaryData', result.summary)
                // }
            }
        ],
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
