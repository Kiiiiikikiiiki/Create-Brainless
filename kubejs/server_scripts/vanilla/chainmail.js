ServerEvents.recipes (e => {
    e.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: 'minecraft:iron_boots'},
        transitionalItem: {
            item: 'minecraft:iron_boots'
        },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_boots'
                    },
                    {
                        item: 'minecraft:chain'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_boots'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {item: 'minecraft:iron_boots'}
                ],
                results: [
                    {item: 'minecraft:iron_boots'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:chainmail_boots'}
        ],
        loops: 1
    })
    e.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: 'minecraft:iron_leggings'},
        transitionalItem: {
            item: 'minecraft:iron_leggings'
        },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_leggings'
                    },
                    {
                        item: 'minecraft:chain'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_leggings'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {item: 'minecraft:iron_leggings'}
                ],
                results: [
                    {item: 'minecraft:iron_leggings'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:chainmail_leggings'}
        ],
        loops: 1
    })
    e.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: 'minecraft:iron_chestplate'},
        transitionalItem: {
            item: 'minecraft:iron_chestplate'
        },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_chestplate'
                    },
                    {
                        item: 'minecraft:chain'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_chestplate'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {item: 'minecraft:iron_chestplate'}
                ],
                results: [
                    {item: 'minecraft:iron_chestplate'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:chainmail_chestplate'}
        ],
        loops: 1
    })
    e.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: 'minecraft:iron_helmet'},
        transitionalItem: {
            item: 'minecraft:iron_helmet'
        },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_helmet'
                    },
                    {
                        item: 'minecraft:chain'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_helmet'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {item: 'minecraft:iron_helmet'}
                ],
                results: [
                    {item: 'minecraft:iron_helmet'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:chainmail_helmet'}
        ],
        loops: 1
    })
})