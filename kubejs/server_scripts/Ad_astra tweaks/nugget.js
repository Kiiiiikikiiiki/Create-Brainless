ServerEvents.recipes(event => {

    // Adding the recipes from cobble to sand for moon, mars and venus planet
    function nugget_recipe(cobble, sand) {
        // Crushing the cobble to become sand 
        event.custom({
            type: 'create:crushing',
            ingredients: [
                {item: cobble}
            ],
            results: [
                {item: sand},
                {item: 'ad_astra:ice_shard', chance: 0.05}
            ],
            processingTime: 250
        })
    }

    // Desh nugget recipes
    event.custom({
        type: 'create:splashing',
        ingredients: [
            {item: 'ad_astra:moon_sand'}
        ],
        results: [
            {item: 'ad_astra:desh_nugget', chance: 0.15}
        ]
    })

    // Ostrum nugget recipes 
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'ad_astra:mars_sand'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
            {item: 'minecraft:netherrack'},
        ],
        results: [
            {item: 'ad_astra:ostrum_nugget'}
        ],
        heatRequirement: 'heated'
    })

    // Calorite nugget recipes 
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'ad_astra:venus_sand'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {item: 'minecraft:magma_block'},
            {
                fluid: 'minecraft:lava', 
                amount: 500
            }
        ],
        results: [
            {item: 'ad_astra:calorite_nugget'}
        ],
        heatRequirement: 'superheated'
    })


    // adding the craft for each nugget
    nugget_recipe('ad_astra:moon_cobblestone', 'ad_astra:moon_sand')
    nugget_recipe('ad_astra:mars_cobblestone', 'ad_astra:mars_sand', 'ad_astra:ostrum_nugget')
    nugget_recipe('ad_astra:venus_cobblestone', 'ad_astra:venus_sand', 'ad_astra:calorite_nugget')
})