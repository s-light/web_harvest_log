module.exports = [
    {
        _id: 'Bird',
        text: 'Bird',
        icon: 'mdi-bird',
        image: '',
        description: ''
    },
    {
        _id: 'Bicycle',
        text: 'Bicycle',
        icon: 'mdi-bicycle',
        image: '',
        description: ''
    },
    {
        _id: 'Tomato',
        text: 'Tomato',
        // image: 'images/213975_tomato - coloured.svg',
        image: 'http://localhost:3030/api/crops/images/213975_tomato-coloured.svg',
        places: 0,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'TomatoBeef',
        text: 'Tomato Beef',
        // image: 'images/213975_tomato - coloured.svg',
        image: 'http://localhost:3030/api/crops/images/213975_tomato-coloured.svg',
        places: 2,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'TomatoCocktail',
        text: 'Tomato Cocktail',
        // image: 'images/213975_tomato - coloured.svg',
        image: 'http://localhost:3030/api/crops/images/213975_tomato-coloured.svg',
        places: 3,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'Carrot',
        text: 'Carrot',
        image: 'http://localhost:3030/api/crops/images/215799_carrot-coloured.svg',
        places: ['Indoor', 'Outdoor'],
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'Peas',
        text: 'Peas',
        image: 'http://localhost:3030/api/crops/images/213646_peas.svg',
        places: 3,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'Chili',
        text: 'Chili',
        image: 'http://localhost:3030/api/crops/images/314518_chili_mod.svg',
        places: 1,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'Peppers',
        text: 'Peppers',
        image: 'http://localhost:3030/api/crops/images/314520_peppers_mod.svg',
        places: 1,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'Onion',
        text: 'Onion',
        image: 'http://localhost:3030/api/crops/images/314628_red_onion.svg',
        places: 2,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
    {
        _id: 'Strawberry',
        text: 'Strawberry',
        image: 'http://localhost:3030/api/crops/images/313382_strawberry_mod.svg',
        places: 9,
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        },
        description: ''
    },
]
