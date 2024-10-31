ServerEvents.recipes(event => {
    event.remove({id: 'createcasing:sequenced_assembly/chorium_ingot'})

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'create:polished_rose_quartz'},
        transitionalItem: {item: 'create:polished_rose_quartz'},
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'create:polished_rose_quartz'
                    },
                    {
                        fluid: 'minecraft:lava',
                        nbt: {},
                        amount: 500
                    }
                ],
                results: [
                    {item: 'create:polished_rose_quartz'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:polished_rose_quartz'
                    },
                    {
                        item: 'minecraft:popped_chorus_fruit'
                    }
                ],
                results: [
                    {item: 'create:polished_rose_quartz'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:polished_rose_quartz'
                    },
                    {
                        item: 'botania:terrasteel_ingot'
                    }
                ],
                results: [
                    {item: 'create:polished_rose_quartz'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'create:polished_rose_quartz'
                    }
                ],
                results : [
                    {item: 'create:polished_rose_quartz'}
                ]
            }
        ],
        results: [
            {item: 'createcasing:chorium_ingot'}
        ],
        loops: 3
    })
})