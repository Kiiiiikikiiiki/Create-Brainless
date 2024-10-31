ServerEvents.recipes(e => {
    e.remove({output: 'smallships:sail'})
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'create:piston_extension_pole'},
        transitionalItem: {item: 'create:piston_extension_pole'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:piston_extension_pole'
                    },
                    {
                        item: 'minecraft:oak_log'
                    }
                ],
                results: [
                    {item: 'create:piston_extension_pole'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:piston_extension_pole'
                    },
                    {
                        item: 'farmersdelight:rope'
                    }
                ],
                results: [
                    {item: 'create:piston_extension_pole'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:piston_extension_pole'
                    },
                    {
                        item: 'minecraft:white_wool'
                    }
                ],
                results: [
                    {item: 'create:piston_extension_pole'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:piston_extension_pole'
                    },
                    {
                        item: 'minecraft:lead'
                    }
                ],
                results: [
                    {item: 'create:piston_extension_pole'}
                ]
            }
        ],
        results: [
            {item: 'smallships:sail'}
        ],
        loops: 3
    })
})