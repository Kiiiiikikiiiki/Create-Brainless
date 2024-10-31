ServerEvents.recipes(e => {
    e.custom({
        type: 'create:mixing',
        ingredients: [
            {item: 'born_in_chaos_v1:pileof_dark_metal'},
            {item: 'ad_astra:ostrum_ingot'},
            {item: 'advancednetherite:netherite_diamond_ingot'},
            {item: 'botania:gaia_ingot'}
        ],
        results: [
            {item: 'born_in_chaos_v1:dark_metal_ingot'}
        ],
        heatRequirement: 'superheated'
    })

    e.remove({id: "born_in_chaos_v1:dark_ritual_dagger_k"})
})