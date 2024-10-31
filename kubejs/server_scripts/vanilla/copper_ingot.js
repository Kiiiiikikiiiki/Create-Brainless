ServerEvents.recipes(event => {
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {item: 'minecraft:nether_brick'},
            {item: 'chemlib:aluminum_ingot'}
        ],
        results: [
            {item: 'minecraft:copper_ingot'}
        ],
        heatRequirement: "heated"
    })
})