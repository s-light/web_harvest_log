module.exports = [
    {
        _id: '0_all',
        text: 'all',
        // text: {
        //     'en': 'all',
        //     'de': 'Alle'
        // },
        query: {
            _$sort: {
                _id: 1
            }
        },
        // icon: 'mdi-database-search-outline',
        icon: 'mdi-star-face',
        description: ''
    },
    {
        _id: '1_recent',
        text: 'recent',
        // text: {
        //     'en': 'recent',
        //     'de': 'kürzlich'
        // },
        query: {
            _$limit: 10,
            _$sort: {
                lastUsed: -1
            }
        },
        icon: 'mdi-calendar-clock',
        description: ''
    },
    {
        _id: 'leaf-greens',
        text: 'leaf greens',
        query: {
            tags: {
                _$in: [ 'leaf' ]
            }
        },
        image: 'images_dev/313740_leafy-green-vegetable_mod.svg',
        description: ''
    },
    {
        _id: 'cabbage',
        text: 'cabbage',
        query: {
            tags: {
                _$in: [ 'cabbage' ]
            }
        },
        image: 'images_dev/232225_green_cabbage.svg',
        description: ''
    },
    {
        _id: 'onion',
        text: 'onion',
        query: {
            tags: {
                _$in: [ 'onion' ]
            }
        },
        image: 'images_dev/314628_red_onion.svg',
        description: ''
    },
    {
        _id: 'fruit',
        text: 'fruit',
        query: {
            tags: {
                _$in: [ 'fruit' ]
            }
        },
        image: 'images_dev/fruit/213975_tomato-coloured.svg',
        description: ''
    },
    {
        _id: 'root',
        text: 'root',
        query: {
            tags: {
                _$in: [ 'root' ]
            }
        },
        image: 'images_dev/215799_carrot-coloured.svg',
        description: ''
    },
    {
        _id: 'herb',
        text: 'herb',
        query: {
            tags: {
                _$in: [ 'herb' ]
            }
        },
        image: 'images_dev/241191_Sage_Lores.svg',
        description: ''
    },
    {
        _id: 'flower',
        text: 'flower',
        query: {
            tags: {
                _$in: [ 'flower' ]
            }
        },
        image: 'images_dev/214593_Paisley_Flower-02.svg',
        description: ''
    },
]
