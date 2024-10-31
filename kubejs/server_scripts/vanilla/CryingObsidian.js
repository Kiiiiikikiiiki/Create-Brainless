ServerEvents.recipes(event => {
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: 'minecraft:obsidian'
        },
        transitionalItem : {
            item: 'minecraft:obsidian'
        },
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    {item: 'minecraft:obsidian'},
                    {
                        fluid: 'minecraft:lava',
                        nbt: {},
                        amount: 250
                    }
                ],
                results: [
                    {item: 'minecraft:obsidian'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {item: 'minecraft:obsidian'},
                    {
                        fluid: 'minecraft:water',
                        nbt: {},
                        amount: 250
                    }
                ],
                results: [
                    {item: 'minecraft:obsidian'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:crying_obsidian'}
        ],
        loops: 3
    })
})