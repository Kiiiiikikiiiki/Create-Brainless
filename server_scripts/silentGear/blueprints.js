/*ServerEvents.recipes(event => {
    event.remove({output: 'silentgear:blueprint_paper'})

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:paper'},
        transitionalItem: {item: 'minecraft:paper'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:paper'
                    },
                    {
                        item: 'minecraft:blue_dye'
                    }
                ],
                results: [
                    {item: 'minecraft:paper'}
                ] 
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:paper'
                    },
                    {
                        item: 'minecraft:white_dye'
                    }
                ],
                results: [
                    {item: 'minecraft:paper'}
                ] 
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:paper'
                    }
                ],
                results: [
                    {item: 'minecraft:paper'}
                ] 
            }
        ],
        results: [
            {
                item: 'silentgear:blueprint_paper',
                chance: 65.0
            },
            {
                item: 'minecraft:paper',
                chance: 15.0
            },
            {
                item: 'minecraft:blue_dye',
                chance: 20.0
            }
        ],
        loops: 2
    })
})*/