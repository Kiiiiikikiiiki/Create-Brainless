ServerEvents.recipes(event => {
    event.remove({output: 'pneumaticcraft:pressure_tube'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'create_things_and_misc:neon_tube'
        },
        transitionalItem: {
            item: 'create_things_and_misc:neon_tube'
        },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create_things_and_misc:neon_tube'
                    },
                    {
                        item: 'pneumaticcraft:ingot_iron_compressed'
                    }
                ],
                results: [
                    {
                        item: 'create_things_and_misc:neon_tube'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create_things_and_misc:neon_tube'
                    },
                    {
                        item: 'minecraft:glass'
                    }
                ],
                results: [
                    {
                        item: 'create_things_and_misc:neon_tube'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create_things_and_misc:neon_tube'
                    },
                    {
                        item: 'pneumaticcraft:ingot_iron_compressed'
                    }
                ],
                results: [
                    {
                        item: 'create_things_and_misc:neon_tube'
                    }
                ]
            }
        ],
        results: [
            {
                item: 'pneumaticcraft:pressure_tube',
                count: 3
            }
        ],
        loops: 3
    })
})