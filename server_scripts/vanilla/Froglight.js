ServerEvents.recipes(event => {
    function frog_light(nugget, result) {
        event.custom({
            type: "create:mixing",
            ingredients: [
                {item: nugget},
                {item: 'minecraft:magma_cream'},
                {item: 'minecraft:glowstone'}
            ],
            results: [{item: result}]
        })
    }

    frog_light('ad_astra:desh_nugget', 'minecraft:verdant_froglight')
    frog_light('ad_astra:ostrum_nugget', 'minecraft:pearlescent_froglight')
    frog_light('ad_astra:calorite_nugget', 'minecraft:ochre_froglight')
})