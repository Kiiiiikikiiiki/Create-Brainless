ServerEvents.recipes(event => {
    event.custom({
        type : 'create:crushing',
        ingredients: [
            {
                item: 'minecraft:ender_pearl'
            }
        ],
        results: [
            {
                item: 'minecraft:blue_dye',
                chance: 0.40
            },
            {
                item: 'minecraft:blue_dye',
                chance: 0.10
            }
        ],
        processingTime: 250
    })
})