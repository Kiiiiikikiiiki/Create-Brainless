ServerEvents.recipes(event => {

    // dandelion
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:yellow_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:dandelion'}
        ]
    })

    // sunflower
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:dandelion'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:sunflower'}
        ]
    })

    // lily og the valley
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:white_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:lily_of_the_valley'}
        ]
    })

    // cornflower
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:blue_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:cornflower'}
        ]
    })

    // blue orchid
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:light_blue_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:blue_orchid'}
        ]
    })

    // allium
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:magenta_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:allium'}
        ]
    })

    // lilac
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:allium'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:lilac'}
        ]
    })

    // azure bluet
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:light_gray_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:azure_bluet'}
        ]
    })

    // oxeye daisy
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:white_tulip'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:oxeye_daisy'}
        ]
    })

    // poppy
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:red_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:poppy'}
        ]
    })

    // red tulip
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:poppy'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:red_tulip'}
        ]
    })

    // rose bush
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:red_tulip'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:rose_bush'}
        ]
    })

    // orange tulip
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:orange_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:orange_tulip'}
        ]
    })

    // white tulip
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:azure_bluet'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:white_tulip'}
        ]
    })

    // pink tulip
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:pink_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:pink_tulip'}
        ]
    })

    // peony
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:pink_tulip'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:peony'}
        ]
    })

    // pitcher plant
    event.custom({
        type: 'create:filling',
        ingredients: [
            {item: 'minecraft:cyan_dye'},
            {
                fluid: 'createaddition:seed_oil',
                nbt: {},
                amount: 250
            }
        ],
        results: [
            {item: 'minecraft:pitcher_plant'}
        ]
    })
})