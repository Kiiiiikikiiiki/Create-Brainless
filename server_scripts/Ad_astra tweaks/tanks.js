ServerEvents.recipes(event => {
    function tank_recipe(nugget, plate, result) {
        event.remove({output: result})
        event.shaped({
            result: {item: result},
            pattern: [
                'PPN',
                'PBR',
                'PPN'
            ],
            key: {
                P: Ingredient.of(plate).toJson(),
                N: Ingredient.of(nugget).toJson(),
                B: Ingredient.of('minecraft:bucket').toJson(),
                R: Ingredient.of('#forge:rods/iron').toJson()
            }
        })
    }

    tank_recipe('ad_astra:desh_nugget', 'ad_astra:desh_plate', 'ad_astra:desh_tank')
    tank_recipe('ad_astra:ostrum_nugget', 'ad_astra:ostrum_plate', 'ad_astra:ostrum_tank')
    tank_recipe('ad_astra:calorite_nugget', 'ad_astra:calorite_plate', 'ad_astra:calorite_tank')
})