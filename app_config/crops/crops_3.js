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
        description: '',
        fill_check: {
            Box_35: {
                min: 100,
                max: 1000,
            }
        }
    },
    {
        _id: 'Carrot',
        text: 'Carrot',
        // image: 'images/213975_tomato - coloured.svg',
        image: 'http://localhost:3030/api/crops/images/215799_carrot-coloured.svg',
        description: ''
    },
    {
        _id: 'Peas',
        text: 'Peas',
        // image: 'images/213975_tomato - coloured.svg',
        image: 'http://localhost:3030/api/crops/images/213646_peas.svg',
        description: ''
    },
]
