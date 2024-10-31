ServerEvents.recipes(event => {
    function engine_recipes(block, nugget, plate, result) {
        event.remove({output: result})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'NBN',
                'IEI',
                ' F ',
                'PPP'
            ],
            key: {
                B: Ingredient.of(block).toJson(),
                N: Ingredient.of(nugget).toJson(),
                I: Ingredient.of('#forge:rods/iron').toJson(),
                E: Ingredient.of('ad_astra:engine_frame').toJson(),
                F: Ingredient.of('ad_astra:engine_fan').toJson(),
                P: Ingredient.of(plate).toJson()
            },
            result: Item.of(result).toJson(),
            acceptMirrored: false
        })
    }

    engine_recipes('ad_astra:steel_block', 'ad_astra:steel_nugget', 'ad_astra:steel_plate', 'ad_astra:steel_engine')
    engine_recipes('ad_astra:desh_block', 'ad_astra:desh_nugget', 'ad_astra:desh_plate', 'ad_astra:desh_engine')
    engine_recipes('ad_astra:ostrum_block', 'ad_astra:ostrum_nugget', 'ad_astra:ostrum_plate', 'ad_astra:ostrum_engine')
    engine_recipes('ad_astra:calorite_block', 'ad_astra:calorite_nugget', 'ad_astra:calorite_plate', 'ad_astra:calorite_engine')
})