ServerEvents.recipes(event => {
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "minecraft:clay"
            }
    ],
        "results": [
            {
                "item": "tfmg:fireclay_ball",
                "chance": 0.65
            }
        ]
    })

    event.remove({id: 'tfmg:casting/amogus'})
    event.remove({id: 'tfmg:casting/steel'})
    event.custom({
        "type": "tfmg:casting",
        "ingredients": [
            {
                "fluid": "tfmg:molten_steel",
                "amount": 111
            }

        ],
        "processingTime": 200,
        "results": [
            {
                "count": 1,
                "item": "tfmg:steel_ingot"
            }
            ,
            {
              "count": 1,
              "item": "tfmg:steel_block"
            }
        ]
    })

    event.remove({id: 'tfmg:mixing/blasting_mixture'})
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "tfmg:limesand"
            },
            {
                "item": "create:crushed_raw_iron"
            },
            {
                "item": "create:crushed_raw_iron"
            },
            {
                "item": "create:crushed_raw_iron"
            }
        ],
        "results": [
            {
                "item": "tfmg:blasting_mixture"
            }
        ]
    })
})