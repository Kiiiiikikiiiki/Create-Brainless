ServerEvents.recipes(event => {

    // Diamond Termite Shard Recipe
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {"item": "botania:quartz_dark"},
            {"item": "botania:quartz_dark"},
            {"item": "botania:quartz_dark"},
            {"item": "botania:quartz_dark"},
            {"item": "botania:quartz_dark"},
            {"item": "botania:quartz_dark"},
            {"item": "botania:quartz_dark"},
            {"item": "botania:quartz_dark"},
            {
                "fluid": 'minecraft:lava',
                "amount": 1000
            }
        ],
        "results": [
            {
                "item": "born_in_chaos_v1:diamond_termite_shard",
                "chance": 0.7
            }
        ],
        "heatRequirement": "superheated"
    })

    // Charcoal recipe 
    event.remove({id: 'mowziesmobs:charcoal_from_clawed_log'})
    event.remove({id: 'minecraft:charcoal'})

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {tag: 'forge:stripped_logs'},
            {tag: 'forge:stripped_logs'},
            {tag: 'forge:stripped_logs'},
            {tag: 'forge:stripped_logs'}
        ],
        results: [
            {
                item: 'minecraft:charcoal'
            }
        ],
        heatRequirement: 'heated'
    })

        // tuff recipe
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {"item": "minecraft:cobblestone"},
                {"item": "minecraft:cobblestone"},
                {"item": "minecraft:cobblestone"},
                {
                    "fluid": 'minecraft:water',
                    "amount": 100
                }
            ],
            "results": [
                {
                    "item": "minecraft:tuff"
                }
            ]
        })

        // blaze rod recipe
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {"item": "minecraft:blaze_powder"},
                {"item": "minecraft:blaze_powder"},
                {"item": "minecraft:blaze_powder"},
                {"item": "minecraft:blaze_powder"},
                {"item": "minecraft:blaze_powder"},
                {"item": "minecraft:blaze_powder"},
                {
                    "fluid": 'minecraft:lava',
                    "amount": 50
                }
            ],
            "results": [
                {
                    "item": "minecraft:blaze_rod"
                }
            ],
            "heatRequirement": "heated"
        })

        // calcite recipe
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {"item": "minecraft:tuff"},
                {"item": "minecraft:tuff"},
                {"item": "minecraft:gravel"},
                {"item": "minecraft:bone_meal"},
                {"item": "minecraft:bone_meal"},
                {"item": "minecraft:bone_meal"}
            ],
            "results": [
                {
                    "item": "minecraft:calcite"
                }
            ]
        })

        // asurine recipe
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {"item": "create:crushed_raw_zinc"},
                {"item": "minecraft:gravel"},
                {
                    "fluid": 'minecraft:water',
                    "amount": 500
                }
            ],
            "results": [
                {
                    "item": "create:asurine"
                }
            ]
        })

        // crimsite recipe
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {"item": "create:crushed_raw_iron"},
                {"item": "minecraft:gravel"},
                {
                    "fluid": 'minecraft:lava',
                    "amount": 500
                }
            ],
            "results": [
                {
                    "item": "create:crimsite"
                }
            ]
        })

        // ochrum recipe
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {"item": "create:crushed_raw_gold"},
                {"item": "minecraft:gravel"},
                {
                    "fluid": 'minecraft:lava',
                    "amount": 500
                }
            ],
            "results": [
                {
                    "item": "create:ochrum"
                }
            ]
        })

        // veridium recipe
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {"item": "create:crushed_raw_copper"},
                {"item": "minecraft:gravel"},
                {
                    "fluid": 'minecraft:lava',
                    "amount": 500
                }
            ],
            "results": [
                {
                    "item": "create:veridium"
                }
            ]
        })

    // charcoal to coal recipes 
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "minecraft:charcoal"
            }
        ],
        "results": [
            {
                "item": "minecraft:coal"
            }
        ]
    })
})