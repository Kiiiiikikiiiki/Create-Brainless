ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:beacon'})
    event.remove({output: 'createcasing:chorium_ingot'})
    event.shaped({
        result: {item: 'minecraft:beacon'},
        pattern: [
            'GGG',
            'GNG',
            'CCC'
        ],
        key: {
            G: Ingredient.of('minecraft:glass').toJson(),
            N: Ingredient.of('minecraft:nether_star').toJson(),
            C: Ingredient.of('minecraft:crying_obsidian').toJson()
        }
    })
})