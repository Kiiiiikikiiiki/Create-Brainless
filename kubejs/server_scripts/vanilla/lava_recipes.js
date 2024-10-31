ServerEvents.recipes(event => {
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {item: 'ad_astra:venus_cobblestone'}
        ],
        results: [
            {fluid: 'minecraft:lava', amount: 50}
        ],
        heatRequirement: 'superheated'
    })
})